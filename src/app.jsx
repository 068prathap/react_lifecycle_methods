import { Component } from "react";
import DataPage from "./pages/dataPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NextPage from "./pages/nextPage";

class App extends Component
{
    render()
    {
        return(
            <>
            <Router>
                <Switch>
                    <Route exact path='/' component={DataPage}/>
                    <Route path='/nextPage' component={NextPage}/>
                </Switch>
            </Router>
            </>
        )
    }
}
export default App