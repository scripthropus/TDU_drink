export type DrinkCategory = "炭酸" | "コーヒー" | "お茶" | "水" | "ジュース" | "エナジー";
export type FloorsNumber = "1F" | "2F" | "3F" | "4F" | "5F" | "6F" | "7F" | "8F" | "9F" | "10F";

export interface Drink {
    name: string;
    price: number;
    category: DrinkCategory;
}

export interface Floor {
    drinks: Drink[];
}


export interface DrinksData {
    floors: Record<FloorsNumber, Floor>;
    metadata?: {
        lastUpdated: string;
    };
}

const drinks: Drink[] = [
    {
        name: "Coca-cola",
        price: 110,
        category: "炭酸"
    },
    {
        name: "Dr Pepper",
        price: 110,
        category: "炭酸"
    },
    {
        name: "REAL GOLD",
        price: 110,
        category: "エナジー"
    },
    {
        name: "綾鷹",
        price: 130,
        category: "お茶",
    },
    {
        name: "やかんの麦茶 香ばしい",
        price: 110,
        category: "お茶",
    },
    {
        name: "いろはす",
        price: 100,
        category: "水",
    },
    {
        name: "れもんプラス いろはす",
        price: 130,
        category: "水",
    },
    {
        name: "紅茶花伝 グレープミックスティー",
        price: 120,
        category: "お茶",
    },
    {
        name: "綾鷹",
        price: 110,
        category: "お茶",
    },
    {
        name: "綾鷹 ほうじ茶",
        price: 110,
        category: "お茶",
    },
    {
        name: "紅茶花伝 ロイヤルミルクティー",
        price: 120,
        category: "お茶",
    },
    {
        name: "GEORGIA Coffee 香る微糖",
        price: 130,
        category: "コーヒー",
    },
    {
        name: "GEORGIA Coffee 香るブラック",
        price: 110,
        category: "コーヒー",
    },
    {
        name: "贅沢ミルクのカフェオレ",
        price: 130,
        category: "コーヒー",
    },
    {
        name: "GEORGIA Coffee EMERALD MOUNTAIN",
        price: 100,
        category: "コーヒー"
    },
    //2はないので3
    {
        name: "Coca-cola",
        price: 150,
        category: "炭酸"
    },
    {
        name: "Coca-cola",
        price: 120,
        category: "炭酸"
    },
    {
        name: "Coca-cola Zero",
        price: 120,
        category: "炭酸"
    },
    {
        name: "FANTA Grape",
        price: 120,
        category: "炭酸"
    },
    {
        name: "Dr Pepper",
        price: 120,
        category: "炭酸"
    },
    {
        name: "REAL GOLD",
        price: 110,
        category: "エナジー"
    },
    {
        name: "CHILL OUT",
        price: 140,
        category: "ジュース"
    },
    {
        name: "アロエ&白ぶどう",
        price: 120,
        category: "ジュース",
    },
    {
        name: "Qoo りんご",
        price: 110,
        category: "ジュース",
    },
    {
        name: "綾鷹",
        price: 140,
        category: "お茶",
    },
    {
        name: "綾鷹 濃い緑茶",
        price: 140,
        category: "お茶",
    },
    {
        name: "やかんの麦茶 香ばしい",
        price: 110,
        category: "お茶",
    },
    {
        name: "いろはす",
        price: 100,
        category: "水",
    },
    {
        name: "もも いろはす",
        price: 130,
        category: "水",
    },
    {
        name: "紅茶花伝 贅沢しぼりピーチティー",
        price: 140,
        category: "お茶",
    },
    {
        name: "からだ巡茶 アドバンス",
        price: 140,
        category: "お茶",
    },
    {
        name: "GEORGIA Coffee THE LATTE",
        price: 150,
        category: "コーヒー",
    },
    {
        name: "GEORGIA Coffee THE BLACK",
        price: 130,
        category: "コーヒー",
    },
    {
        name: "綾鷹",
        price: 110,
        category: "お茶",
    },
    {
        name: "紅茶花伝 ロイヤルミルクティー",
        price: 120,
        category: "お茶",
    },
    {
        name: "GEORGIA Coffee 香る微糖",
        price: 130,
        category: "コーヒー",
    },
    {
        name: "GEORGIA Coffee 香るブラック",
        price: 120,
        category: "コーヒー",
    },
    {
        name: "GEORGIA Coffee EMERALD MOUNTAIN",
        price: 100,
        category: "コーヒー"
    },
    {
        name: "GEORGIA Coffee GOLDEN DRIP 微糖",
        price: 100,
        category: "コーヒー"
    },
    {
        name: "GEORGIA Coffee 贅沢ミルクコーヒー",
        price: 100,
        category: "コーヒー"
    },
    ///////
    {
        name: "午後の紅茶 レモンティー",
        price: 110,
        category: "お茶",
    },
    {
        name: "純水 りんご",
        price: 110,
        category: "ジュース",
    },
    {
        name: "Tropicana マルチビタミン",
        price: 110,
        category: "ジュース",
    },
    {
        name: "梅よろし",
        price: 120,
        category: "ジュース",
    },
    {
        name: "KIRIN キリントマトジュース",
        price: 110,
        category: "ジュース",
    },
    {
        name: "午後の紅茶 CARAMEL THA LATTE",
        price: 110,
        category: "お茶",
    },
    {
        name: "ミルージュ ソーダ ヨーグルト風味",
        price: 110,
        category: "ジュース",
    },
    {
        name: "APPLE SPARKLING カロリミット",
        price: 110,
        category: "ジュース"
    },
    {
        name: "Mete ArginineV アルギニンV",
        price: 110,
        category: "ジュース",
    },
    {
        name: "おいしい免疫ケア ヨーグルトテイスト",
        price: 150,
        category: "ジュース",
    },
    {
        name: "Red Bull",
        price: 190,
        category: "エナジー",
    },
    {
        name: "生茶",
        price: 120,
        category: "お茶",
    },
    {
        name: "さわやか香ばし麦茶",
        price: 110,
        category: "お茶",
    },
    {
        name: "amino SUPLI+",
        price: 120,
        category: "ジュース",
    },
    {
        name: "iMUSE ヨーグルトテイスト プラズマ乳酸菌",
        price: 140,
        category: "ジュース",
    },
    {
        name: "FIRE ONEDAY Latte 微糖",
        price: 140,
        category: "コーヒー",
    },
    {
        name: "FIRE ONEDAY Black",
        price: 130,
        category: "コーヒー",
    },
    {
        name: "自然が磨いた天然水",
        price: 110,
        category: "水",
    },
    {
        name: "FIRE コクと香りの挽きたて微糖",
        price: 120,
        category: "コーヒー",

    },
    {
        name: "FIRE Black",
        price: 110,
        category: "コーヒー",
    },
    {
        name: "FIRE 満たされるブラジルBLEND 微糖",
        price: 110,
        category: "コーヒー",
    },
    {
        name: "FIRE Black 目覚めの深煎り",
        price: 120,
        category: "コーヒー",
    },
    {
        name: "FIRE 挽きたて微糖",
        price: 110,
        category: "コーヒー",
    },
    {
        name: "小さなごちそう コーンポタージュ",
        price: 110,
        category: "ジュース",
    },
    {
        name: "生茶 ほうじ煎茶",
        price: 110,
        category: "お茶",
    },
    {
        name: "午後の紅茶 ミルクティー",
        price: 110,
        category: "お茶",
    },
    {
        name: "ミルクとココア",
        price: 110,
        category: "ジュース",
    },
    {
        name: "午後の紅茶 レモンティー",
        price: 110,
        category: "お茶",
    },
    {
        name: "純水 りんご",
        price: 110,
        category: "ジュース",
    },
    {
        name: "Tropicana マルチビタミン",
        price: 110,
        category: "ジュース",
    },
    {
        name: "梅よろし",
        price: 120,
        category: "ジュース",
    },
    {
        name: "KIRIN キリントマトジュース",
        price: 110,
        category: "ジュース",
    },
    {
        name: "午後の紅茶 CARAMEL THA LATTE",
        price: 110,
        category: "お茶",
    },
    {
        name: "ミルージュ ソーダ ヨーグルト風味",
        price: 110,
        category: "ジュース",
    },
    {
        name: "APPLE SPARKLING カロリミット",
        price: 110,
        category: "ジュース"
    },
    {
        name: "Mete ArginineV アルギニンV",
        price: 110,
        category: "ジュース",
    },
    {
        name: "おいしい免疫ケア ヨーグルトテイスト",
        price: 150,
        category: "ジュース",
    },
    {
        name: "Red Bull",
        price: 190,
        category: "エナジー",
    },
    {
        name: "生茶",
        price: 120,
        category: "お茶",
    },
    {
        name: "さわやか香ばし麦茶",
        price: 110,
        category: "お茶",
    },
    {
        name: "amino SUPLI+",
        price: 120,
        category: "ジュース",
    },
    {
        name: "iMUSE ヨーグルトテイスト プラズマ乳酸菌",
        price: 140,
        category: "ジュース",
    },
    {
        name: "FIRE ONEDAY Latte 微糖",
        price: 140,
        category: "コーヒー",
    },
    {
        name: "FIRE ONEDAY Black",
        price: 130,
        category: "コーヒー",
    },
    {
        name: "自然が磨いた天然水",
        price: 110,
        category: "水",
    },
    {
        name: "FIRE コクと香りの挽きたて微糖",
        price: 120,
        category: "コーヒー",

    },
    {
        name: "FIRE Black",
        price: 110,
        category: "コーヒー",
    },
    {
        name: "FIRE 満たされるブラジルBLEND 微糖",
        price: 110,
        category: "コーヒー",
    },
    {
        name: "FIRE Black 目覚めの深煎り",
        price: 120,
        category: "コーヒー",
    },
    {
        name: "FIRE 挽きたて微糖",
        price: 110,
        category: "コーヒー",
    },
    {
        name: "小さなごちそう コーンポタージュ",
        price: 110,
        category: "ジュース",
    },
    {
        name: "生茶 ほうじ煎茶",
        price: 110,
        category: "お茶",
    },
    {
        name: "午後の紅茶 ミルクティー",
        price: 110,
        category: "お茶",
    },
    {
        name: "ミルクとココア",
        price: 110,
        category: "ジュース",
    },
    //4はないので5
// 55555
    {
        name: "れもんプラス いろはす",
        price: 130,
        category: "水",
    },
    {
        name: "紅茶花伝 グレープミックスティー",
        price: 120,
        category: "お茶",
    },
    {
        name: "アロエ&白ぶどう",
        price: 120,
        category: "ジュース",
    },
    {
        name: "Coca-cola",
        price: 110,
        category: "炭酸"
    },
    {
        name: "Sprite",
        price: 110,
        category: "炭酸",
    },
    {
        name: "Dr Pepper",
        price: 110,
        category: "炭酸"
    },
    {
        name: "REAL GOLD",
        price: 110,
        category: "エナジー"
    },
    {
        name: "やかんの麦茶 香ばしい",
        price: 110,
        category: "お茶",
    },
    {
        name: "綾鷹",
        price: 130,
        category: "お茶",
    },
    {
        name: "いろはす",
        price: 100,
        category: "水",
    },
    {
        name: "GEORGIA Coffee THE LATTE キャラメル",
        price: 130,
        category: "コーヒー",
    },
    {
        name: "綾鷹",
        price: 110,
        category: "お茶",
    },
    {
        name: "紅茶花伝 ロイヤルミルクティー",
        price: 120,
        category: "お茶",
    },
    {
        name: "GEORGIA Coffee 香るブラック",
        price: 110,
        category: "コーヒー",
    },
    {
        name: "GEORGIA Coffee EMERALD MOUNTAIN",
        price: 100,
        category: "コーヒー"
    },
    //66666
    ]




export const drinksData:DrinksData = {
    floors: {
        "1F": {
            drinks: [
            {
                name: "Coca-cola",
                price: 110,
                category: "炭酸"
            },
            {
                name: "Dr Pepper",
                price: 110,
                category: "炭酸"
            },
            {
                name: "REAL GOLD",
                price: 110,
                category: "エナジー"
            },
            {
                name: "綾鷹",
                price: 130,
                category: "お茶",
            },
            {
                name: "やかんの麦茶 香ばしい",
                price: 110,
                category: "お茶",
            },
            {
                name: "いろはす",
                price: 100,
                category: "水",
            },
            {
                name: "れもんプラス いろはす",
                price: 130,
                category: "水",
            },
            {
                name: "紅茶花伝 グレープミックスティー",
                price: 120,
                category: "お茶",
            },
            {
                name: "綾鷹",
                price: 110,
                category: "お茶",
            },
            {
                name: "綾鷹 ほうじ茶",
                price: 110,
                category: "お茶",
            },
            {
                name: "紅茶花伝 ロイヤルミルクティー",
                price: 120,
                category: "お茶",
            },
            {
                name: "GEORGIA Coffee 香る微糖",
                price: 130,
                category: "コーヒー",
            },
            {
                name: "GEORGIA Coffee 香るブラック",
                price: 110,
                category: "コーヒー",
            },
            {
                name: "贅沢ミルクのカフェオレ",
                price: 130,
                category: "コーヒー",
            },
            {
                name: "GEORGIA Coffee EMERALD MOUNTAIN",
                price: 100,
                category: "コーヒー"
            },

            ]
        },
        "2F": {//自販機がない
            drinks:[]
        },
        "3F":{
            drinks:[
            {
                name: "Coca-cola",
                price: 150,
                category: "炭酸"
            },
            {
                name: "Coca-cola",
                price: 120,
                category: "炭酸"
            },
            {
                name: "Coca-cola Zero",
                price: 120,
                category: "炭酸"
            },
            {
                name: "FANTA Grape",
                price: 120,
                category: "炭酸"
            },
            {
                name: "Dr Pepper",
                price: 120,
                category: "炭酸"
            },
            {
                name: "REAL GOLD",
                price: 110,
                category: "エナジー"
            },
            {
                name: "CHILL OUT",
                price: 140,
                category: "ジュース"
            },
            {
                name: "アロエ&白ぶどう",
                price: 120,
                category: "ジュース",
            },
            {
                name: "Qoo りんご",
                price: 110,
                category: "ジュース",
            },
            {
                name: "綾鷹",
                price: 140,
                category: "お茶",
            },
            {
                name: "綾鷹 濃い緑茶",
                price: 140,
                category: "お茶",
            },
            {
                name: "やかんの麦茶 香ばしい",
                price: 110,
                category: "お茶",
            },
            {
                name: "いろはす",
                price: 100,
                category: "水",
            },
            {
                name: "もも いろはす",
                price: 130,
                category: "水",
            },
            {
                name: "紅茶花伝 贅沢しぼりピーチティー",
                price: 140,
                category: "お茶",
            },
            {
                name: "からだ巡茶 アドバンス",
                price: 140,
                category: "お茶",
            },
            {
                name: "GEORGIA Coffee THE LATTE",
                price: 150,
                category: "コーヒー",
            },
            {
                name: "GEORGIA Coffee THE BLACK",
                price: 130,
                category: "コーヒー",
            },
            {
                name: "綾鷹",
                price: 110,
                category: "お茶",
            },
            {
                name: "紅茶花伝 ロイヤルミルクティー",
                price: 120,
                category: "お茶",
            },
            {
                name: "GEORGIA Coffee 香る微糖",
                price: 130,
                category: "コーヒー",
            },
            {
                name: "GEORGIA Coffee 香るブラック",
                price: 120,
                category: "コーヒー",
            },
            {
                name: "GEORGIA Coffee EMERALD MOUNTAIN",
                price: 100,
                category: "コーヒー"
            },
            {
                name: "GEORGIA Coffee GOLDEN DRIP 微糖",
                price: 100,
                category: "コーヒー"
            },
            {
                name: "GEORGIA Coffee 贅沢ミルクコーヒー",
                price: 100,
                category: "コーヒー"
            },
            ]
        },
        "4F": {//自販機がない
            drinks:[]
        },
        "5F": {
            "drinks": [
            {
                name: "れもんプラス いろはす",
                price: 130,
                category: "水",
            },
            {
                name: "紅茶花伝 グレープミックスティー",
                price: 120,
                category: "お茶",
            },
            {
                name: "アロエ&白ぶどう",
                price: 120,
                category: "ジュース",
            },
            {
                name: "Coca-cola",
                price: 110,
                category: "炭酸"
            },
            {
                name: "Sprite",
                price: 110,
                category: "炭酸",
            },
            {
                name: "Dr Pepper",
                price: 110,
                category: "炭酸"
            },
            {
                name: "REAL GOLD",
                price: 110,
                category: "エナジー"
            },
            {
                name: "やかんの麦茶 香ばしい",
                price: 110,
                category: "お茶",
            },
            {
                name: "綾鷹",
                price: 130,
                category: "お茶",
            },
            {
                name: "いろはす",
                price: 100,
                category: "水",
            },
            {
                name: "GEORGIA Coffee THE LATTE キャラメル",
                price: 130,
                category: "コーヒー",
            },
            {
                name: "綾鷹",
                price: 110,
                category: "お茶",
            },
            {
                name: "紅茶花伝 ロイヤルミルクティー",
                price: 120,
                category: "お茶",
            },
            {
                name: "GEORGIA Coffee 香るブラック",
                price: 110,
                category: "コーヒー",
            },
            {
                name: "GEORGIA Coffee EMERALD MOUNTAIN",
                price: 100,
                category: "コーヒー"
            },
            ]
        },
        "6F": {
            "drinks": [

            ]
        },
        "7F": {
            "drinks": [

            ]

        },
        "8F": {
            "drinks": [

            ]
        },
        "9F": {
            "drinks": [

            ]
        },
        "10F": {
            "drinks": [

            ]
        }
    },
    metadata: {
        lastUpdated: "2024/11/17"
    }

}