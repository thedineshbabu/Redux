import store from './store';
import { bugAdded, bugResolved } from './actions'


const unsubscribe = store.subscribe(() => {
    console.log("Store Changed!", store.getState());
})

store.dispatch(bugAdded("Bug 1"));

store.dispatch(bugResolved(1));

// unsubscribe();

// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// });
console.log(store.getState());