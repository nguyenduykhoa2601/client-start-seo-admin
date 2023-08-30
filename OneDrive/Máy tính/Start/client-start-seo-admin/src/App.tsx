/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { readCookies } from './helpers/cookies'
import AuthPage from './pages/AuthPage/AuthPage'
import Homepage from './pages/Homepage/Homepage'
import { doGetUserInfo } from './redux/actions/auth'
import { RootState, useAppDispatch, useAppSelector } from './redux/store'
import RequestPage from './pages/RequestPage/RequestPage'
import OrderStatusPage from './pages/OrderStatusPage/OrderStatusPage'

const App: FC = () => {
  const dispatch = useAppDispatch()
  const { userInfo } = useAppSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (readCookies('accessTokenStart') && !userInfo) {
      dispatch(
        doGetUserInfo({
          token: readCookies('accessTokenStart')?.toString() ?? ''
        })
      )
    }
  }, [readCookies('accessTokenStart'), userInfo])

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/login'} component={AuthPage} />
          <Route exact path={'/request'} component={RequestPage} />
          <Route exact path={'/order-status'} component={OrderStatusPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
