export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
        <div className="md:col-span-5 flex items-center gap-3">
          <span className="h-5 w-5 rounded-sm bg-ink flex items-center justify-center text-paper text-[10px] font-semibold">
            S
          </span>
          <p className="text-[13px] text-ink/70">
            © {new Date().getFullYear()} Md Abu Sufian — built with Next.js,
            shipped from Dhaka.
          </p>
        </div>

        <div className="md:col-span-4 flex items-center gap-5">
          <a href="#top" className="text-[13px] hover:text-ember transition-colors">
            Back to top
          </a>
          <a href="#work" className="text-[13px] text-ink/70 hover:text-ink transition-colors">
            Work
          </a>
          <a href="#contact" className="text-[13px] text-ink/70 hover:text-ink transition-colors">
            Contact
          </a>
        </div>

        <p className="md:col-span-3 md:text-right num text-[11px] text-subtle tracking-wide">
          portfolio.unicorntoolbox.com
        </p>
      </div>
    </footer>
  );
}
