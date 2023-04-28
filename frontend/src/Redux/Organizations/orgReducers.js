import { SHOW_ALL_ORGANIZATIONS } from "../Constants/orgConstats";


export const organizationHandler = (data = [], action) => {
  switch (action.type) {
    case SHOW_ALL_ORGANIZATIONS:
      return { organizationData: action.data };

    default:
      return data;
  }
};
