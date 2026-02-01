import React from "react";
import { Search } from "lucide-react";

export default function Searchbar({ searchQuery  , setSearchQuery}) {
  return (
    <div className="flex-1 max-w-2xl mx-4">
      <div className="relative">
        <Search size={20} className="absolute z-100 left-4 top-3" />

        <input
          type="text"
          placeholder="Search seeds, fertilizers, pesticides..."
          className="block w-full pl-11 pr-4 py-3 border-0 rounded-2xl
               text-stone-900 placeholder-stone-400 bg-white/95
               backdrop-blur-sm shadow-lg ring-1 ring-white/20
               focus:ring-2 focus:ring-amber-400 focus:bg-white
               transition-all duration-300"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
}
