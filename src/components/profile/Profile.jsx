// import "./style.css";
import styles from "./style.module.css"
import PropTypes from 'prop-types';
export function Profile({ username, tag, location, avatar, stats }) {
    return (
        <div className={styles.Profile}>
            <div className={styles.Profile__details}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={styles.Profile__avatar}
                />
                <p className={styles.Profile__username}>{username}</p>
                <p className={styles.Profile__tag}>@{tag}</p>
                <p className={styles.Profile__location}>{location}</p>
            </div>

            <ul className={styles.Profile__stats}>
                <li className={styles['Profile__stats-item']}>
                    <span className={styles['Profile__stats-label']}>Followers</span>
                    <span className={styles['Profile__stats-value']}>{stats.followers}</span>
                </li>
                <li className={styles['Profile__stats-item']}>
                    <span className={styles['Profile__stats-label']}>Views</span>
                    <span className={styles['Profile__stats-value']}>{stats.views}</span>
                </li>
                <li className={styles['Profile__stats-item']}>
                    <span className={styles['Profile__stats-label']}>Likes</span>
                    <span className={styles['Profile__stats-value']}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}
Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    })
}