import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import {EditPage,AddPage,Dashboard} from './App';

const Routes = () => {
    return<>
        <Router>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/add" component={AddPage}/>
                <Route exact path="/edit/:id" component={EditPage}/>
            </Switch>
        </Router>
    </>
}

export default Routes


