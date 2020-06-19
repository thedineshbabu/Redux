import store from './store';
import { bugAdded } from './actions'


const unsubscribe = store.subscribe(() => {
    console.log("Store Changed!", store.getState());
})

store.dispatch(bugAdded());

unsubscribe();

store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
        id: 1
    }
});
console.log(store.getState());