import styles from "./style.module.css";
import PropTypes from 'prop-types';
export default function FriendListItem({ friend }) {
    return (

        < li className={styles['friend-list__item']} >
            <span className={friend.isOnline ? styles['friend-list__status'] : `${styles['friend-list__status']} ${styles['friend-list__status--offline']}`}  ></span>
            <img className={styles['friend-list__avatar']} src={friend.avatar} alt="User avatar" width="48" />
            <p className={styles['friend-list__name']}> {friend.name}</p>
        </li >
    );
}
FriendListItem.defaultProps = {
    friends: {}
}
FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number
    })
}
