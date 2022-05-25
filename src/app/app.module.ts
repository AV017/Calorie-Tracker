import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DietComponent } from './diet/diet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FoodDialogComponent } from './food-dialog/food-dialog.component';
import { ShowFoodListComponent } from './show-food-list/show-food-list.component';
import { SetTargetComponent } from './diet/set-target/set-target.component';
import { EditFoodComponent } from './edit-food/edit-food.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DietComponent,
    FoodDialogComponent,
    ShowFoodListComponent,
    SetTargetComponent,
    EditFoodComponent
  ],
  entryComponents: [
    FoodDialogComponent,
    FoodDialogComponent,
    SetTargetComponent,
    EditFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
