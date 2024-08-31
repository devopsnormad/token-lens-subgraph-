
import { fetchTransfers, fetchTotalTransfers } from "../../../Services/http";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
import { BarChart } from "./Charts";  
import usdt from "../../assets/images/usdterc20.svg";
import bnb from "../../assets/images/bnbbsc.svg";
import trx from "../../assets/images/tron.svg";
import shib from "../../assets/images/shib.svg";
import { Link } from "react-router-dom";

Chart.register(CategoryScale);


const Hero = () => {

  const [usdttransfers, setUSDTTransfers] =  useState(0);
  const [trxtransfers, setTRXTransfers] =  useState(0);
  const [bnbtransfers, setBNBTransfers] =  useState(0);
  const [shibtransfers, setSHIBTransfers] =  useState(0);
  const [chartData, setChartData] = useState({
    labels: ["USDT", "BNB", "TRX", "SHIB"],
    datasets: [
      {
        label: "Transactions Today",
        data: [0,0,0,0],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      }
    ]
  });

  useEffect(() => {
    async function getTotalTransfers() {
      // replace string with apiKey
      const usdtData = await fetchTotalTransfers("usdt");
      const trxData = await fetchTotalTransfers("trx");
      const bnbData = await fetchTotalTransfers("bnb");
      const shibData = await fetchTotalTransfers("shib");
      //   const data = await fetchTransfers(`${apiKey}`); // uncomment once router is fixed
      if (usdtData && trxData && bnbData && shibData) {
        // console.log(data)
        let usdtTotal = usdtData.data.transfers
        let trxTotal = trxData.data.transfers
        let bnbTotal = bnbData.data.transfers
        let shibTotal = shibData.data.transfers
        setUSDTTransfers(usdtTotal.length);
        setTRXTransfers(trxTotal.length);
        setBNBTransfers(bnbTotal.length);
        setSHIBTransfers(shibTotal.length);
console.log(usdtTotal.length,trxTotal.length,bnbTotal.length,shibTotal.length)
        setChartData({
          labels: ["USDT", "BNB", "TRX", "SHIB"],
          datasets: [
            {
              label: "Transactions Today",
              data: [usdtTotal.length, bnbTotal.length, trxTotal.length, shibTotal.length],
              backgroundColor: "rgba(75, 192, 192, 0.6)",
            }
          ]
        });
      }
    }

    getTotalTransfers();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary-100">Total Transfers</h1>
      <div className="grid grid-cols-12 border  justify-between">
      <div className="grid grid-cols-2 gap-5 border justify-between">
      
      <Link to="/usdt" className=" border-2 shadow-2xl hover:scale-110 transform transition-transform duration-[1s] ease-in-out w-80 tablet:w-full cursor-pointer">
        <div className="flex flex-col justify-center items-center py-5 space-y-6" >
          <h2 className="text-xl font-semibold text-primary-200">USDT</h2>
          <img src={usdt} alt="bnb" className="object-contain w-24" />
          <h2 className="text-xl font-semibold text-primary-300" >{usdttransfers==1000?`${usdttransfers}+`:`${usdttransfers}`}</h2>
        </div>
      </Link>
      <Link to="/bnb" className="flex flex-col justify-center items-center border-2  p-4 shadow-2xl hover:scale-110 transform transition-transform duration-[1s] ease-in-out w-80 tablet:w-full cursor-pointer">
        <div className="flex flex-col justify-center items-center space-y-6">
         <h2 className="text-xl font-semibold text-primary-200">BNB</h2>
          <img src={bnb} alt="bnb" className="object-contain w-16" />
          <h2 className="text-xl font-semibold text-primary-300">{bnbtransfers==1000?`${bnbtransfers}+`:`${bnbtransfers}`}</h2>
        </div>
      </Link>
      <Link to="/trx" className="flex flex-col justify-center items-center border-2p-4 shadow-2xl hover:scale-110 transform transition-transform duration-[1s] ease-in-out w-80 tablet:w-full cursor-pointer">
        <div className="flex flex-col justify-center items-center space-y-6">
        <h2 className="text-xl font-semibold text-primary-200">TRX</h2>
          <img src={trx} alt="bnb" className="object-contain w-16" />
          <h2 className="text-xl font-semibold text-primary-300">{trxtransfers==1000?`${trxtransfers}+`:`${trxtransfers}`}</h2>
        </div>
      </Link>
      <Link to="/shib" className="flex flex-col justify-center items-center border-2p-4 shadow-2xl hover:scale-110 transform transition-transform duration-[1s] ease-in-out w-80 tablet:w-full cursor-pointer">
        <div className="flex flex-col justify-center items-center space-y-6">
        <h2 className="text-xl font-semibold text-primary-200">SHIB</h2>
          <img src={shib} alt="bnb" className="object-contain w-16" />
          <h2 className="text-xl font-semibold text-primary-300">{shibtransfers==1000?`${shibtransfers}+`:`${shibtransfers}`}</h2> 
        </div>
      </Link>
    </div>
    <div className=" border">
    <BarChart chartData={chartData} />
    </div>
      </div>
    </div>
  );
};

export default Hero;
