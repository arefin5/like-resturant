import React, { Component } from 'react'
import DISHES from '../../data/dishes.js'
import MenuItem from './MenuItem.js'

class Menu extends Component {
    state = {
        dishes: DISHES,
    }
    render() {
        const Maninstate=this.state.dishes
        const menu=Maninstate.map(item=>{
            // console.log(item);
         return (
            <MenuItem dish={item} key={item.id}/>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    {menu}
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu;
