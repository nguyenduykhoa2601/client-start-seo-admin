/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { RootState, useAppSelector } from '../../redux/store'
import styles from './OrderStatusPage.module.scss'
import withMainLayout from '../../HOC/MainLayout'
import ModalLoading from '../../components/ModalLoading/ModalLoading'

const OrderStatusPAge = () => {
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
      Order
    </div>
  )
}

export default withMainLayout(OrderStatusPAge)
