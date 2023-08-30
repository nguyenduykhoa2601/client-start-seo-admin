import PieChart from '../../../components/charts/PieChart/PieChart'
import Card from '../Card/Card'
import styles from './Summary.module.scss'

const Summary = () => {
  return (
    <div className={styles.root}>
      <div className={styles.blockCard}>
        <Card number={7} title='Pending Orders' />
        <Card number={9} title='Rejecting Orders' />
        <Card number={13} title='Approved Orders' />
      </div>
      <PieChart />
    </div>
  )
}

export default Summary
