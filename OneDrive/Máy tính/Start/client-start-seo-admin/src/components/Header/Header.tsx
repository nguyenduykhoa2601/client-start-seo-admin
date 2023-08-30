import { BellOutlined, HomeOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Menu } from 'antd'
import { memo } from 'react'

import { RootState, useAppSelector } from '../../redux/store'
import styles from './Header.module.scss'

const MenuProfileUser = (
  <Menu
    inlineIndent={32}
    style={{ width: '150px' }}
    items={[
      {
        key: '1',
        label: (
          <div className={styles.setting}>
            <HomeOutlined />
            <span>User profile</span>
          </div>
        )
      },
      {
        key: '2',
        label: (
          <div className={styles.setting}>
            <LogoutOutlined />
            <span>Logout</span>
          </div>
        )
      }
    ]}
  />
)

const Header = () => {
  const { userInfo } = useAppSelector((state: RootState) => state.auth)
  console.log('userInfo', userInfo)

  return (
    <div className={styles.root}>
      <div className={styles.sideStatus}>
        <div className={styles.badge}>
          <BellOutlined className={styles.icon} />
        </div>

        <div className={styles.line}></div>

        <div className={styles.name}>{userInfo?.email}</div>

        <Dropdown
          placement='bottomRight'
          getPopupContainer={(triggerNode) => triggerNode.parentElement as HTMLDivElement}
          className={styles.dropdown}
          overlay={MenuProfileUser}
        >
          <Avatar className={styles.avatar} icon={<UserOutlined />} size='large' />
        </Dropdown>
      </div>
    </div>
  )
}

export default memo(Header)
