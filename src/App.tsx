import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import React, { useState } from "react";
import { tempUser, User } from "./types/User";
import { User as FirebaseAuth } from "firebase/auth";

const queryClient = new QueryClient();
export const UserContext = React.createContext({
  user: tempUser,
  changeUser: (user: User) => {},
});

function App() {
  const [user, setUser] = useState(tempUser);
  function changeUser(newUser: User) {
    setUser(newUser);
  }

  const userGlobalState = {
    user,
    changeUser,
  };

  return (
    <div>
      <UserContext.Provider value={userGlobalState}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Nav />
          </BrowserRouter>
        </QueryClientProvider>
      </UserContext.Provider>
    </div>
  );
}
export default App;
