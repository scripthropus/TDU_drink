import React from 'react';
import  Link from 'next/link';
import { FloorsNumber } from '@/lib/data/drinks';

export const Sidebar:React.FC = () => {
    const floors: FloorsNumber[] = ["1F","2F","3F","4F","5F","6F","7F","8F","9F","10F"];

    return(
    <div
    className="flex flex-col h-screen  "
    >
        {floors.map( floor => (
            <Link
            className="flex items-center justify-center flex-1 rounded-full font-bold p-4 bg-zinc-800 text-white "
            key={floor}
            href={`/?floor=${floor}`}
            >
                {floor}階
            </Link>
            ))}
    </div>
    )
}