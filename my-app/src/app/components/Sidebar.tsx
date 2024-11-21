import React from 'react';

export const Sidebar:React.FC = () => {
    const floors = [1,2,3,4,5,6,7,8,9,10];

    return(
    <div
    className="flex flex-col h-screen  "
    >
        {floors.map( floor => (
            <div
            className="flex items-center justify-center flex-1 rounded-full font-bold p-4 bg-zinc-800 text-white "
            key={floor}
            >
                {floor}階
            </div>
            ))}
    </div>
    )
}