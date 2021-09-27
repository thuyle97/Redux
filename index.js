const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

//(prevState, action) => newState

const initialState = {
  numofCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // to copy the object before modify the property
        numofCakes: state.numofCakes - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer); // the store holding the app states

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();
