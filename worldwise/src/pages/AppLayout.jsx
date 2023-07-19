import AppNav from '../components/AppNav';
import styles from './AppLayout.module.css';
function AppLayout() {
  return (
    <div className={styles.app}>
      <AppNav />
      <h1>Hello</h1>
    </div>
  );
}
export default AppLayout;
