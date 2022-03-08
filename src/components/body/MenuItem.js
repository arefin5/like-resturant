import React from 'react'
import { baseUrl } from '../../redux/baseUrl'
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap'
const MenuItem = (props) => {
    // console.log(props)
    return (
        <div>
            <Card>
                <CardBody style={{ margin: "10px" }} >
                    <CardImg 
                    width="100%"
                     alt={props.dish.name}
                      src={baseUrl +props.dish.image}
                       style={{ opacity: ".5" }}>

                       </CardImg>
                    <CardImgOverlay >
                        <CardTitle style={{ cursor: "pointer",margin: "10px" }} onClick={()=> props.DishSelect(props.dish)} >{props.dish.name} </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>)
}
export default MenuItem;
