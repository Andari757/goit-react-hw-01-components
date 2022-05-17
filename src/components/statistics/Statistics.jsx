import styles from "./style.module.css";
import PropTypes from 'prop-types';
export function Statistics({ title, stats }) {
    const elements = stats.map(stat => (
        <li key={stat.id} className={styles.statistics__item}>
            <span className={styles.statistics__label}>{stat.label}</span>
            <span className={styles.statistics__percentage}>{stat.percentage}%</span>
        </li>
    ))
    return (
        <section className={styles.statistics}>
            {title && (<h2 className={styles.statistics__title}>{title}</h2>)}
            <ul className={styles.statistics__list}>
                {elements}
            </ul>
        </section>
    );
}
Statistics.defaultProps = {
    stats: []
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
    }))
}
