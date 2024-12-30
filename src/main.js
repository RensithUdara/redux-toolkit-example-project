import { addFruit, buyFruit } from "./redux/features/fruitSection/fruitSlice";
import store from "./redux/store";

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(buyFruit(2));
store.dispatch(addFruit());

unsubscribe();