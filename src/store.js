import {createStore,combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import {IndiaDataReducer,WorldDataReducer,SocketReducer} from '../src/components/reducer/data'
import {FormSubmitReducer} from '../src/components/reducer/form'
const initialState={
    dataIndia:SocketReducer
}
const reducer=combineReducers({
    dataIndia:IndiaDataReducer,
    dataWorld:WorldDataReducer,
    submitForm:FormSubmitReducer

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))

);
export default store;