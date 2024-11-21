import React from 'react';
import { Sidebar } from "./components/Sidebar";
import { drinksData } from '@/lib/data/drinks';
import { DrinkList } from './components/DrinkList';

export default function Home() {
  return (
    <div
    className="h-screen w-screen flex"
    >
    <Sidebar/>
    <div className="flex flex-1 justify-center">
    <DrinkList
      drinks={drinksData.floors["1F"].drinks}
    />
    </div>

  </div>
  );
}
