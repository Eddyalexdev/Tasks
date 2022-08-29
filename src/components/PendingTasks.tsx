import Task from './Task';
import styles from './Tasks.module.scss';

const PendingTasks = () => {
  return (
    <div className={styles.tasks}>
      <h2 className={styles.tasks__title}>Pendientes</h2>
      <Task />
      <hr className={styles.tasks__line}/>
      <Task />
    </div>
  )
}

export default PendingTasks;
