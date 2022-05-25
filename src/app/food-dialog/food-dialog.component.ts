import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FoodService } from '../food.service';
import { FoodList } from '../home/foodlist.model';

@Component({
  selector: 'app-food-dialog',
  templateUrl: './food-dialog.component.html',
  styleUrls: ['./food-dialog.component.css']
})

export class FoodDialogComponent implements OnInit {
  
  food : FoodList = {
    FoodName : 'apple' , Calories : 0 , Protein : 0 , Carbohydrates : 0 , Fats : 0 , Quantity : 0
  };
  constructor(private foodservice : FoodService) {}

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    this.food.FoodName = form.value.foodName;
    this.food.Calories = form.value.calories;
    this.food.Protein = form.value.protein;
    this.food.Carbohydrates = form.value.carbohydrates;
    this.food.Fats = form.value.fats;
    this.food.Quantity = form.value.quantity;

    this.foodservice.addFood(this.food);
  }
}
