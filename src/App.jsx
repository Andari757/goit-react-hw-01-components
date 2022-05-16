import { Profile } from './components/profile/Profile';
import ProfileData from './user.json';
import { Statistics } from 'components/statistics/Statistics';
import Stats from "./statistics.json";
import { Friends } from 'components/friendList/FriendList';
import friends from "./friends.json"
import transactions from "./transactions.json"
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
