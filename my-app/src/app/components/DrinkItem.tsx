import { Drink } from '../../lib/data/drinks';

export const DrinkItem = ({ name, price, category }: Drink ) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "炭酸":
        return "bg-blue-100 text-blue-800";
      case "コーヒー":
        return "bg-amber-100 text-amber-800";  // コーヒーっぽい色
      case "お茶":
        return "bg-emerald-100 text-emerald-800";
      case "水":
        return "bg-sky-100 text-sky-800";
      case "エナジー":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow transition-shadow border">
      <div className="font-medium text-gray-900 truncate" title={name}>
        {name}
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className={`text-sm ${getCategoryColor(category)}`}>{category}</span>
        <span className="font-bold text-gray-800">¥{price.toLocaleString()}</span>
      </div>
    </div>
  );
};