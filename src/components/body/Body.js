import React from 'react'
import Menu from './Menu.js'
import Home from './Home'
import Contact from './Contact.js'
import About from './About.js'
import { Route, Redirect, Switch } from 'react-router-dom'
const Body = () => {
    return (<div>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/about" exact component={About} />
            <Redirect from="/" to="/home" />
        </Switch>
    </div>)
}
export default Body;