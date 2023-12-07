import styles from './ModalLoading.module.scss'

const ModalLoading = () => {
  return (
    <div className={styles.root}>
      <div className={styles.body}>
        <div className={styles.content}></div>
      </div>
    </div>
  )
}

export default ModalLoading
