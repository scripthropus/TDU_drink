import { Drink } from '../../lib/data/drinks';
import { DrinkItem } from './DrinkItem';

type DrinkListProps = {
  drinks: Drink[];
}

export const DrinkList = ({ drinks }: DrinkListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-bold text-2xl">
      {drinks.map(drink => (
        <DrinkItem
          key={`${drink.name}_${drink.price}`}
          {...drink}
        />
      ))}
    </div>
  );
};