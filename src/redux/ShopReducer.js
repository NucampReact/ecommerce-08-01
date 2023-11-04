import products from '../data/InventoryData';

const initialState = {
  inventoryList: products,
  resultsPerPage: products.length,
  cart: []
}

// Dispatcher sent the action object:
/*
  {
    type: 'ADD_TO_CART',
    addedItem: { title: 'Some item', ... }
  }
*/

function ShopReducer(state = initialState, action) {
  // Decide how to update the state of our application
  if (action.type === 'ADD_TO_CART') {
    // increment the cartCount by 1
    // state.cartCount + 1 -- NOT ALLOWED, STATE IS IMMUTABLE

    // const updatedState = { cartCount: state.cartCount + 1 };
    // return updatedState;

    return { ...state, cart: [ ...state.cart, action.addedItem] };
  } if (action.type === 'REMOVE_ITEM') {
    const updatedInventory = state.inventoryList.filter((item) => {
      return item.id !== action.removedItem.id; // all items that do not match deleted item
    });

    return { ...state, inventoryList: updatedInventory };
  } else if (action.type === 'UPDATE_RESULTS_PER_PAGE') {

    return { ...state, resultsPerPage: action.resultsPerPage };
  } else if (action.type === 'APPLY_FILTERS') {

    const filteredProducts = initialState.inventoryList.filter(product => {
      return (product.category === action.filters.category
        || product.title.includes(action.filters.title)
        || product.price <= action.filters.price
      );
    });

    return { ...state, inventoryList: filteredProducts }

  } else if (action.type === 'CLEAR_FILTERS') {
    return { ...state, inventoryList: initialState.inventoryList }
  } 
  else if (action.type === 'REMOVE_FROM_CART') {
    const updatedCart = state.cart.filter((item) => {
      return item.id !== action.removedItem.id; // all items that do not match deleted item
    });

    return { ...state, cart: updatedCart }
  }
  else {
    return initialState;
  }
};

/*
  ... = spread syntax
    Merge together objects or arrays
*/

export default ShopReducer;