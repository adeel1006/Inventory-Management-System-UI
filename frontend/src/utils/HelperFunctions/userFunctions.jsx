// Add user's data to local
export const inLocal = (props) => {
    window.localStorage.setItem("user", JSON.stringify(props));
  };
  
  // Get data from local
  export const outLocal = (key) => {
    const data = window.localStorage.getItem(key);
    return data 
  };