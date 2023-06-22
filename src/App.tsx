import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import React, { useState } from "react";
import { tempUser, User } from "./types/User";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseconfig";

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

  onAuthStateChanged(auth, (currentUser) => {
    const newUser: User = {
      id: 0,
      img: "",
      name: currentUser?.displayName || "",
    };
    if (currentUser) {
      if (user.name === "") {
        const tempUser: User = {
          id: 0,
          img: "",
          name: currentUser?.displayName || "",
        };
        changeUser(tempUser);
      }
    } else {
      changeUser(newUser);
    }
  });

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
