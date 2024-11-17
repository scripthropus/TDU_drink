export const Sidevar = () => {
    const floors = [1,2,3,4,5,6,7,8,9,10];

    return(
    <div
    className="flex flex-col h-screen  bg-white"
    >
        {floors.map( floor => (
            <div 
            className="flex items-center justify-center flex-1 rounded-full font-bold p-2 bg-zinc-300"
            key={floor}>
                {floor}階
            </div>
            ))}
    </div>
    )
}