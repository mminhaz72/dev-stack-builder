import React from 'react';
import bannerImg from '../assets/banner-stack.png';

export default function Banner() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-10">
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Build Your Ideal <br />
          <span className="text-brand-gradient">Development Stack</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-xl">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a 
            href="#technologies" 
            className="bg-brand-gradient text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:opacity-95 transition"
          >
            Explore Technologies
          </a>
          <button className="border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-xl hover:bg-slate-50 transition">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="flex justify-center">
        <img 
          src={bannerImg} 
          alt="Development Stack Illustration" 
          className="w-full max-w-md object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
}