import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import ProjectsPage from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import QuickFix from './Components/QuickFix/QuickFix'
import AllThink from './Components/AllThink/AllThink'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route exact path='/projects' component={ProjectsPage} />
        <Route path='/projects/quick' component={QuickFix} />
        <Route path='/projects/think' component={AllThink} />
    </Switch>
)