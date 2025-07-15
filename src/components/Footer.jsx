export default function Footer() {
  return (
    <footer className="glass-nav border-t border-cyan-400/20">
      <div className="max-w-screen-xl mx-auto p-8 text-center">
        <div className="mb-4">
          <span className="text-2xl font-bold neon-text">&lt;/Emiliano&gt;</span>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
          <span>© 2024 Emiliano Sebastian Freitas</span>
          <span className="hidden md:block">•</span>
          <span>Crafted with ⚡ and lots of ☕</span>
          <span className="hidden md:block">•</span>
          <span className="neon-text">All Rights Reserved</span>
        </div>
        
        <div className="mt-4 text-xs text-gray-500 font-mono">
          <span className="opacity-60">&gt; </span>
          <span className="animate-pulse">System status: Fully operational</span>
        </div>
      </div>
    </footer>
  );
}