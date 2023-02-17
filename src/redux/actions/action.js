export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

// remove iteams
export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

// remove individual iteam

export const REMOVE = (iteam) => {
    return {
        type: "RMV_ONE",
        payload: iteam
    }
}

export const getProdoctdata = (data) => {
    return{
        type: "GET_PRODUCT",
        payload:data
    }
}


export const loadMore = () => {
    return{
        type: "Load_More",
    }
}

