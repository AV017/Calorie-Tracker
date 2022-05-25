import { Injectable } from '@angular/core';
import { Subject, subscribeOn } from 'rxjs';
import { dailyFoodList } from './diet/dailyFoodList.model';
import { FoodList } from './home/foodlist.model';

@Injectable({
  providedIn: 'root'
})

export class FoodService {
  foodlistChanged = new Subject<FoodList[]>();
  remainingChanged = new Subject<number>();
  dailyfoodlistChanged = new Subject<dailyFoodList[]>();
  targetChanged = new Subject<number>();
  target !: number;
  remaining !: number ;

  foodlist: FoodList[] = [
    new FoodList('Chapathi' , 71 , 3 , 15 , 0.4 , 1),
    new FoodList('Egg with yolk' , 78 , 7 , 0.6 , 4.5 , 1),
    new FoodList('Sabji' , 150 , 2.9 , 13 , 0.2 , '100g'),
    new FoodList('Rice' , 130 , 2.7 , 28 , 0.3 , '100g'),
    new FoodList('Dal' , 111 , 7 , 17 , 2.1 , '100g/ half cup'),
    new FoodList('Oats' , 350 , 10 , 54 ,  6 , '100g'),
    new FoodList('Milk' , 122 , 8.1 , 12 ,  4.8 , '1 glass'),
    new FoodList('Honey' , 60 , 0.1 , 17 , 0 , '1 spoon'),
    new FoodList('Peanut Butter' , 90 , 3.5 , 3.9 , 8 , '1 spoon'),
    new FoodList('Banana' , 100 , 1.3 , 27 , 0.4 , 1),
    new FoodList('Egg without yolk' , 15 , 4 , 0.2 , 0.1 , 1),
    new FoodList('Almond' , 10 , 0.3 , 0.3 , 0.7 , 1),

  ];

  dailyFoodList : dailyFoodList[] = [];

  constructor() { }

  addFood(food : FoodList){
    this.foodlist.push(food);
    this.foodlistChanged.next(this.foodlist.slice());
  }

  deleteFood(){
    this.foodlist.pop();
    this.foodlistChanged.next(this.foodlist.slice());
  }
  
  editFood(food : FoodList){
    for(let item of this.foodlist){
      if(food.FoodName == item.FoodName){
        item = food;
      }
    }
  }

  addtoDailyList(food : FoodList){
    let singleItem = new dailyFoodList(food.FoodName , food.Calories , 1);
    for(let item of this.dailyFoodList){
      if(item.FoodName == food.FoodName){
        item.Count += 1;
        this.leftCalories(food.Calories);
        return;
      }
    }
    this.leftCalories(food.Calories);
    this.dailyFoodList.push(singleItem);
    this.dailyfoodlistChanged.next(this.dailyFoodList.slice());

   
  }

  leftCalories(cal : number){
    this.remainingChanged.next(this.remaining - cal);
    this.remaining = this.remaining - cal;
  }

  targetValue(tar : number){
    this.target = tar;
    this.targetChanged.next(this.target);
    this.remainingChanged.next(this.target);
    this.remaining = tar;
  }
}
