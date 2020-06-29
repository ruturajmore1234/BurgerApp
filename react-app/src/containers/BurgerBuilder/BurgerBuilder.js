import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 50,
  bacon: 80,
  cheese: 40,
  meat: 100
};

class BurgerBuilder extends Component{

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 80
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
  }

  removeIngredientHandler = (type) => {
    if(this.state.ingredients[type] > 0){
      const oldCount = this.state.ingredients[type];
      const newCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = newCount;
      const priceSubstraction = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceSubstraction;
      this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    }
  }

  render(){
    return(
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded = {this.addIngredientHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;