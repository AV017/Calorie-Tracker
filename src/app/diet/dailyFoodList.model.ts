export class dailyFoodList {
    FoodName !: string;
    Calories !: number;
    Count !: number;

    constructor(FoodName: string, Calories: number, Count : number) {
        this.FoodName = FoodName;
        this.Calories = Calories;
        this.Count = Count;
    }

}