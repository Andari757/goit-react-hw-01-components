import styles from "./style.module.css";
import PropTypes from 'prop-types';
export function Statistics({ title, stats }) {
    return (
        <section className={styles.statistics}>
            {title && (<h2 className={styles.statistics__title}>{title}</h2>)}
            <ul className={styles.statistics__list}>
                {stats.map(stat => (
                    <li key={stat.id} className={styles.statistics__item}>
                        <span className={styles.statistics__label}>{stat.label}</span>
                        <span className={styles.statistics__percentage}>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
Statistics.defaultProps = {
    stats: []
}
Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
    }))
}