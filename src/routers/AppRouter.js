import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import FoodApp from '../components/FoodApp';
import FoodList from '../components/FoodList';
import Thankyou from '../components/ThankYou';
import Footer from '../components/Footer';
import Header from '../components/Header';


export const history = createHistory();
 
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={FoodApp} exact={true} />
                <Route path="/foodlist" component={FoodList} exact={true} />
                <Route path="/thankyou" component={Thankyou} exact={true} />
            </Switch>
            <Footer />
        </div>
    </Router>
);

export default AppRouter;