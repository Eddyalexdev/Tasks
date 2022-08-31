import Task from './Task';
import styles from './Tasks.module.scss';

const PendingTasks = () => {
  const task1 = {
    id: 1,
    name: "tarea 1",
    state: "completed",
    difficult: "minor"
  }

  const task2 = {
    id: 2,
    name: "tarea 2",
    state: "progress",
    difficult: "critical"
  }

  return (
    <div className={styles.tasks}>
      <h2 className={styles.tasks__title}>Pendientes</h2>
      <div className={styles.tasks__container}>
        <Task task={task1}/>
        <hr className={styles.tasks__line}/>
        <Task task={task1}/>
        <hr className={styles.tasks__line}/>
        <Task task={task1}/>
        <hr className={styles.tasks__line}/>
        <Task task={task2}/>
        <hr className={styles.tasks__line}/>
        <Task task={task2}/>
      </div>
    </div>
  )
}

export default PendingTasks;
