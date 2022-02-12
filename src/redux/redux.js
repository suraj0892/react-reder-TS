const redux =  require('redux')
const createStore  = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

function buyCake () {
    return {
        type : BUY_CAKE,
        info :  'First Redux action'
    };
}
//implemetn reducer ls 

// (prevState, action) =>  new state

const initialState = {
    numOfCakes :  10
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_CAKE : return  {
            ...state, numOfCakes : state.numOfCakes - 1 
        }
        default : return state
    }
}

const store = createStore(reducer) 
console.log('initial state', store.getState())
const unsubcribe = store.subscribe(() => console.log('update state' , store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubcribe()


// to run the file  ->  navigate to the file dir and run ->  node filename.js