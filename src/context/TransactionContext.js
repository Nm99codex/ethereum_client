import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constant";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();

  //   We can fetch contract using these three parameterscontractAddress,contractABI,signer
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({
    provider,
    signer,
    transactionContract,
  });

  return transactionContract;
};

// HACK: MAIN FUNCTION
export const TransactionProvider = ({ children }) => {
  // TODO:USESTATES
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyWord: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [transactions, setTransactions] = useState([]);

  // NOTE:HANDLE CHANGE
  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  // NOTE:GET ALL TRANSACTIONS
  const getAllTransactions = async () => {
    try {
      if (!ethereum) {
        return alert("Please insert metamask !!!!");
      }
      const transactionContract = getEthereumContract();
      const availableTransactions =
        await transactionContract.getAllTransactions();

      const structuredTransactions = availableTransactions.map(
        (transaction) => ({
          addressFrom: transaction.sender,
          addressTo: transaction.receiver,
          amount: parseFloat(transaction.amount) / 10 ** 18,
          keyWord: transaction.keyWord,
          message: transaction.message,
          timestamp: new Date(
            transaction.timestamp.toNumber() * 1000
          ).toLocaleString(),
        })
      );
      setTransactions(structuredTransactions);
      console.log(transactions);
    } catch (error) {
      console.log(error)
    }
  };

  // NOTE: WALLET CONNECTION CHECKING
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) {
        return alert("Please insert metamask !!!!");
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log(accounts);

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllTransactions();
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object available.");
    }
  };

  // NOTE:IF TRANSACTIONS EXISTS
  const checkifTransactionsExists = async () => {
    try {
      const transactionContract = getEthereumContract();
      const transactionsCount = await transactionContract.getTransactionCount();

      window.localStorage.setItem("transactionCount", transactionCount);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object available.");
    }
  };

  // OPTIMAL: SEND ETHERNS
  const sendTransaction = async () => {
    try {
      const { addressTo, amount, keyword, message } = formData;
      const transactionContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208", // 21000 GWEI
            value: parsedAmount._hex,
          },
        ],
      });

      const transactionHash = await transactionContract.addToBlockChain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );

      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();
      console.log(`Success - ${transactionHash.hash}`);
      setIsLoading(false);

      const transactionsCount = await transactionContract.getTransactionCount();

      setTransactionCount(transactionsCount.toNumber());
      window.location.reload();
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object available.");
    }
  };

  // NOTE:CONNECTING WALLET
  const connectWallet = async () => {
    try {
      if (!ethereum) {
        return alert("Please insert metamask !!!!");
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object available.");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfWalletIsConnected();
  }, []);

  return (
    <>
      <TransactionContext.Provider
        value={{
          connectWallet,
          currentAccount,
          formData,
          sendTransaction,
          handleChange,
          transactions,
          isLoading,
        }}
      >
        {children}
      </TransactionContext.Provider>
    </>
  );
};
