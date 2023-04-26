export const getAllOrganizations = () => {
  return {
    type: "GET_ALL_ORGANIZATIONS",
    
  };
};

export const addNew = (data) => {
  return {
    type: "ADD_NEW_ORGANIZATION",
    data,
  };
};


export const search = (data) => {
  return {
    type: "SEARCH_ORGANIZATIONS",
    data,
  };
};
