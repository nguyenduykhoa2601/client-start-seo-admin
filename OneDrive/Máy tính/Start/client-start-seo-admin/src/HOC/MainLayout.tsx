import Header from '../components/Header/Header'
import Menu from '../components/Menu/Menu'

import styles from './MainLayout.module.scss'

const withMainLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return function withMainLayout(props: P) {
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <Header />
        </div>

        <div className={styles.menu}>
          <Menu />
        </div>

        <div className={styles.section}>
          <WrappedComponent {...props} />
        </div>
      </div>
    )
  }
}

export default withMainLayout
