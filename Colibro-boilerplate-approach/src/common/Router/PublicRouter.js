import { Route, Redirect } from 'react-router-dom'

const PublicRoutes = ({ component: Component, exact, path, restricted, ...rest }) => {

  // Login placeholder
  const isLogin = false

  return (
    <Route
      exact={exact}
      path={path}
      render={props => (
        isLogin && restricted ?
          <Redirect to='/home' />
          :
          <Component {...props} />
      )}
      {...rest}
    />
  )
}

export default PublicRoutes