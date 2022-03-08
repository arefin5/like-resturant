import React, { Component } from 'react'
import Loading from './Loading'
// import {connect} from 'react-redux'

// const mapStateToProps = state => {
//     // console.log("map state to props" ,state);
//     return{
//         dishes:state.dishes ,
//         comments:state.comments
//     }
// }

class Home extends Component {
    // componentDidMount(){
    //     console.log("home:",this.props);
    //     console.log("home:",this.state);
    // }
    render() {
        document.title = "Well-come to rajhmohol"
        return (
            <div>
                <Loading />
            </div>
        )
    }
}
// export default connect(mapStateToProps) (Home) ;
export default Home;