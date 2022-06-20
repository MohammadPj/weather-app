import Home from "./components/home";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import {QueryClient, QueryClientProvider} from "react-query";
import * as PropTypes from "prop-types";

QueryClientProvider.propTypes = {
  client: PropTypes.any,
  children: PropTypes.node
};

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
    <div className={"flex flex-col w-full bg-slate-50 min-h-screen"}>
      <Header/>
      <div className="grow flex flex-col items-center mt-10">
        <Home/>
      </div>
      <Footer/>
    </div>
    </QueryClientProvider>
  );
}

export default App;
