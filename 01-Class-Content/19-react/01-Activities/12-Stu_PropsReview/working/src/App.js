import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json"
import FriendCard from "./components/FriendsCard";


const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <FriendCard 
      name={friends[0].name}
      image={friends[0].iamge}
      occupation={friends[0].occupation}
      location={friends[0].location}
    />
      <FriendCard 
      name={friends[1].name}
      image={friends[1].iamge}
      occupation={friends[1].occupation}
      location={friends[1].location}
    />

  </Wrapper>
);

export default App;
