import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router';
import NavbarContainer from './components/Navbar/NavbarContainer';


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <NavbarContainer />
            <div className='app-wrapper-content'>

                <Route path='/profile'
                    render={() => <Profile />} />

                <Route path='/dialogs'
                    render={() => <DialogsContainer />} />

                <Route path='/news' render={News} />
                <Route path='/music' render={Music} />
                <Route path='/settings' render={Settings} />
            </div>
        </div>
    );
}

export default App;