import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 mt-20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-bold text-sm">
                DS
              </div>
              <span className="text-lg font-bold text-slate-900">Dev Stack</span>
            </div>
            <p className="text-sm text-slate-500 max-w-sm">
              Curated tools, technologies, and resources for developers to build modern software.
            </p>
            <div className="flex space-x-4 text-sm font-semibold text-slate-600">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition">LinkedIn</a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#home" className="hover:text-slate-900 transition">Home</a></li>
              <li><a href="#technologies" className="hover:text-slate-900 transition">Technologies</a></li>
              <li><a href="#projects" className="hover:text-slate-900 transition">Projects</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#about" className="hover:text-slate-900 transition">About</a></li>
              <li><a href="#contact" className="hover:text-slate-900 transition">Contact</a></li>
              <li><a href="#careers" className="hover:text-slate-900 transition">Careers</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#privacy" className="hover:text-slate-900 transition">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-slate-900 transition">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#privacy" className="hover:text-slate-600 transition">Privacy</a>
            <a href="#terms" className="hover:text-slate-600 transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}