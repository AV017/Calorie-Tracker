export class FoodList {
    FoodName !: string;
    Calories !: number;
    Protein !: number;
    Carbohydrates !: number;
    Fats !: number;
    Quantity !: any;

    constructor(FoodName: string, Calories: number, Protien: number, Carbohydrates: number, Fats: number, Quantity: any) {
        this.FoodName = FoodName;
        this.Calories = Calories;
        this.Protein = Protien;
        this.Carbohydrates = Carbohydrates;
        this.Fats = Fats;
        this.Quantity = Quantity;
    }
//   this is trail
}
