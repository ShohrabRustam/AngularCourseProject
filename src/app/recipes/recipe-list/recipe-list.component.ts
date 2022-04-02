import { Component, OnInit } from '@angular/core';

// import Recipe Models
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[
    new Recipe('A test Recipe ', 'This is simple a test ', 'https://miro.medium.com/max/1360/0*DaqUDBK-6UrgG5fa.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
