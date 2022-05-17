import styles from "./style.module.css";
import { FriendListItem } from "./friendListItem/FriendListItem";
export function FriendList(friends) {
    return (
        <ul className={styles['friend-list']}>
            {friends.map(friend => (
                <FriendListItem
                    friends={friend}
                />
            ))}
        </ul >

    );
}


