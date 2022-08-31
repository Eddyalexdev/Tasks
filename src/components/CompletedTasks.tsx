import styles from "./Tasks.module.scss"

const CompletedTasks = () => {
  return (
    <div className={styles.tasks}>
      <h2 className={styles.tasks__title}>Completadas</h2>
    </div>
  )
}

export default CompletedTasks;
