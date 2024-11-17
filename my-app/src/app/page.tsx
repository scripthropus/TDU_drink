import { Sidevar } from "./components/Sidevar";
export default function Home() {
  return (
    <div
    className="h-screen w-screen flex bg-slate-500"
    >
    <Sidevar/>
    <div className="font-bold text-3xl">
      TEST
    </div>
  </div>
  );
}
