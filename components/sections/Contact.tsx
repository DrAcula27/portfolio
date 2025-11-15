'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'sent'>(
    'idle'
  );

  const validate = () => {
    if (!name.trim() || !email.trim() || !message.trim())
      return false;
    return /\S+@\S+\.\S+/.test(email);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus('error');
      return;
    }
    setStatus('sent');
    const subject = encodeURIComponent(
      `Contact from ${name} via Portfolio`
    );
    const body = encodeURIComponent(
      `${message}\n\n— ${name} (${email})`
    );
    window.location.href = `mailto:danielle.andrews.dev@icloud.com?subject=${subject}&body=${body}`;
  };

  const socials = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/daniellerandrews',
      color: 'text-neutral-400',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/DrAcula27',
      color: 'text-neutral-400',
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-16"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            I&apos;d love to hear from you! Whether you have a
            question, want to collaborate, or just want to say hi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Left Column */}
          <div className="flex flex-col justify-start space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Let&apos;s Connect
              </h3>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Send me an email
                </p>
                <a
                  href="mailto:danielle.andrews.dev@icloud.com"
                  className="flex items-center gap-3 mt-2 hover:text-accent-cool hover:scale-110 active:scale-95 transition-all"
                >
                  <IoMail className="w-6 h-6" />
                  danielle.andrews.dev@icloud.com
                </a>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-sm font-medium mb-4 text-neutral-600 dark:text-neutral-400">
                Connect on social
              </p>
              <div className="flex gap-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:text-accent-cool hover:scale-110 active:scale-95 transition-all`}
                      title={social.name}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Send Me a Message
            </h3>
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={onSubmit}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 shadow-md border border-neutral-200 dark:border-neutral-700"
            >
              <div className="space-y-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium mb-1">
                    Name
                  </span>
                  <input
                    className="px-3 py-2 rounded bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium mb-1">
                    Email
                  </span>
                  <input
                    className="px-3 py-2 rounded bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    type="email"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium mb-1">
                    Message
                  </span>
                  <textarea
                    className="px-3 py-2 rounded bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[120px] resize-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here. Let's build great software together!"
                  />
                </label>

                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-red-600 dark:text-red-400"
                  >
                    Please complete the form with a valid email.
                  </motion.p>
                )}
                {status === 'sent' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-green-600 dark:text-green-400"
                  >
                    Opening your mail client…
                  </motion.p>
                )}

                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-primary-600 text-white rounded font-medium hover:bg-primary-700 transition-all cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
