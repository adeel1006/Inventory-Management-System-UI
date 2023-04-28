import { GET_ALL_ORGANIZATIONS, ADD_NEW_ORGANIZATION } from "../Constants/orgConstats";



export const getAllOrganizations = () => {
  return {
    type: GET_ALL_ORGANIZATIONS,
    
  };
};

export const addNewOrg = (data) => {
  return {
    type: ADD_NEW_ORGANIZATION,
    data,
  };
};


export const search = (data) => {
  return {
    type: "SEARCH_ORGANIZATIONS",
    data,
  };
};
