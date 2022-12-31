import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import React, { useState } from "react";

const queryClient = new QueryClient();
const UserContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <UserContext.Provider value={user}>
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
