import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'
import LoadComents from './LoadComents.js'
import CommentForm from './CommentForm.js'
import { baseUrl } from '../../redux/baseUrl.js'
const Dishdetail = props => {
    return (<div>
        <Card >
            <CardImg top src={baseUrl+props.dish.image} alt={props.dish.name} />
            <CardBody style={{ textAlign: "left" }}>
                <CardTitle>name :{props.dish.name}</CardTitle>
                <CardText>category :{props.dish.category} </CardText>
                <CardText>label :{props.dish.label}  </CardText>
                <CardText> price :{props.dish.price} /-</CardText>
                <CardText> description :{props.dish.description}
                </CardText>
                <hr />
                <LoadComents comments={props.comments}   commentIsLoading={props.commentIsLoading} />
                <hr />
                 <CommentForm dishId={props.dish.id}
                     addComment={props.addComment}
                 />
            </CardBody>
        </Card>
    </div>)
}
export default Dishdetail;