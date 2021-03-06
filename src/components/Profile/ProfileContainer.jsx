import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
    getStatus,
    getUserProfile,
    updateStatus,
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    };
};

let actions = {
    getUserProfile,
    getStatus,
    updateStatus,
};

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, actions)
)(ProfileContainer);
