import styles from "./style.module.css";
import PropTypes from 'prop-types';
export function Friends({ friends }) {
    return (

        <ul className={styles['friend-list']}>
            {friends.map(friend => (
                <li key={friend.id} className={styles['friend-list__item']}>
                    <span className={friend.isOnline ? styles['friend-list__status'] : `${styles['friend-list__status']} ${styles['friend-list__status--offline']}`}  ></span>
                    <img className={styles['friend-list__avatar']} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={styles['friend-list__name']}> {friend.name}</p>
                </li>
            ))
            }
        </ul >

    );
}
Friends.defaultProps = {
    friends: []
}
Friends.prototype = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number
    }))
}
