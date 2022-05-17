import styles from "./style.module.css";
import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem/FriendListItem";
export default function FriendList({ friends }) {
    return (
        <ul className={styles['friend-list']}>
            {friends.map(friend => (
                < FriendListItem
                    key={friend.id}
                    friend={friend}
                />
            )
            )}
        </ul >

    );
}


FriendList.defaultProps = {
    friends: []
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }))
}
