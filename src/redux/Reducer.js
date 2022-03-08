// import DISHES from "../data/dishes";
// import COMMENTS from "../data/comments";
import { combineReducers } from "redux";
import {initialContactForm} from './forms'
import { createForms } from "react-redux-form";
import * as actionTypes from './actionTypes'

const dishReducer = (dishState ={isLoading:false ,dishes:[]}, action) => {
    switch (action.type) {
        case actionTypes.DISHES_LOADING :
            return{
                ...dishState ,
                isLoading:true  ,
                dishes :[]
            }
        case actionTypes.LOAD_DISHES :
            return{
                ...dishState ,
                isLoading :false ,
                dishes:action.payload
            }    
        default: return dishState;
    }
}
const commentReducer = (commentState = {isLoading:true, comments:[]}, action) => {
    // add to swicth condition:
    switch (action.type) {
        case actionTypes.LOAD_COMMENT :
            return{
                ...commentState ,
                isLoading:false ,
                comments:action.payload
            };
            case actionTypes.COMMENTS_LOADING :
                
                return{
                    ...commentState ,
                    isLoading:true ,
                    comments:[]
                };
        case actionTypes.ADD_COMENT :
            let comment = action.payload ;
            return{
                ...commentState ,
                comments:commentState.comments.concat(comment)
            }
            default: return commentState;
    }

}
// const commentReducer = (commentState = COMMENTS, action) => {
//     // add to swicth condition:
//     switch (action.type) {
//         case actionTypes.ADD_COMENT:
//             let comment = action.payload;
//             comment.id = commentState.length;
//             comment.date = new Date().toString()
//             return commentState.concat(comment);
//         default: return commentState;
//     }

// }
export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    ...createForms({
        feedback:initialContactForm
    })
})

