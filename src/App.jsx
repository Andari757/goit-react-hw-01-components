import { Profile } from './components/profile/Profile';
import ProfileData from './data/user.json';
import { Statistics } from 'components/statistics/Statistics';
import Stats from "./data/statistics.json";
import { Friends } from 'components/friendList/FriendList';
import friends from "./data/friends.json"
import transactions from "./data/transactions.json"
import { Transactions } from 'components/transactionHistory/TransactionHistory';
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
        {...ProfileData}
      />
      <Statistics
        title="シ"
        stats={Stats}
      />
      <Friends
        friends={friends}
      />
      <Transactions
        items={transactions}
      />
    </div>

  );
};
