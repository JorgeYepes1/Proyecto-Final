import { axiosClient as api } from '../../common/api/api'

const token='2341234'

const login = (userName, password) => {
  api.post('/login', {userName, password}, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
}

const register = (userName, password) => {
  api.post('/login', {userName, password}, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
}


export {
  login,
  register
}
