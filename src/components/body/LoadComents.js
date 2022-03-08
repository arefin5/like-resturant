import React from 'react'
import dateFormat from 'dateformat'
import Loading from './Loading'
let LoadComents= props =>{
    if(props.commentIsLoading){
       return <Loading />
    }else{
        return(
            props.comments.map( comment=>{
               return(
                   <div  key={comment.id}>
                    <h5>{comment.author}</h5>
                    <p>Rating:{comment.rating}</p>
                    <p>{comment.comment}</p>
                    <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                   </div>
               )
            })
        )
    }
// console.log(props);

}
export default LoadComents;