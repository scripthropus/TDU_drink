import React from 'react';
import { Sidebar } from "./components/Sidebar";
import { drinksData, FloorsNumber } from '@/lib/data/drinks';
import { DrinkList } from './components/DrinkList';

export default async function Home({
  searchParams
}: {
  searchParams: { floor?: FloorsNumber}
}) {
  const selectedFloor = searchParams.floor || "1F";
  return (
    <div
    className="h-screen w-screen flex"
    >
    <Sidebar/>
    <div className="flex flex-1 justify-center">
    <DrinkList
      drinks={drinksData.floors[selectedFloor].drinks}
    />
    </div>

  </div>
  );
}
