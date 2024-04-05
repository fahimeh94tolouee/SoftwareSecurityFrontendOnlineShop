import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware();
const initStore = (initialState, options) => {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);
    return store
};

export default initStore