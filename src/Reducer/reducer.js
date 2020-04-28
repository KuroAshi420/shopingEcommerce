const initialState = { item : [
    { id : 1 , link : "https://images-na.ssl-images-amazon.com/images/I/61nlT53kRKL._AC_SY445_.jpg" , name : "phone" , catégorie : "x", price:300},
    { id : 2 , link : "https://images-na.ssl-images-amazon.com/images/I/61nlT53kRKL._AC_SY445_.jpg" , name : "phone" , catégorie : "x", price:300},
    { id : 3 , link : "https://images-na.ssl-images-amazon.com/images/I/61nlT53kRKL._AC_SY445_.jpg" , name : "phone" , catégorie : "x", price:300},
    { id : 4 , link : "https://images-na.ssl-images-amazon.com/images/I/61nlT53kRKL._AC_SY445_.jpg" , name : "phone" , catégorie : "x", price:300},
    { id : 5 , link : "https://images-na.ssl-images-amazon.com/images/I/61nlT53kRKL._AC_SY445_.jpg" , name : "phone" , catégorie : "x", price:300},

],
panier:[]}

export default function reducer (state=initialState, action){
    switch (action.type){
        case "ADD_ARTICLE" :
            return {...state,panier:[...state.panier,action.payload]}
        case "DELETE_ARTICLE" :
            return {item : state.item.filter((el,index)=> (el.id!==action.payload))}
        case "SEARCH_MOVIE" :
            return {item : state.item.filter((el, index) => (el.name === action.payload||el.date === action.payload ) && el)}
        case "DELETE_ALL" :
            return {item : state.item.filter((el, index) => (action.payload <=el.rating) && el)}
        default :
        return state     
    }
}