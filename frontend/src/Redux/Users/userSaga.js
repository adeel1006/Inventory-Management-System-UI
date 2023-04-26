import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* userSignin(input) {
  const data = input.data;
  const res = yield axios.post("http://localhost:4000/user/login", {
      email: data.email,
      password: data.password,
    })
    window.localStorage.setItem("token", res.data.token);
    window.localStorage.setItem("user", res.data.user);
    yield put({type: 'S', data: res.data.token})
}

function* userSaga() {
  yield takeEvery("SI", userSignin);
}

export default userSaga;
