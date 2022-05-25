import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { dailyFoodList } from '../diet/dailyFoodList.model';
import { FoodDialogComponent } from '../food-dialog/food-dialog.component';
import { FoodService } from '../food.service';
import { FoodList } from '../home/foodlist.model';

@Component({
  selector: 'app-show-food-list',
  templateUrl: './show-food-list.component.html',
  styleUrls: ['./show-food-list.component.css']
})
export class ShowFoodListComponent implements OnInit {
  dataSource !: FoodList[];
  displayedColumns: string[] = ['FoodName', 'Calories', 'Protien', 'Carbohydrates', 'Fats', 'Quantity'];
  clickedRows = new Set<FoodList>(); 

  constructor(private foodservice : FoodService ,private dialog : MatDialog){

  }

  ngOnInit(): void {
    this.dataSource = this.foodservice.foodlist;
  }

  addFoodToList(food : FoodList){
    this.foodservice.addtoDailyList(food);
  }

}
