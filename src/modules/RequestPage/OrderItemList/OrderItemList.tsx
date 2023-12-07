import { memo, useState } from 'react'
import styles from './OrderItemList.module.scss'
import { Button, Table } from 'antd'
import ModalListItem from '../ModalListItem/ModalListItem'

const OrderItemList = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <div className={styles.root}>
      <div className={styles.title}>Order Items List</div>

      <Table
        className={styles.table}
        columns={[
          {
            title: 'Order',
            key: 'order',
            align: 'center'
          },
          {
            title: 'Name',
            key: 'name',
            align: 'center'
          },
          {
            title: 'Size',
            key: 'size',
            align: 'center'
          },
          {
            title: 'Pre-approved',
            key: 'Pre-approved',
            align: 'center'
          },
          {
            title: 'Quanity',
            key: 'Quanity',
            align: 'center'
          },
          {
            title: 'Price',
            key: 'price',
            align: 'center'
          },
          {
            title: 'Total Cost',
            key: 'Total Cost',
            align: 'center'
          }
        ]}
      />
      <Button size='large' onClick={() => setIsOpenModal(true)} type='primary' className={styles.buttonAdd}>
        + ADD MORE ITEMS
      </Button>

      {isOpenModal && <ModalListItem isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />}
    </div>
  )
}

export default memo(OrderItemList)
