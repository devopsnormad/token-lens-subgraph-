/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { fetchTransfers } from "../../Services/http";
import { useSearchParams } from "react-router-dom";

// Utility function to truncate text
const truncText = (str, length) => {
  if (str.length > length) {
    return str.slice(0, length) + "...";
  }
  return str;
};

const timestampToDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Modal Component for Transaction Details
const DetailsModal = ({ open, data, close }) => {
  return (
    <>
      <div
        className={`flex justify-center items-center z-10 fixed inset-0 ${
          open ? "visible" : "hidden"
        }`}
      >
        <div className="bg-white text-black max-w-[95vw] sm:max-w-[750px] w-full p-5 rounded-lg">
          <h2 className="text-2xl font-bold text-black mb-4">
            Transaction Details
          </h2>
          <ul className="flex flex-col gap-3 text-sm md:text-base">
            <li className="flex gap-1">
              <strong>ID:</strong>
              <span className="break-all">{data?.id}</span>
            </li>
            <li className="flex gap-2">
              <strong>Block Number:</strong>
              <span>{data?.blockNumber}</span>
            </li>
            <li className="flex gap-2">
              <strong>Block Timestamp:</strong>
              <span>{data?.blockTimestamp}</span>
            </li>
            <li className="flex gap-2">
              <strong>From:</strong>
              <span className="break-all">{data?.from}</span>
            </li>
            <li className="flex gap-2">
              <strong>To:</strong>
              <span className="break-all">{data?.to}</span>
            </li>
            <li className="flex gap-2">
              <strong>Transaction Hash:</strong>
              <span className="break-all">{data?.transactionHash}</span>
            </li>
            <li className="flex gap-2">
              <strong>Value:</strong>
              <span>{data?.value}</span>
            </li>
          </ul>
          <div className="flex justify-center items-center my-5">
            <button
              onClick={close}
              className="px-10 py-3 border text-sm hover:bg-red-500 rounded font-bold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const Transaction = () => {
  const [transfers, setTransfers] = useState([]);
  const [open, setOpen] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  console.log(token);
  const apiKeys = {
    usdt: "https://api.studio.thegraph.com/query/87213/thegraph-bounty/version/latest",
    shib: "https://api.studio.thegraph.com/query/87213/thegraph-bounty-shib/version/latest",
    bnb: "https://api.studio.thegraph.com/query/87213/thegraph-bounty-bnb/version/latest",
    trx: "https://api.studio.thegraph.com/query/87213/thegraph-bounty-trx/version/latest",
  };
  useEffect(() => {
    async function getTransfers() {
      setLoading(true);
      const data = await fetchTransfers(apiKeys[token]);
      if (data) {
        setTransfers(data.data.transfers);
        setLoading(false);
      }
    }
    getTransfers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Table Row
  const TableRow = ({ openDetails, data }) => {
    const handleDetails = () => {
      setTransactionDetails(data);
      openDetails();
    };

    return (
      <div className="grid w-[1200px] p-2 xl:w-full grid-cols-7  border-t last:border-b">
        <div className="flex items-center">
          <span
            onClick={handleDetails}
            className="p-2 bg-primary-300 rounded cursor-pointer mr-2"
          >
            <IoEyeOutline color="#fff" />
          </span>
          {truncText(data.id, 10)}
        </div>
        <div className="flex items-center justify-center">
          <a
            title="View on Etherscan"
            target="_blank"
            href={`https://etherscan.io/block/${data.blockNumber}`}
            className="text-blue-500"
          >
            {data.blockNumber}
          </a>
        </div>
        <div className="flex items-center justify-center">
          {timestampToDate(data.blockTimestamp)}
        </div>
        <div className=" items-center justify-center">
          <a
            title="View on Etherscan"
            target="_blank"
            href={`https://etherscan.io/address/${data.from}`}
            className="text-blue-500"
          >
            {truncText(data.from, 15)}
          </a>
        </div>
        <div className=" items-center justify-center">
          <a
            title="View on Etherscan"
            target="_blank"
            href={`https://etherscan.io/address/${data.to}`}
            className="text-blue-500"
          >
            {truncText(data.to, 15)}
          </a>
        </div>
        <div className="items-center justify-center">
          <a
            title="View on Etherscan"
            target="_blank"
            href={`https://etherscan.io/address/${data.transactionHash}`}
            className="text-blue-500"
          >
            {truncText(data.transactionHash, 15)}
          </a>
        </div>
        <div className="flex items-center justify-center">
          {data.value / 10000}
        </div>
      </div>
    );
  };

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 bg-black opacity-75`}
        ></div>
      )}
      <DetailsModal
        data={transactionDetails}
        open={open}
        close={() => setOpen(false)}
      />
      <div>
        {/* Navbar */}
        <div
          className={` pt-10 md:pt-16 pb-6 px-5 md:px-10 ${
            loading ? "h-[100vh]" : "h-fit"
          }`}
        >
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold my-3">
            Transactions for <span className="uppercase">{token}</span>
          </h2>
          <div className=" overflow-x-scroll ">
            <div className="grid w-[1200px]  xl:w-full grid-cols-7 text-center font-semibold">
              <div className="border py-2">ID</div>
              <div className="border py-2">Block Number</div>
              <div className="border py-2">Block Timestamp</div>
              <div className="border py-2">From</div>
              <div className="border py-2">To</div>
              <div className="border py-2">Transaction Hash</div>
              <div className="border py-2">Value</div>
            </div>
            {transfers.length > 0
              ? transfers.map((transaction) => (
                  <TableRow
                    key={transaction.id}
                    openDetails={() => setOpen(true)}
                    data={transaction}
                  />
                ))
              : "Loading transactions..."}
          </div>
        </div>
      </div>
    </>
  );
};
