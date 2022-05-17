import styles from "./style.module.css";
import PropTypes from 'prop-types';
import { FriendListItem } from "./friendListItem/FriendListItem";
export function FriendList({ friends }) {
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
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number
    }))
}
