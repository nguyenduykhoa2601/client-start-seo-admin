import { FC, memo } from 'react'

import styles from './ModalListItem.module.scss'
import Modal from '../../../components/Modal/Modal'
import { Button } from 'antd'

interface ModalListItemProps {
  onClose: () => void
  isOpen?: boolean
}

const ModalListItem: FC<ModalListItemProps> = ({ onClose, isOpen }) => {
  return (
    <div className={styles.root}>
      {isOpen && (
        <Modal title='ADD NEW ITEM' onClose={onClose}>
          <div>
            <div>Product Catalog</div>

            <Button type='primary'>+ CREATE NEW ITEM</Button>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default memo(ModalListItem)
