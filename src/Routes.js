import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './components/home/HomeContainer'
import Bootcamp from "./components/bootcamp/Bootcamp";
import Courses from "./components/courses/Courses";
import Contacto from "./components/contacto/Contacto";
import LoginContainer from "./components/login/LoginContainer";
import Registro from "./components/login/Registro";
import Apply from "./components/bootcamp/Apply";
import ProfileContainer from "./components/profile/ProfileContainer";
import {CoursesDetail} from "./components/courses/CoursesDetail";


export const Router = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/courses" component={Courses}/>
        <Route path="/courses/detail" component={CoursesDetail}/>
        <Route path="/bootcamp" component={Bootcamp}/>
        <Route path="/contacto" component={Contacto}/>
        <Route path="/login" component={LoginContainer}/>
        <Route path="/registro" component={Registro}/>
        <Route path="/apply" component={Apply}/>
        <Route path="/profile" component={ProfileContainer}/>
    </Switch>
)

export default Router;