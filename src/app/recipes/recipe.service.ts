import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.mode';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is a simply test', 
            'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'A Test Recipe 1', 
            'This is a simply test', 
            'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Salad', 20)
            ]),
        new Recipe(
            'A Test Recipe 2', 
            'This is a simply test', 
            'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png',
            [
                new Ingredient('Potatoes', 1),
                new Ingredient('Bananas', 20),
                new Ingredient('Bread', 3)
            ])
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number){
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}