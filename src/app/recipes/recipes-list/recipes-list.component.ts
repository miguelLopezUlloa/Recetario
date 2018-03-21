import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected= new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a simple a Test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another Test Recipe','This is a simple a Test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    console.log("Detecting event" + recipe.name);
    this.recipeWasSelected.emit(recipe);
  }

}
