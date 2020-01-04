import React, { Component } from 'react'

import { MosaicBaseStyle, theme } from 'nectar-cs-js-common'
import {ThemeProvider} from 'styled-components'
import {BrowserRouter, Route} from 'react-router-dom'
import {Switch} from "react-router";
import Basics from './Basics'
import CenteredOne from './CenteredOne'

export default class App extends Component {

  render () {
    const GCP_BASE = 'https://storage.googleapis.com/';
    const IMG_BASE = GCP_BASE + 'nectar-mosaic-public/images';
    const nectar = `${IMG_BASE}/nectar_mark_light.png`;

    return (
      <ThemeProvider theme={theme}>
        <MosaicBaseStyle/>
        <BrowserRouter>
          <Switch>
            <Route path='/centered-one' component={CenteredOne}/>
            <Route path='/basics' component={Basics}/>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}
