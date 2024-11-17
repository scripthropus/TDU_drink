type DrinkCategory = "炭酸" | "コーヒー" | "お茶" | "水" | "ジュース" | "エナジー";

interface Drink {
    id: string;
    name: string;
    price: number;
    calories: number;
    isHot: boolean;
    category: DrinkCategory;
}

interface Floor {
    drinks: Drink[];
}

interface Floors {
    [fllor: `${number}F`]: Floor;
}

interface DrinksData {
    floors: Floors;
    metadata?: {
        lastUpdated: string;
    };
}
    

export const drinksData:DrinksData = {
    floors: {
        "1F": {
            drinks: [
                {
                    id: "1F_1",
                    name: "コーラ",
                    price: 160,
                    calories: 340,
                    isHot: false,
                    category: "炭酸"
                },
                {
                    id: "1F_2",
                    name: "お茶",
                    price: 160,
                    calories: 40,
                    isHot: false,
                    category: "お茶"
                }
            ]
        }
    },
    metadata: {
        lastUpdated: "2024/11/17"
    }

}