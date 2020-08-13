import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainPage from './main/main_page'
import Navbar from './navbar/navbar'
import {
    createMuiTheme,
    ThemeProvider,
} from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#03a9f4',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f50057',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
})

const App = () => (
    <div style={{}}>
        <Navbar />
        <Switch>
            <ThemeProvider theme={theme}>
                <Route exact path="/" component={MainPage} />
            </ThemeProvider>
        </Switch>
    </div>
)

export default App
