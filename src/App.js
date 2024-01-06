import './App.css';

import UserProfile from './components/UserProfiles/index';

const userDetails={
  "name":"Nagendra",
  "img":"https://img.freepik.com/free-photo/full-shot-woman-with-bicycle-outdoors_23-2149413735.jpg?w=740&t=st=1704456876~exp=1704457476~hmac=8e9466f93c50e645d93cc740c8bfb783ec84a60cbc600481b774c46158b0e4af",
  "role":"student"
}

function App() {
  return (
   <UserProfile userDetails={userDetails}/>

  );
}

export default App;
