import React from 'react';
import { Sidebar } from "./components/Sidebar";
//test
import { drinksData } from '@/lib/data/drinks';
import { DrinkItem } from './components/DrinkItem';

export default function Home() {
  return (
    <div
    className="h-screen w-screen flex bg-black"
    >
    <Sidebar/>
    <div className="font-bold text-2xl grid grid-cols-2 gap-2">
      TEST code
      {drinksData.floors["1F"].drinks.map(drink => (
        <DrinkItem
        key={`${drink.name}_${drink.price}`}
        {...drink}
        />
      ))}

    </div>
  </div>
  );
}
