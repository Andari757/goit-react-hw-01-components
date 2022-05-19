import { Profile } from './components/Profile/Profile';
import profileData from './data/user.json';

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

    </div>

  );
};
