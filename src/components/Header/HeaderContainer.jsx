import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { checkForAuth } from '../../redux/auth-reducer';


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.checkForAuth();
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

let actions = {
    checkForAuth
}

export default connect(mapStateToProps, actions)(HeaderContainer);