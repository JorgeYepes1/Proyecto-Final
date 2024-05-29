import { Route, Redirect } from 'react-router-dom'

const PrivateRoutes = ({ component: Component, exact, path, restricted, ...rest }) => {
  const isLogin = false

  return (
    <Route
      exact={exact}
      path={path}
      render={props => isLogin ? <Component {...props} /> : <Redirect to='/' />}
      {...rest}
    />
  )
}

export default PrivateRoutes;