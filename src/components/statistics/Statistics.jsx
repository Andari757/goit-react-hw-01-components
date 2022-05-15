import "./style.css";
import PropTypes from 'prop-types';
export function Statistics({ title, stats }) {
    return (
        <section className="statistics">
            {title && (<h2 className="statistics__title">{title}</h2>)}
            <ul className="statistics__list">
                {stats.map(stat => (
                    <li key={stat.id} className="statistics__item">
                        <span className="statistics__label">{stat.label}</span>
                        <span className="statistics__percentage">{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object)
}