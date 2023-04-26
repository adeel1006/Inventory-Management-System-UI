export const organizationHandler = (data = [], action) => {
  switch (action.type) {
    case "ShowAllOrganizations":
      return { organizationData: action.data };

    default:
      return data;
  }
};
