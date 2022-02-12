const redux =  require('redux')
const reduxLogger = require('redux-logger')

const createStore  = redux.createStore
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE = 'BUY_ICE'
function buyCake () {
    return {
        type : BUY_CAKE,
        info :  'First Redux action'
    };
}
function buyIce () {
    return {
        type : BUY_ICE,
        info :  'First Redux action'
    };
}
//implemetn reducer ls 

// (prevState, action) =>  new state

const initialCake = {
    numOfCakes :  10
}

const initialIce = {
    numOfIce :  20
}

const cakeReducer = (state = initialCake , action) => {
    switch(action.type){
        case BUY_CAKE : return  {
            ...state, numOfCakes : state.numOfCakes - 1 
        }
        default : return state
    }
}

const iceReducer = (state = initialIce , action) => {
    switch(action.type){
        case BUY_ICE : return  {
            ...state, numOfIce : state.numOfIce - 1 
        }
        default : return state
    }
}

const rootReducer = redux.combineReducers({
    cake : cakeReducer, 
    ice : iceReducer
})

const store = createStore(rootReducer, applyMiddleware(logger)) 
const unsubcribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIce())
store.dispatch(buyIce())

unsubcribe()


// to run the file  ->  navigate to the file dir and run ->  node filename.js