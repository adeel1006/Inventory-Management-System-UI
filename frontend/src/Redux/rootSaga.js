import { fork } from "redux-saga/effects";
import OrganizationSaga from "./Organizations/orgSaga";

export default function* rootSaga(){
    yield fork(OrganizationSaga)
}