import React, { Component } from "react";
import { Form, Button, Input } from 'reactstrap'
// import {connect} from 'react-redux'
//
/** eta menu.js theke call hobe fole ekhan theke call korte hobe na:::: */
// const mapDispatchToProps =dispatch=>{
//     return{
//         // ekhane zei obj ta return hobe seta function hobe 
//         addComment:(dishId,author,rating,comment)=>dispatch({
//             type:'ADD_COMENT',
//             payload:{
//                 dishId:dishId,
//                 author: author,
//                 rating:rating,
//                 comment:comment 
//             }
//         })
//     }
// }
// //
class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: '',
            rating: '',
            comment: ''
        }
        // 
        this.HendleEvenchenge = this.HendleEvenchenge.bind(this)
        this.HandleSubmit = this.HandleSubmit.bind(this)
    }
    HendleEvenchenge = event => {
        this.setState({
            [event.target.name]: event.target.value,

        })
    }
    HandleSubmit = event => {
        // // console.log(this.state);
        // this.props.dispatch({
        // })
        this.props.addComment(this.props.dishId, this.state.author, this.state.rating, this.state.comment);
    this.setState({
        author:'',
        rating:'',
        comment:''
    })
        event.preventDefault()
    }
    render() {
        // console.log(this.props);
        return (<div>
            <Form onSubmit={this.HandleSubmit}>
                <Input
                    type="text"
                    name="author"
                    value={this.state.author}
                    placeholder="your name"
                    onChange={this.HendleEvenchenge}
                />
                <br />
                {/* start rating */}
                <Input type="select"
                    name="rating"
                    value={this.state.rating}
                    onChange={this.HendleEvenchenge}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
                <br />
                {/*  */}
                <Input type="textarea"
                    name="comment"
                    value={this.state.comment}
                    placeholder="write your comments"
                    required
                    onChange={this.HendleEvenchenge}
                ></Input>
                <br />
                <Button type="submit" onClick={this.HandleSubmit}> submit comment</Button>
            </Form>
        </div>)
    }
}
// export default connect(null,mapDispatchToProps) (CommentForm) ;
export default CommentForm
// connect er first paramitar : stateToProps,
// state na thakle mapDispacthToProps 
//