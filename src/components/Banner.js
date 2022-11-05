import React, { useContext } from "react";
import { TbPlugConnected } from "react-icons/tb";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { companyCommonStyles } from "../styles/styles";
import { BsEasel } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";
import { SiWebmoney } from "react-icons/si";
import { BsCurrencyDollar } from "react-icons/bs";
import { SiHiveBlockchain } from "react-icons/si";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
import { MagicSpinner } from "react-spinners-kit";

// NOTE:ICONS
const icons = [
  {
    icon: <BsEasel />,
    title: "Reliability",
  },
  { icon: <MdSecurity />, title: "Security" },
  { icon: <FaEthereum />, title: "Ehereum" },
  { icon: <SiEthereum />, title: "Web 3.0" },
  { icon: <BsCurrencyDollar />, title: "Low Fees" },
  { icon: <SiHiveBlockchain />, title: "Blockchain" },
];

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Banner = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
    isLoading
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();
    if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white py-1">
            Welcome to Ethereum
            <br />
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Ethereum is the community-run technology powering the cryptocurrency
            ether (ETH) and thousands of decentralized applications.
          </p>

          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 buttonWelcome p-3 rounded-full"
            >
              <TbPlugConnected className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <section className="text-gray-400 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {icons.map((e) => (
                  <div
                    key={e.title}
                    className="xl:w-1/3 md:w-1/2 p-4 text-center"
                  >
                    <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 text-xl">
                        {e.icon}
                      </div>
                      <h2 className="text-lg text-white font-medium title-font mb-2">
                        {e.title}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 mf:w-96 my-5 backgroundCoins ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <div className="flex flex-col-reverse">
                  <BsInfoCircle fontSize={21} fontWeight="900" color="white" />
                </div>
              </div>
              <div>
                <p className="text-white font-light text-sm">
                {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">Etherns</p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <MagicSpinner size={56} color="#fff" />

            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
