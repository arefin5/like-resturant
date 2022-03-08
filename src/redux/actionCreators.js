// import DISHES from "../data/dishes";
import axios from 'axios'
import {baseUrl} from './baseUrl'
import * as actionTypes from './actionTypes'
// export const addComment = (dishId, author, rating, comment) =>({
//     type: actionTypes.ADD_COMENT,
//     payload: {
//         dishId: dishId,
//         author: author,
//         rating: rating,
//         comment: comment
//     }
// })
//
export const addComment = (dishId, author, rating, comment) =>dispatch=>{
    const newComment = {
        dishId:dishId,
        author:author,
        rating:rating,
        comment:comment
    }
    newComment.date=new Date().toISOString() ;
    axios.post(baseUrl + 'comments',newComment)
    .then(res=>res.data)
    .then(comment=>dispatch(commentConcat(comment)))
    
}
export const commentConcat=(comment)=>({
    type: actionTypes.ADD_COMENT ,
    payload:comment
})

export const loadComment=comments=>({
    type:actionTypes.LOAD_COMMENT ,
    payload:comments

})
   
 
export const commentLoading=()=>({
    type:actionTypes.COMMENTS_LOADING
})
//
export const fetchComments=()=>dispatch=>{
    dispatch(commentLoading())
    axios.get(baseUrl + 'comments')
    .then(res=>res.data)
    .then(comments=>dispatch(loadComment(comments)))
}
//
export const loadDishes=dishes=>({
type:actionTypes.LOAD_DISHES,
payload:dishes
})

export const dishLoading=()=>({
    type:actionTypes.DISHES_LOADING ,
})



export const fetchDish=() =>dispatch=>{
    dispatch(dishLoading())  
    axios.get(baseUrl+"dishes")
    .then(res=>res.data)
    .then(dishes=>dispatch(loadDishes(dishes)))
    // .catch(err=>)
   
}
