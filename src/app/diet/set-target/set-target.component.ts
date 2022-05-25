import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/food.service';

@Component({
  selector: 'app-set-target',
  templateUrl: './set-target.component.html',
  styleUrls: ['./set-target.component.css']
})
export class SetTargetComponent implements OnInit {
  name !: string;
  
  constructor(private foodservice : FoodService) { }

  ngOnInit(): void {
  }

  setTarget(){
    this.foodservice.targetValue(parseFloat((<HTMLInputElement>document.getElementById("target")).value)); 
  }
}
