import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditFoodComponent } from '../edit-food/edit-food.component';
import { FoodDialogComponent } from '../food-dialog/food-dialog.component';
import { FoodService } from '../food.service';
import { FoodList } from './foodlist.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataSource !: FoodList[];
  displayedColumns: string[] = ['FoodName', 'Calories', 'Protien', 'Carbohydrates', 'Fats', 'Quantity'];
  clickedRows = new Set<FoodList>();
  emptyList = false;

  
  constructor(private foodservice: FoodService, public dialog: MatDialog) {
    this.dataSource = this.foodservice.foodlist;
  }

  ngOnInit(): void {
    this.foodservice.foodlistChanged.subscribe(
      (food : FoodList[]) => {
        this.dataSource = food;
        if(this.dataSource.length == 0){
          this.emptyList = true;
        }
        else{
          this.emptyList = false;
        }
      }
    );
  }

  openAddFood() {
    this.dialog.open(FoodDialogComponent, {
      panelClass: ['w-1/2', 'w-full']
    });
  }

  openDeleteFood(){
    this.foodservice.deleteFood();
    
  }

  openEditFood(){
    this.dialog.open(EditFoodComponent , {
      panelClass: ['w-1/2', 'w-full']
    })
  }
}
