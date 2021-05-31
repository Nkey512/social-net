import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, withRouter } from "react-router";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React from "react";
import { getAuthUserData } from "./redux/auth-reducer";
import { connect } from "react-redux";
import { compose } from "redux";

class App extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <NavbarContainer />
                <div className="app-wrapper-content">
                    <Route path="/login" render={() => <Login />} />

                    <Route
                        path="/profile/:userId?"
                        render={() => <ProfileContainer />}
                    />

                    <Route
                        path="/dialogs"
                        render={() => <DialogsContainer />}
                    />

                    <Route path="/users" render={() => <UsersContainer />} />

                    <Route path="/news" render={News} />
                    <Route path="/music" render={Music} />
                    <Route path="/settings" render={Settings} />
                </div>
            </div>
        );
    }
}

let actions = {
    getAuthUserData,
};

export default compose(withRouter, connect(null, actions))(App);
