'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface GitHubStats {
  commits: number;
  prs: number;
  mergedPrs: number;
  reviewedPrs: number;
  issues: number;
  comments: number;
  branches: number;
  loading: boolean;
  error?: string;
}

interface GitHubEvent {
  type: string;
  created_at: string;
  payload: {
    commits?: { sha: string; message: string }[];
    action?: string;
    pull_request?: { merged?: boolean; state?: string };
    review?: { state?: string };
    ref_type?: string;
    ref?: string;
  };
}

const GitHubStatsWidget = ({
  username = 'DrAcula27',
}: {
  username?: string;
}) => {
  const [stats, setStats] = useState<GitHubStats>({
    commits: 0,
    prs: 0,
    mergedPrs: 0,
    reviewedPrs: 0,
    issues: 0,
    comments: 0,
    branches: 0,
    loading: true,
  });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // get date 90 days ago
        const ninetyDaysAgo = new Date();
        ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
        // const since = ninetyDaysAgo.toISOString();

        // build headers (use NEXT_PUBLIC_GITHUB_TOKEN if provided to reduce rate limiting)
        const headers: Record<string, string> = {
          Accept: 'application/vnd.github.v3+json',
        };
        const token = (
          process.env as Record<string, string | undefined>
        ).NEXT_PUBLIC_GITHUB_TOKEN;
        if (token) {
          headers.Authorization = `token ${token}`;
        }

        // fetch public events (note: /users/:username/events returns recent public events)
        const response = await fetch(
          `https://api.github.com/users/${username}/events`,
          { headers }
        );
        if (!response.ok) {
          throw new Error(
            `Error fetching data: ${response.status} ${response.statusText}`
          );
        }

        const events = (await response.json()) as
          | GitHubEvent[]
          | null;
        if (!Array.isArray(events)) {
          throw new Error('Unexpected response from GitHub API');
        }

        const statsCalc = {
          commits: 0,
          prs: 0,
          mergedPrs: 0,
          reviewedPrs: 0,
          issues: 0,
          comments: 0,
          branches: 0,
        };

        events.forEach((event) => {
          if (event.type === 'PushEvent') {
            statsCalc.commits += event.payload.commits?.length || 0;
          } else if (event.type === 'PullRequestEvent') {
            // count PR events (opened/closed/etc.)
            statsCalc.prs += 1;
            // when a PR is closed and merged, count as merged
            if (
              event.payload.action === 'closed' &&
              event.payload.pull_request?.merged
            ) {
              statsCalc.mergedPrs += 1;
            }
          } else if (event.type === 'PullRequestReviewEvent') {
            // reviews submitted — count as reviewed PRs (simplified)
            if (event.payload.action === 'submitted') {
              statsCalc.reviewedPrs += 1;
            }
          } else if (event.type === 'IssuesEvent') {
            statsCalc.issues += 1;
          } else if (event.type === 'IssueCommentEvent') {
            statsCalc.comments += 1;
          } else if (
            event.type === 'CreateEvent' &&
            event.payload.ref_type === 'branch'
          ) {
            statsCalc.branches += 1;
          }
        });

        setStats({
          ...statsCalc,
          loading: false,
        });
      } catch (error: unknown) {
        setStats((prev) => ({
          ...prev,
          loading: false,
          error: `Failed to fetch GitHub stats: ${error}`,
        }));
      }
    };

    fetchGitHubStats();
  }, [username]);

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        delayChildren: 0.2,
        staggerChildren: 0.1,
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  if (stats.loading) {
    return (
      <motion.div
        className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 mt-6 border border-neutral-200 dark:border-neutral-700"
        variants={statsVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="animate-pulse">
          <div className="h-4 bg-neutral-300 dark:bg-neutral-600 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-neutral-300 dark:bg-neutral-600 rounded w-full"></div>
        </div>
      </motion.div>
    );
  }

  if (stats.error) {
    return (
      <motion.div
        className="bg-red-100 dark:bg-red-800 rounded-lg p-4 mt-6 border border-red-200 dark:border-red-700"
        variants={statsVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="text-red-600 dark:text-red-200">
          {stats.error}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-gradient-to-b from-primary-900/20 to-secondary-900/20 rounded-lg p-4 mt-6 border border-accent-dark"
      variants={statsVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p className="text-lg max-w-xl mx-auto leading-relaxed mb-0">
        In the last 90 days on GitHub I{' '}
        {stats.commits > 0 && (
          <>
            pushed{' '}
            <span className="font-semibold text-secondary-200 dark:text-secondary-600">
              {stats.commits} commits
            </span>
            {(stats.prs > 0 ||
              stats.mergedPrs > 0 ||
              stats.reviewedPrs > 0 ||
              stats.comments > 0 ||
              stats.branches > 0) &&
              ', '}
          </>
        )}
        {stats.prs > 0 && (
          <>
            opened{' '}
            <span className="font-semibold text-secondary-200 dark:text-secondary-600">
              {stats.prs} PRs
            </span>
            {(stats.mergedPrs > 0 ||
              stats.reviewedPrs > 0 ||
              stats.comments > 0 ||
              stats.branches > 0) &&
              ', '}
          </>
        )}
        {stats.mergedPrs > 0 && (
          <>
            merged{' '}
            <span className="font-semibold text-secondary-200 dark:text-secondary-600">
              {stats.mergedPrs} PRs
            </span>
            {(stats.reviewedPrs > 0 ||
              stats.comments > 0 ||
              stats.branches > 0) &&
              ', '}
          </>
        )}
        {stats.reviewedPrs > 0 && (
          <>
            reviewed{' '}
            <span className="font-semibold text-secondary-200 dark:text-secondary-600">
              {stats.reviewedPrs} PRs
            </span>
            {(stats.comments > 0 || stats.branches > 0) && ', '}
          </>
        )}
        {stats.comments > 0 && (
          <>
            made{' '}
            <span className="font-semibold text-secondary-200 dark:text-secondary-600">
              {stats.comments} comments
            </span>
            {stats.branches > 0 && ', '}
          </>
        )}
        {stats.branches > 0 && (
          <>
            and created{' '}
            <span className="font-semibold text-secondary-200 dark:text-secondary-600">
              {stats.branches} branches
            </span>
          </>
        )}{' '}
        in public repositories.
      </motion.p>
    </motion.div>
  );
};

export default GitHubStatsWidget;
