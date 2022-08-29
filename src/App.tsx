import styles from './Base.module.scss';
import Header from './components/Header';
import ButtonAdd from './components/ButtonAdd';
import PendingTasks from './components/PendingTasks';

function App() {
  const tasks = 0;
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={styles.main__left}>
          <div className={styles.main__content}>
            <h1 className={styles.main__title}>Tienes <span> {tasks} tareas </span> pendientes</h1>
            <ButtonAdd>+ Agregar Nueva</ButtonAdd>
          </div>
          <PendingTasks />
        </div>
        <div className={styles.main__right}>
          <span>Comments and Notifications part</span>
        </div>
      </main>
    </div>
  )
}

export default App
