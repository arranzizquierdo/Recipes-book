import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.mode';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

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

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.recipes.slice());
      }
}