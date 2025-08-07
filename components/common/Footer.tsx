'use client';

export default function Footer() {
  return (
    <footer className="flex items-center justify-center p-4">
      <p className="text-sm">
        © {new Date().getFullYear()} Danielle Andrews. All rights
        reserved.
      </p>
    </footer>
  );
}
