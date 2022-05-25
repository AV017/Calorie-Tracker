import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { FoodService } from '../food.service';
import { FoodList } from '../home/foodlist.model';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {
  @ViewChild('f') form !: NgForm;
  foods !: FoodList[];
  selected !: FoodList;
  food : FoodList = {
    FoodName : '' , Calories : NaN , Protein : NaN , Carbohydrates : NaN , Fats : NaN , Quantity : NaN
  };
  
  constructor(private foodservice : FoodService) { }

  ngOnInit(): void {
    this.foods = this.foodservice.foodlist;
  }

  onSubmit(form : NgForm){
    this.food.FoodName = form.value.foodName;
    this.food.Calories = form.value.calories;
    this.food.Protein = form.value.protein;
    this.food.Carbohydrates = form.value.carbohydrates;
    this.food.Fats = form.value.fats;
    this.food.Quantity = form.value.quantity;

    this.foodservice.editFood(this.food);
  }
  
  loadFood(choice : string){
    // this.selected = choice
    for(let item of this.foods){
      if(item.FoodName == choice){
        this.food = item;
      }
    }
  }

  onSelectChange(choice : MatSelectChange){
    this.loadFood(choice.value)
  }

}
