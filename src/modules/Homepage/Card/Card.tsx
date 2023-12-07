import { FC } from 'react'

import styles from './Card.module.scss'

interface CardProps {
  title: string
  type?: string
  number: number
}

const Card: FC<CardProps> = ({ title, number }) => {
  return (
    <div className={styles.root}>
      <div className={styles.number}>{number}</div>
      <div className={styles.title}>{title}</div>
    </div>
  )
}

export default Card
