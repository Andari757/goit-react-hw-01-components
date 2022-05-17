// import "./style.css";
import styles from "./style.module.css"
import PropTypes from 'prop-types';
export default function Profile({ username, tag, location, avatar, stats }) {
    return (
        <div className={styles.profile}>
            <div className={styles.profile__details}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={styles.profile__avatar}
                />
                <p className={styles.profile__username}>{username}</p>
                <p className={styles.profile__tag}>@{tag}</p>
                <p className={styles.profile__location}>{location}</p>
            </div>

            <ul className={styles.profile__stats}>
                <li className={styles['profile__stats-item']}>
                    <span className={styles['profile__stats-label']}>Followers</span>
                    <span className={styles['profile__stats-value']}>{stats.followers}</span>
                </li>
                <li className={styles['profile__stats-item']}>
                    <span className={styles['profile__stats-label']}>Views</span>
                    <span className={styles['profile__stats-value']}>{stats.views}</span>
                </li>
                <li className={styles['profile__stats-item']}>
                    <span className={styles['profile__stats-label']}>Likes</span>
                    <span className={styles['profile__stats-value']}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}