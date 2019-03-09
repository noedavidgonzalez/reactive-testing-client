import React, {Component} from 'react';
import App from './../../App'; 
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './../Home'; 

export default class Routes extends Component{
    constructor(props) {
        super(props);
        this.state = { }

    }

    render(){
        return (
          <App>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
          </App>
        );
    }
} 