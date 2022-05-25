import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FoodService } from '../food.service';
import { ShowFoodListComponent } from '../show-food-list/show-food-list.component';
import { dailyFoodList } from './dailyFoodList.model';
import { SetTargetComponent } from './set-target/set-target.component';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {
  today: number = Date.now()
  displayedColumns: string[] = ['FoodName', 'Calories', 'Count'];
  dataSource !: any;
  target !: number;
  Remaining : number = 0;
  emptyList = true;

  constructor(public dialog: MatDialog , private foodservice : FoodService) {
    this.dataSource = this.foodservice.dailyFoodList;
  }

  ngOnInit(): void {
    this.foodservice.dailyfoodlistChanged.subscribe(
      (food : dailyFoodList[]) => {
        this.dataSource = food;
        if(this.dataSource.length != 0){
          this.emptyList = false;
        }
      }
    );

    this.foodservice.targetChanged.subscribe(
      (tar : number) => {
        this.target = tar;
      }
    )

    
  }

  showFoodList(){
    this.dialog.open(ShowFoodListComponent, {
      panelClass: ['w-full']
    });
    this.changeRemaining();
  }

  setTarget(){
    this.dialog.open(SetTargetComponent);
    this.target = this.foodservice.target
    this.changeRemaining();
  }

  changeRemaining(){
    this.foodservice.remainingChanged.subscribe(
      (rem : number) => {
        this.Remaining = rem;
      }
    )
  }
  
}
