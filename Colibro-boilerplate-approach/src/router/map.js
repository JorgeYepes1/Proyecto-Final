// import { Home } from '../scenes'
import { Login } from '../scenes/Public/Login/Login'
import { Home } from '../scenes/Public/Home/Home'
import { HomeLogged } from '../scenes/Private/HomeLogged/HomeLogged'
import { HistoryDetail } from '../scenes/Private/HistoryDetail/HistoryDetail'

const PublicMap = [
  {
    restricted: true,
    exact: true,
    path: '/',
    component: Home
  },
  {
    restricted: true,
    exact: true,
    path: '/login',
    component: Login
  },
  {
    restricted: true,
    exact: true,
    path: '/homelogged',
    component: HomeLogged
  },
  {
    restricted: true,
    exact: true,
    path: '/historydetail',
    component: HistoryDetail
  }
]

const PrivateMap = [
  {
    restricted: true,
    exact: true,
    path: '/home',
    // component: Home
    component: () => <h1>Home</h1>
  },
  {
    restricted: true,
    exact: true,
    path: '/about',
    component: () => <h1>About</h1>
  },
  {
    restricted: true,
    exact: true,
    path: '/contact_us',
    component: () => <h1>Contact us</h1>
  },
]

export { PublicMap, PrivateMap }