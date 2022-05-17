import Profile from './components/Profile/Profile';
import profileData from './data/user.json';
import Statistics from 'components/Statistics/Statistics';
import stats from "./data/statistics.json";
import FriendList from 'components/FriendList/FriendList';
import friends from "./data/friends.json"
import transactions from "./data/transactions.json"
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <div
      style={{

        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        {...profileData}
      />
      <Statistics
        title="シ"
        stats={stats}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
    </div>

  );
};
