import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './components/home/HomeContainer'
import Bootcamp from "./components/bootcamp/Bootcamp";


export const Router = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/bootcamp" component={Bootcamp}/>
    </Switch>
)

export default Router;