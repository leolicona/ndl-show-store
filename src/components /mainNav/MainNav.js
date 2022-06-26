
import styles from './mainNav.module.css'
export default function MainNav () {

    const items = ['Show', 'Store', 'ContacUs']
    return(
        <nav>
            <ul className={styles.list}>
             {items.map((item, key) => <li className={styles.item} id='key'>{item}</li>)}
            </ul>
        </nav> 
    )
}