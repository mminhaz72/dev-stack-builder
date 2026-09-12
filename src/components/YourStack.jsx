import React from 'react';
import { X } from 'lucide-react';

export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900">Your Stack</h3>
        <p className="text-sm text-slate-500">
          {stack.length} Technology Selected
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="text-center py-10 border-2 border-dashed border-slate-200 rounded-xl p-4">
          <p className="text-sm text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
          {stack.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/50"
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 p-1.5 bg-white rounded-lg border border-slate-100 flex items-center justify-center">
                  <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.category}</p>
                </div>
              </div>
              <button 
                onClick={() => onRemove(item.id, item.name)}
                className="text-slate-400 hover:text-red-500 p-1 transition"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full py-2.5 border border-red-200 text-red-600 font-semibold text-sm rounded-xl hover:bg-red-50 transition"
        >
          Remove All
        </button>
      )}
    </div>
  );
}