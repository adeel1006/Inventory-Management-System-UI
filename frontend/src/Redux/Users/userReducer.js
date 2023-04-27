const initialState = { token: localStorage.getItem("token"), role: JSON.parse(localStorage.getItem("user-role")) };


export const userHandler = (data = initialState, action) => {
  switch (action.type) {
    case "S":
      console.log(action.data)
      return { token: action.data.token, user: action.data.user};

    // case 'DESTROY_SESSION':
    //     localStorage.clear()
    //     return data = []

    default:
      return data;
  }
};
