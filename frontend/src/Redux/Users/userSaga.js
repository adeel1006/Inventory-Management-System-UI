import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { GET_ADMINS, LOGIN, SHOW_ADMINS } from "../Constants/userConstants";

function* userSignin(input) {
  try {
    const data = input.data;
    const res = yield axios.post("http://localhost:4000/users/login", {
      email: data.email,
      password: data.password,
    });
    window.localStorage.setItem("token", res.data.token);
    window.localStorage.setItem("user", JSON.stringify(res.data.user));
    window.localStorage.setItem(
      "user-role",
      JSON.stringify(res.data.user.role.role)
    );
    window.localStorage.setItem(
      "user-org",
      JSON.stringify(res.data.user.organization)
    );
    yield put({ type: "S", data: res.data.token });
  } catch (error) {
    yield put({ type: "S", data: error });
  }
}

function* getAllAdmins(){
  const res = yield axios.get("http://localhost:4000/users/all");
  console.log("saga func called")
  console.log(res.data)
  yield put({ type: SHOW_ADMINS, data: res.data });
}






function* userSaga() {
  yield takeEvery(LOGIN, userSignin);
  yield takeEvery(GET_ADMINS, getAllAdmins);
}

export default userSaga;
