/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'

import styles from './ItemFlow.module.scss'

interface ItemFlowProps {
  item: any
}

const ItemFlow: FC<ItemFlowProps> = ({ item }) => {
  return (
    <div className={styles.root}>
      <div className={styles.quotesAction}>...</div>

      <div className={styles.name}>{item.name}</div>

      <div className={styles.info}>
        Department:{' '}
        {item.departments.map((item: any) => {
          return (
            <div className={styles.tag} key={item}>
              {item}
            </div>
          )
        })}
      </div>

      <div className={styles.info}>
        Location:{' '}
        {item.locations.map((item: any) => {
          return (
            <div className={styles.tag} key={item}>
              {item}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ItemFlow
