import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}
export default App;
