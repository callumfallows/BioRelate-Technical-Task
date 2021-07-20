import ReactDOM from 'react-dom'
import * as React from 'react'

require('dotenv').config();

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ChakraProvider} from '@chakra-ui/react'
import {store} from './store'
import {Provider} from 'react-redux'

import theme from './theme'
import '@fontsource/inter/700.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/400.css'

import LoginPage from './components/pages/login.page'
import LoginAuthentication from './components/pages/login-auth.page'
import Authenticated from "./components/templates/authenticated.template";
import ProfilePage from "./components/pages/profile.page";

function App() {

    return (
        <ChakraProvider theme={theme}>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <LoginPage/>
                        </Route>
                        <Route exact path={'/login'}>
                            <LoginPage/>
                        </Route>
                        <Route
                            path={'/login/callback'}
                            render={(routeProps) => {
                                return <LoginAuthentication hash={routeProps.location.hash}/>
                            }}
                        />  
                        <Route path="/profile">
                            <Authenticated>
                                <ProfilePage/>
                            </Authenticated>
                        </Route>
                        <Route path="/articles">
                            <div>Articles</div>
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        </ChakraProvider>
    )
}

ReactDOM.render(<App/>, document.querySelector('#app'))
