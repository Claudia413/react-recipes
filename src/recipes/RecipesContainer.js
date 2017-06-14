// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
import './RecipesContainer.css'
import RecipeEditor from './RecipeEditor'
import './RecipeEditor.css'

export class RecipesContainer extends PureComponent {
  renderRecipe(recipe, index) {
    return <RecipeItem key={index} { ...recipe }  />
  }
  renderNewRecipe() {
    return <RecipeEditor />
  }

  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="All Recipes" />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
          <RecipeEditor />
        </main>

      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes })

export default connect(mapStateToProps)(RecipesContainer)
