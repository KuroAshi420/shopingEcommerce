export const addArticleToCard = payload => {
    return {
      type: "ADD_ARTICLE",
      payload
    };
  };
  export const incrementQuantity = payload => {
    return {
      type: "INCREMENT_QUANTITY",
      payload
    };
  };
  export const decrementQuantity = payload => {
    return {
      type: "DECREMENT_QUANTITY",
      payload
    };
  };
  export const deleteArticle = payload => {
    return {
      type: "DELETE_ARTICLE",
      payload
    };
  };
  export const deleteAll = payload => {
    return {
      type: "DELETE_ALL",
      payload
    };
  };
  export const search = payload => {
    return {
      type: "SEARCH_ARTICLE",
      payload
    };
  };