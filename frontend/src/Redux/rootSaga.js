import { fork } from "redux-saga/effects";
import OrganizationSaga from "./Organizations/orgSaga";
import userSaga from "./Users/userSaga";



export default function* rootSaga(){
    yield fork(OrganizationSaga)
    yield fork(userSaga)
}