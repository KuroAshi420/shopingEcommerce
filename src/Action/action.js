export const addArticleToCard = (payload) => {
    return {
        type : "ADD_ARTICLE",
        payload
    }
}

export const deleteArticle = (payload) => {
    return {
        type : "DELETE_ARTICLE",
        payload
    }
}



export const deleteAll = (payload) => {
    return {
        type : "DELETE_ALL",
        payload
    }
}

export const search = (payload) => {
    return {
        type : "SEARCH_ARTICLE",
        payload
    }
}


