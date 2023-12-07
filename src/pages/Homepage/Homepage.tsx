/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { RootState, useAppSelector } from '../../redux/store'
import styles from './Homepage.module.scss'
import withMainLayout from '../../HOC/MainLayout'
import ModalLoading from '../../components/ModalLoading/ModalLoading'
import Summary from '../../modules/Homepage/Summary/Summary'
import { Skeleton } from 'antd'

const Homepage = () => {
  const { userInfo, isLoading } = useAppSelector((state: RootState) => state.auth)
  const history = useHistory()

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
  }, [userInfo])

  return (
    <div className={styles.root}>
      {isLoading && <ModalLoading />}
      <div className={styles.summary}>
        <Summary />
      </div>

      <div className={styles.recent}>
        <Skeleton avatar paragraph={{ rows: 4 }} />
      </div>
    </div>
  )
}

export default withMainLayout(Homepage)
