/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, memo } from 'react'

import { CloseCircleOutlined } from '@ant-design/icons'
import styles from './Modal.module.scss'

interface ModalProps {
  children?: any
  onClose: () => void
  title: string
}

const Modal: FC<ModalProps> = ({ children, onClose, title }) => {
  return (
    <div className={styles.root}>
      <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div>{title}</div>

            <div className={styles.close} onClick={onClose}>
              <CloseCircleOutlined />
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  )
}

export default memo(Modal)
