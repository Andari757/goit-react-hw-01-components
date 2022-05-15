import "./style.css";
import PropTypes from 'prop-types';
export function Profile({ username, tag, location, avatar, stats }) {
    return (
        <div className="Profile">
            <div className="Profile__details">
                <img
                    src={avatar}
                    alt="User avatar"
                    className="Profile__avatar"
                />
                <p className="Profile__username">{username}</p>
                <p className="Profile__tag">@{tag}</p>
                <p className="Profile__location">{location}</p>
            </div>

            <ul className="Profile__stats">
                <li className="Profile__stats-item">
                    <span className="Profile__stats-label">Followers</span>
                    <span className="Profile__stats-value">{stats.followers}</span>
                </li>
                <li className="Profile__stats-item">
                    <span className="Profile__stats-label">Views</span>
                    <span className="Profile__stats-value">{stats.views}</span>
                </li>
                <li className="Profile__stats-item">
                    <span className="Profile__stats-label">Likes</span>
                    <span className="Profile__stats-value">{stats.likes}</span>
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
    stats: PropTypes.object
}