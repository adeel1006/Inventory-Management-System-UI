import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* getAll() {
  const res = yield axios.get("http://localhost:4000/organization/all");
  yield put({ type: "ShowAllOrganizations", data: res.data });
}

function* addNew(payload) {
  const data = payload.data;

  const res = yield axios.post("http://localhost:4000/organization/all", {
    name: data.name,
    email: data.email,
    representative: data.representative,
    contact: data.contact,
    address: data.address,
    bio: data.bio,
    zip: data.zip,
    city: data.city,
    country: data.country,
  });
  yield put({ type: "S", data: res.data.token });
}

function* OrganizationSaga() {
  yield takeEvery("GET_ALL_ORGANIZATIONS", getAll);
  yield takeEvery("ADD_NEW_ORGANIZATION", addNew);
}

export default OrganizationSaga;
