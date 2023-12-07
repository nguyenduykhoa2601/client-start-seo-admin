/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { RootState, useAppSelector } from '../../redux/store'
import styles from './ApprovalFlow.module.scss'
import withMainLayout from '../../HOC/MainLayout'
import ModalLoading from '../../components/ModalLoading/ModalLoading'

import { LIST_WORK_FLOW } from '../../helpers/constants'
import ItemFlow from '../../modules/ApprovalFlow/ItemFlow/ItemFlow'

const ApprovalFlow = () => {
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

      {LIST_WORK_FLOW.map((item) => {
        return <ItemFlow item={item} key={item.name} />
      })}
    </div>
  )
}

export default withMainLayout(ApprovalFlow)
