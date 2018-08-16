import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { changeLoginStatus, getUserInfo } from './actions';


class Header extends Component {
    constructor(props) {
        super(props);
        this.responseGoogle = this.responseGoogle.bind(this);
    }

    responseGoogle(response) {
        console.log(response.profileObj);

        this.props.dispatch(changeLoginStatus(true));
        this.props.dispatch(getUserInfo(response.profileObj));
    }

    render() {
        if (!this.props.isLogin) {
            return (
                <header>
                    {this.props.isLogin === false &&
                        <GoogleLogin
                            clientId="853220208001-o12l4m1e5j61rq2k7pkfq8dqj1q5pq0o.apps.googleusercontent.com"
                            buttonText="Login with Google"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                        />
                    }
                </header>
            )
        } else {
            return (
                <header>
                </header>
            )
        }
    }
}

function _mapStateToPropsTop(state) {
    return {
        isLogin: state.isLogin
    };
}
export default connect(_mapStateToPropsTop)(Header);