import styles from './styles.module.css';
import { Header } from './../Header/Header';

export const Layout = ({ children }) => {
    return (
        <div className={styles.root}>
            <Header></Header>
            <div className={styles.content}>{children}</div>
            <footer>footer</footer>
        </div>
    );
};