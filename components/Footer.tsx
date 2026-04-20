export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>© {new Date().getFullYear()} Md Abu Sufian Sufi. Crafted with Next.js.</p>
        <p className="font-mono text-xs">
          portfolio.unicorntoolbox.com
        </p>
      </div>
    </footer>
  );
}
