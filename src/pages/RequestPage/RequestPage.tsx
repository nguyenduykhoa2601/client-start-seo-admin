/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { RootState, useAppSelector } from '../../redux/store'
import styles from './RequestPage.module.scss'
import withMainLayout from '../../HOC/MainLayout'
import ModalLoading from '../../components/ModalLoading/ModalLoading'
import FormOrderDetail from '../../modules/RequestPage/FormOrderDetail/FormOrderDetail'
import OrderItemList from '../../modules/RequestPage/OrderItemList/OrderItemList'

const RequestPage = () => {
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
      <div className={styles.createReq}>
        <FormOrderDetail />
      </div>

      <div className={styles.orderList}>
        <OrderItemList />
      </div>
    </div>
  )
}

export default withMainLayout(RequestPage)
