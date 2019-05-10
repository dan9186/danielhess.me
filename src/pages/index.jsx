import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from './home/home'
import { Resume } from './resume/resume'
import { NotFound } from './not_found/not_found'
import { Slides } from './slides/slides'

export const Pages = () => (
  <React.Fragment>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/resume' component={Resume}/>
      <Route path='/slides' component={Slides}/>
      <Route component={NotFound}/>
    </Switch>
  </React.Fragment>
)
