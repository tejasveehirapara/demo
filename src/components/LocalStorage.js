// export const getCurrentUser = () => {
//     let user = null;
//     try {
//       user =
//         localStorage.getItem("current_data") != null
//           ? JSON.parse(localStorage.getItem("current_data"))
//           : null;
//     } catch (error) {
//       console.log(">>>>:  getCurrentUser -> error", error);
//       user = null;
//     }
//     return user;
//   };
//   export const setCurrentUser = (user) => {
//     console.log(user,"local")
//     try {
//       if (user) {
//         localStorage.setItem("current_data", JSON.stringify(user));
//       } else {
//         localStorage.removeItem("current_data");
//       }
//     } catch (error) {
//       console.log(">>>>:   setCurrentUser -> error", error);
//     }
//   };
  

export const getLocalstoreItem = (key) => {
localStorage.getItem(key)
}


 export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, value)
}