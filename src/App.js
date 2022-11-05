import {
  Navbar,
  Banner,
  Transactions,
  Services,
  Footer,
} from "./components/index";

import {TransactionProvider} from "./context/TransactionContext"

function App() {
  // console.log("App.js");
  return (
    <>
      <TransactionProvider>
        <div className="min-h-screen">
          <div className=" bg-[#141b2f]">
            <Navbar />
            <Banner />
          </div>
          <Services />
          <Transactions />
          <Footer />
        </div>
      </TransactionProvider>
    </>
  );
}

export default App;
