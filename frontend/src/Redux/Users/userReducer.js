const initialState = { token: localStorage.getItem("token") };


export const userHandler = (data = initialState, action) => {
  switch (action.type) {
    case "S":
      return { token: action.data };

    // case 'DESTROY_SESSION':
    //     localStorage.clear()
    //     return data = []

    default:
      return data;
  }
};
