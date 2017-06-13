// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
import './RecipesContainer.css'

class RecipesContainer extends PureComponent {
  renderRecipe(recipe, index) {
    return <RecipeItem key={index} { ...recipe } />
  }

  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="All Recipes" />
        </header>

        <main>
          <div className="row">
            { this.props.recipes.map(this.renderRecipe) }
          </div>
        </main>
      </div>
    )
  }
}

export default RecipesContainer
