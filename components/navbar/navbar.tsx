import styles from './navbar.module.scss';
import uStyles from '../../styles/utils.module.scss';

export default function Navbar() {

  return (
      <div className={styles.menu}>
        <menu className={uStyles.container} >
          <strong>
            <h1>To do list</h1>
            </strong>
        </menu>
      </div>
  );
}
