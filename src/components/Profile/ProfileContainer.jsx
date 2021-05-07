import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

let actions = {
    getUserProfile
}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, actions)
)(ProfileContainer);