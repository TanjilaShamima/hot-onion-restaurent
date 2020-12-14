import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUserDetails } from '../../Redux/actions/restaurentManageAction';
const PrivateRoute = ({user, children, ...rest }) => {
    const {email} = user;
    return (
        <Route
          {...rest}
          render={({ location }) =>
            email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};
const mapStateToProps = (state) =>{
    return{
        user : state.user
    }
}

export default connect(mapStateToProps)(PrivateRoute);