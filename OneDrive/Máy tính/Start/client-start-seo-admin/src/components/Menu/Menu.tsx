/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useHistory } from 'react-router-dom'
import LogoWithTextWhite from '../../images/LogoWithTextWhite.png'
import { PieChartOutlined, PullRequestOutlined, ApartmentOutlined } from '@ant-design/icons'
import styles from './Menu.module.scss'

const Menu = () => {
  const history = useHistory()

  const getClassActive = (name: string) => {
    if (window.location.pathname === name) {
      return styles.active
    } else {
      return ''
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <img src={LogoWithTextWhite} alt='LogoWithTextWhite' />
      </div>

      <ul className={styles.listMenu}>
        <li
          className={getClassActive('/')}
          onClick={() => {
            history.push('/')
          }}
        >
          <PieChartOutlined className={styles.icon} />
          Dashboard
        </li>

        <li
          className={getClassActive('/request')}
          onClick={() => {
            history.push('/request')
          }}
        >
          <PullRequestOutlined className={styles.icon} />
          Request
        </li>

        <li
          className={getClassActive('/order-status')}
          onClick={() => {
            history.push('/order-status')
          }}
        >
          <ApartmentOutlined className={styles.icon} />
          Order Status
        </li>
      </ul>
    </div>
  )
}

export default Menu
