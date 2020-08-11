import React from 'react';
import { Route, Switch} from 'react-router-dom';
import MainPage from './main/main_page';
import Navbar from './navbar/navbar';

const App = () => (
    <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={MainPage} />
        </Switch>

    </>
 
);

export default App;
