import React from 'react';
import { Star } from 'lucide-react';

export default function TechCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div 
      className={`bg-white rounded-2xl p-6 shadow-sm border transition flex flex-col justify-between ${
        isAdded ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 hover:border-slate-300'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <img src={icon} alt={name} className="w-12 h-12 object-contain" />
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
            {badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-1">{name}</h3>
        <p className="text-sm text-slate-500 mb-4 line-clamp-2">{description}</p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pt-4 border-t border-slate-100">
          <span className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded font-medium">{category}</span>
          <span className="text-slate-600">{difficulty}</span>
          <div className="flex items-center gap-1 text-amber-500 font-bold">
            <Star className="w-4 h-4 fill-amber-400" />
            <span>{rating}</span>
          </div>
        </div>

        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 rounded-xl font-semibold transition shadow-sm ${
            isAdded
              ? 'bg-red-50 text-red-600 border border-red-200 cursor-not-allowed'
              : 'bg-slate-900 text-white hover:bg-slate-800'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
}