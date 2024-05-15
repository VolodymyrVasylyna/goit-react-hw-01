import "./App.css";
import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import friends from "../friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "../transactions.json";
import userData from "../userData.json";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
