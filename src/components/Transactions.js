import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import dummyData from "../utils/dummyData";;
import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  amount,
}) => {
  return (
    <div class="mb-8 w-full blue-glassmorphism divide-y-2 px-5 divide-gray-800">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-extrabold text-2xl title-font text-white">
            {amount} ETH
          </span>
          <span class="mt-1 text-gray-400 text-sm">{timestamp}</span>
        </div>
        <div class="md:flex-grow">
          <a
            href={`https://goerli.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noreferrer"
          >
            <h3 class="text-2xl font-medium text-[#bcf2e966] title-font mb-2">
              From : {shortenAddress(addressFrom)}
            </h3>
          </a>

          <a
            href={`https://goerli.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noreferrer"
          >
            <h3 class="text-2xl font-medium text-[#f4bca2] title-font mb-2">
              To : {shortenAddress(addressTo)}
            </h3>
          </a>
          <p class="leading-relaxed">{message}</p>
        </div>
      </div>
    </div>
  );
};

function Transactions() {
  const { currentAccount,transactions } = useContext(TransactionContext);

  return (
    <div className="flex w-full  justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <section class="text-white body-font overflow-hidden">
          <div class=" flex flex-col-reverse px-5 py-4 mx-auto">
            {transactions.map((transaction, i) => (
              <TransactionsCard key={i} {...transaction} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Transactions;
