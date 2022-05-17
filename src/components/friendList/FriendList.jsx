import "./style.css";
import PropTypes from 'prop-types';
export function Friends({ friends }) {
    return (

        <ul className="friend-list">
            {friends.map(friend => (
                <li key={friend.id} className="friend-list__item">
                    <span className={friend.isOnline ? "friend-list__status" : "friend-list__status friend-list__status--offline"}  ></span>
                    <img className="friend-list__avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p className="friend-list__name">{friend.name}</p>
                </li>
            ))
            }
        </ul >

    );
}
Friends.prototype = {
    friends: PropTypes.arrayOf(PropTypes.object)
}
Friends.defaultProps = {
    friends: []
}