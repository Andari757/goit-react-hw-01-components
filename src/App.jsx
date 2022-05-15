import { Profile } from './components/profile/Profile';
import ProfileData from './user.json';
import { Statistics } from 'components/statistics/Statistics';
import Stats from "./statistics.json";
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
    </div>

  );
};
