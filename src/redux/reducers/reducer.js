const INIT_STATE = {
    carts: [],
    product:[],
    loadMore: 0
};


export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        // case "ADD_CART":

        // const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

        // if(IteamIndex >= 0){
        //     state.carts[IteamIndex].qnty +=1
        //     return {
        //         ...state,
        //         carts:[...state.carts]
        //     }
        // }else{
        //     const temp = {...action.payload,qnty:1}
        //      return {
        //         ...state,
        //         carts: [...state.carts, temp]
        //     }
        // }

           

        // case "RMV_CART":
        //     const data = state.carts.filter((el)=>el.id !== action.payload); 
        //     // console.log(data);

        //     return {
        //         ...state,
        //         carts:data
        //     }

        // case "RMV_ONE":
        //     const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
   
        //     if(state.carts[IteamIndex_dec].qnty >= 1){
        //         const dltiteams = state.carts[IteamIndex_dec].qnty -= 1
        //         console.log([...state.carts,dltiteams]);

        //         return {
        //             ...state,
        //             carts:[...state.carts]
        //         }
        //     }else if(state.carts[IteamIndex_dec].qnty === 1 ){
        //         const data = state.carts.filter((el)=>el.id !== action.payload);

        //         return {
        //             ...state,
        //             carts:data
        //         }
        //     }
            case "GET_PRODUCT":
              return {
                ...state, product:action.payload
               }
            //    break;
             case "Load_More":
             return{
                    ...state,
                    loadMore: state.loadMore + 1
                  };
                  console.log("Number", state);
                //   break;
                // console.log(state.loadMore + 1,"count") 
        default:
            return state
    }
}