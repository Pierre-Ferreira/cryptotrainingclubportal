import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRouteComp = ({
  loggingIn,
  authenticated,
  component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (loggingIn) return <div />;
      return !authenticated ?
      (React.createElement(component, { ...props, loggingIn, authenticated })) :
      (<Redirect to="/main/welcome" />);
    }}
  />
);

// PublicRouteComp.propTypes = {
//   loggingIn: PropTypes.bool,
//   authenticated: PropTypes.bool,
//   component: PropTypes.func,
// };

export default PublicRouteComp;
