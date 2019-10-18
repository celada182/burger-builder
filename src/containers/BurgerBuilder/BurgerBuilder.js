import React, {Component} from 'react';
import Aux from "../../hoc/ReactAux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  // constructor(props){
  //     super(props);
  //     this.state = {...}
  // }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };

  render() {
    const disableInfo = {...this.state.ingredients};
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
        <Aux>
          <Modal show={this.state.purchasing}
                 modalClosed={this.purchaseCancel}>
            <OrderSummary
                ingredients={this.state.ingredients}
                onCancel={this.purchaseCancel}
                onConfirm={this.purchaseContinue}
                price= {this.state.totalPrice}>
            </OrderSummary>
          </Modal>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls ingredientAdded={this.addIngredient}
                         ingredientRemoved={this.removeIngredient}
                         disabled={disableInfo}
                         purchasable={this.state.purchasable}
                         price={this.state.totalPrice}
                         purchase={this.purchase}/>
        </Aux>
    );
  }

  addIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const updatedPrice = this.state.totalPrice + priceAddition;
    this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});
    this.updatePurchase(updatedIngredients);
  };

  removeIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    let priceDeduction = INGREDIENTS_PRICES[type];
    let updatedCount = oldCount - 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const updatedPrice = this.state.totalPrice - priceDeduction;
    this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients})
    this.updatePurchase(updatedIngredients);
  };

  updatePurchase(ingredients) {
    const sum = Object.keys(ingredients)
        .map(igKey => {
          return ingredients[igKey]
        })
        .reduce((sum, el) => {
          return sum + el
        }, 0);
    this.setState({purchasable: sum > 0})
  }

  purchase = () => {
    this.setState({purchasing: true});
  };

  purchaseCancel = () => {
    this.setState({purchasing: false});
  };

  purchaseContinue = () => {
    alert('You continue');
  };
}

export default BurgerBuilder;