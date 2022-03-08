import  { Component } from 'react'
import { Button, FormGroup, Label, Col ,Alert} from 'reactstrap'
import { Form, Control, Errors, actions } from 'react-redux-form'
import { connect } from 'react-redux'
import axios from 'axios'
import {baseUrl} from '../../redux/baseUrl' 
// import { thisExpression } from '@babel/types'

// mapdispatchToprops:
const mapDispatchToProps = dispatch => {
    return {
        reseteedbackform: () => {
            dispatch(actions.reset('feedback'))
        }
    }
}
// from validation:
const required = val => val && val.length;
//number validation:
const isNumber = val => !isNaN(Number(val));
// email validation:
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class Contact extends Component {
    state={
        alertShow:false ,
        alertText:null ,
        alertType:null ,
    }
    // handle submit:
    handeSubmit = values => {
        // console.log(values);
      
        axios.post(baseUrl+'feedback',values)
        .then(res=>res.status)
        .then(status=> {
            if (status === 201) 
                this.setState=({
                    alertShow:true ,
                    alertText: "submited successfully",
                    alertType:"success " ,
                });
                
            setTimeout(() => {
                this.setState={
                    alertShow:false
                }
            }, 3000);
        })
        .catch(err=>{
            this.setState=({
                alertShow:true ,
                alertText: "Form Submitted Fail",
                alertType:"danger " , 
            })
            setTimeout(() => {
                this.setState=({
                    alertShow:false , 
                })
            }, 4000);
        })
        this.props.reseteedbackform()
    }
    render() {
        document.title = "Contact"
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="col-12">
                        <h3>Send your feedback</h3>
                        <Alert  isOpen={this.state.alertShow} color={this.state.alertType} >
                {this.state.alertText}
            </Alert>
                    </div>
                    <div className="col-12 col-md-7">
                        <Form model="feedback" onSubmit={values => this.handeSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2} >First Name:</Label>
                                <Col md={10}>
                                    <Control.text
                                            model=".firstname"
                                            name="firstname"
                                            placeholder="First Name"
                                            className="form-control"
                                            validators={{
                                                required
                                            }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: "Required"
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            {/* start last name */}
                            <FormGroup row><Label htmlFor="lastName" md={2}>LastName:</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".lname"
                                        name="lname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lname"
                                        show="touched"
                                        messages={{
                                            required: "Required"
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            {/* start tel no */}
                            <FormGroup row><Label htmlFor="telNumber" md={2}>Contact Tel:</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".telNumber"
                                        name="telNumber"
                                        placeholder="Tete phone number"
                                        className="form-control"
                                        validators={{
                                            required,
                                            isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".telNumber"
                                        show="touched"
                                        messages={{
                                            required: "Required ",
                                            isNumber: "valid number"
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            {/* Email: */}
                            <FormGroup row><Label htmlFor="email" md={2}>Email:</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".email"
                                        name="email"
                                        placeholder="your valid email"
                                        className="form-control"
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: "Required ",
                                            validEmail: "invalid email"
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            {/* agree */}
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                className="form-check-input"
                                            />
                                            <strong>May we contract you ?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                {/* contactType: */}
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select
                                        model=".contactType"
                                        name="contactType"
                                        className="form-control"
                                    >
                                        <option>telephone</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            {/* messege */}
                            <FormGroup>
                                <Label htmlFor="messge" md={3} className="text-center">your feed back :</Label>
                                <Col md={10} >
                                    <Control.textarea
                                        model=".messege"
                                        name="messege"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".messege"
                                        show="touched"
                                        messages={{
                                            required: "Required ",
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            {/* btn */}
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary" > Sent feed back</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(null, mapDispatchToProps)(Contact);
