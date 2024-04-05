import { all } from "redux-saga/effects";
import { watcherAuth } from "./auth";
import { watcherUser } from "./user";
import {watcherProduct} from "./product";
import {watcherQuestion} from "./question";
import {watcherOrder} from "./order";

export default function* rootSaga() {
  yield all([
    watcherAuth(),
    watcherUser(),
    watcherProduct(),
    watcherQuestion(),
    watcherOrder()
  ])
}
