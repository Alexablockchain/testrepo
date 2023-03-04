import React, { useState, useEffect }  from "react";
import logo from './logo.svg';
import copy1 from './copy1.svg';
import './App.css';
import Web3 from 'web3';
import Web3Modal from "web3modal";
// import { MdOutlineFileCopy } from "react-icons/md";
import copy from "copy-to-clipboard";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
function App() {

  const[wallet , setWallet] = useState("Connect Wallet");
  const [referral, setReferral] = useState("0x0000000000000000000000000000000000000000");
  const [myreferral, setmyReferral] = useState("Hello");
  const[totalStaked , setTotalStaked] = useState(0);
  const[totalRefBonus , setTotalRefBonus] = useState(0);
  const[totalStaker , setTotalStaker] = useState(0);
  const [inputValue, setInputValue] = React.useState("");
  const[totalStakedPlan1 , setTotalStakedPlan1] = useState(0);
  const[totalStakedPlan2 , setTotalStakedPlan2] = useState(0);
  const[totalStakedPlan3 , setTotalStakedPlan3] = useState(0);
  const[totalStakedPlan4 , setTotalStakedPlan4] = useState(0);
  const[totalStakedPlan5 , setTotalStakedPlan5] = useState(0);
  const[totalStakedPlan6 , setTotalStakedPlan6] = useState(0);
  const[mytotalStakedPlan1 , setmyTotalStakedPlan1] = useState(0);
  const[mytotalStakedPlan2 , setmyTotalStakedPlan2] = useState(0);
  const[mytotalStakedPlan3 , setmyTotalStakedPlan3] = useState(0);
  const[mytotalStakedPlan4 , setmyTotalStakedPlan4] = useState(0);
  const[mytotalStakedPlan5 , setmyTotalStakedPlan5] = useState(0);
  const[mytotalStakedPlan6 , setmyTotalStakedPlan6] = useState(0);
  const[lvl1 , setLvl1] = useState(0);
  const[lvl2 , setLvl2] = useState(0);
  const[lvl3 , setLvl3] = useState(0);
  const[alexa , setAlexa] = useState(0);

var decimal = 100000000;

  useEffect(()=>{

    var referrer = window.location.href.toString(); 
    console.log(referrer);
    if(referrer.length > 60){
      
     localStorage.setItem("referalAlexa", referrer.substr(-42, 43));
     setReferral(localStorage.getItem("referalAlexa"));
    
     console.log("hoa");

    }
      connectWallet();
      Info();

  }, [])


  function handleInputChange(event) {
      setInputValue(event.target.value);
      console.log(event.target.value );
      
  }

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "BKsAeeC-F7GB6KBzySe_p5aOCRQ1ZH9l", // required
      },
    },
    coinbasewallet: {
      package: CoinbaseWalletSDK, // Required
      options: {
        appName: "web3modal", // Required
        infuraId: "BKsAeeC-F7GB6KBzySe_p5aOCRQ1ZH9l", // Required
        rpc: "",
        chainId: 250, 
        darkMode: false, 
      },
    },
    binancechainwallet: {
      package: true,
    },
  };
  
  
  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions, // required
  });
  
  const connectWallet = async () => {
    // if (window.ethereum) {
      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
      await window.ethereum.send("eth_requestAccounts");
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      setWallet(account.slice(0,4) + "..." + account.slice(-4));
      setmyReferral("https://alexastaking.netlify.app?ref=" + account); 
  
      console.log(account);
      

  }


  const handleClick = () => {
    copy(myreferral, {
      debug: true,
      message: "Press #{key} to copy",
    });
    // toast.success("Referral Link Copied!");
    alert("Referral copied ");
  };


  const max = () => {

    setInputValue(alexa);
    console.log(alexa);
  };

  
  const Info = async () => {
    // if (window.ethereum) {
      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
      await window.ethereum.send("eth_requestAccounts");
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];


      var abi = [{"inputs":[{"internalType":"contract IERC20","name":"_TokenAdress","type":"address"},{"internalType":"address","name":"_lPAdress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBack","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"Alexa","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INVEST_MAX_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan1APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan2APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan3APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan4APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan5APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan6APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"depositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"},{"internalType":"address","name":"sender","type":"address"}],"name":"getUserAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasStaked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lPAdress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lPFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"levl1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"levl2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"levl3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"refToRef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan1","type":"uint256"},{"internalType":"uint256","name":"_plan2","type":"uint256"},{"internalType":"uint256","name":"_plan3","type":"uint256"},{"internalType":"uint256","name":"_plan4","type":"uint256"},{"internalType":"uint256","name":"_plan5","type":"uint256"},{"internalType":"uint256","name":"_plan6","type":"uint256"}],"name":"setPlans","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_APY1","type":"uint256"},{"internalType":"uint256","name":"_APY2","type":"uint256"},{"internalType":"uint256","name":"_APY3","type":"uint256"},{"internalType":"uint256","name":"_APY4","type":"uint256"},{"internalType":"uint256","name":"_APY5","type":"uint256"},{"internalType":"uint256","name":"_APY6","type":"uint256"}],"name":"setPlansApy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_plan","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"stakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxUnstake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRefBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"}],"name":"unstakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"}],"name":"unstakeTokensbeforetime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    var contractaddress = '0x2198571f4c9e950549ac8ad785b90035f6211684';
  
     
     var abi_token = [{"inputs":[{"internalType":"address","name":"_marketWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"blacklistUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buytax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_buy","type":"uint256"},{"internalType":"uint256","name":"_sell","type":"uint256"}],"name":"changeBuyNSellTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_add","type":"address"}],"name":"changeMarketWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pair","type":"address"}],"name":"createPairAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"isBlackListed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"iswhiteListed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"selltax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"whitelistUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"}];
     var contractaddress_token = '0xc1578d26ff83b17db2dfcc43c8be07fd3fdbfa2f';
  
      const instance = new web3.eth.Contract(abi, contractaddress);
      const instance_token = new web3.eth.Contract(abi_token, contractaddress_token);
      

      var  totalStakeplan1 =  await instance.methods.getUserAvailable(3888000 , account).call();
      setTotalStakedPlan1((totalStakeplan1 / decimal).toFixed(4));
      var  totalStakeplan2 =  await instance.methods.getUserAvailable(7776000 ,account).call();
      setTotalStakedPlan2((totalStakeplan2 / decimal).toFixed(4));
      var  totalStakeplan3 =  await instance.methods.getUserAvailable(15552000 , account).call();
      setTotalStakedPlan3((totalStakeplan3 / decimal).toFixed(4));
      var  totalStakeplan4 =  await instance.methods.getUserAvailable(31536000 , account).call();
      setTotalStakedPlan4((totalStakeplan4 / decimal).toFixed(4));
      var  totalStakeplan5 =  await instance.methods.getUserAvailable(43200000 , account).call();
      setTotalStakedPlan5((totalStakeplan5 / decimal).toFixed(4));
      var  totalStakeplan6 =  await instance.methods.getUserAvailable(63072000 , account).call();
      setTotalStakedPlan6((totalStakeplan6 / decimal).toFixed(4));
 
      var  lvl1 =  await instance.methods.levl1( account).call();
      setLvl1(lvl1 / decimal);
      var  lvl2 =  await instance.methods.levl2( account).call();
      setLvl2(lvl2 / decimal);
      var  lvl3 =  await instance.methods.levl3( account).call();
      setLvl3(lvl3 / decimal);
   



      var  totalStakers =  await instance.methods.totalStakers().call();
      setTotalStaker(totalStakers);
      var  totalAlexaStake =  await instance.methods.totalDeposits().call();
      setTotalStaked(totalAlexaStake / decimal);
      var  totalRefBonus =  await instance.methods.totalRefBonus().call();
      setTotalRefBonus(totalRefBonus / decimal);


      console.log(totalStakeplan1 , totalStakeplan2 , totalStakeplan3 , totalStakeplan4 , totalStakeplan5 , totalStakeplan6 , totalStakers);


      var  totalStakebalplan1 =  await instance.methods.stakingBalancePlan1(account).call();
      setmyTotalStakedPlan1(totalStakebalplan1 / decimal);
      var  totalStakebalplan2 =  await instance.methods.stakingBalancePlan2(account).call();
      setmyTotalStakedPlan2(totalStakebalplan2 / decimal);
      var  totalStakebalplan3 =  await instance.methods.stakingBalancePlan3(account).call();
      setmyTotalStakedPlan3(totalStakebalplan3 / decimal);
      var  totalStakebalplan4 =  await instance.methods.stakingBalancePlan4(account).call();
      setmyTotalStakedPlan4(totalStakebalplan4 / decimal);
      var  totalStakebalplan5 =  await instance.methods.stakingBalancePlan5(account).call();
      setmyTotalStakedPlan5(totalStakebalplan5 / decimal);
      var  totalStakebalplan6 =  await instance.methods.stakingBalancePlan6(account).call();
      setmyTotalStakedPlan6(totalStakebalplan6 / decimal);
      console.log(totalStakebalplan1 , totalStakebalplan2 , totalStakebalplan3 , totalStakebalplan4 , totalStakebalplan5 , totalStakebalplan6);


      var  tokenBal =  await instance_token.methods.balanceOf(account).call();
      console.log(tokenBal);
      setAlexa(tokenBal / decimal);





      
  };




  const stake = async (valu) => {

    if(inputValue< 1000 || inputValue > 10000){
      alert("please enter correct value . Minimum value is 1000 and  Maximum value is 10000.")
    } else{

    
    // if (window.ethereum) {
      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
      await window.ethereum.send("eth_requestAccounts");
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];


      var abi = [{"inputs":[{"internalType":"contract IERC20","name":"_TokenAdress","type":"address"},{"internalType":"address","name":"_lPAdress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBack","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"Alexa","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INVEST_MAX_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan1APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan2APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan3APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan4APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan5APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan6APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"depositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"},{"internalType":"address","name":"sender","type":"address"}],"name":"getUserAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasStaked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lPAdress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lPFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"levl1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"levl2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"levl3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"refToRef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan1","type":"uint256"},{"internalType":"uint256","name":"_plan2","type":"uint256"},{"internalType":"uint256","name":"_plan3","type":"uint256"},{"internalType":"uint256","name":"_plan4","type":"uint256"},{"internalType":"uint256","name":"_plan5","type":"uint256"},{"internalType":"uint256","name":"_plan6","type":"uint256"}],"name":"setPlans","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_APY1","type":"uint256"},{"internalType":"uint256","name":"_APY2","type":"uint256"},{"internalType":"uint256","name":"_APY3","type":"uint256"},{"internalType":"uint256","name":"_APY4","type":"uint256"},{"internalType":"uint256","name":"_APY5","type":"uint256"},{"internalType":"uint256","name":"_APY6","type":"uint256"}],"name":"setPlansApy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_plan","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"stakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxUnstake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRefBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"}],"name":"unstakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"}],"name":"unstakeTokensbeforetime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    var contractaddress = '0x2198571f4c9e950549ac8ad785b90035f6211684';
  
     
     var abi_token = [{"inputs":[{"internalType":"address","name":"_marketWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"blacklistUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buytax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_buy","type":"uint256"},{"internalType":"uint256","name":"_sell","type":"uint256"}],"name":"changeBuyNSellTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_add","type":"address"}],"name":"changeMarketWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pair","type":"address"}],"name":"createPairAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"isBlackListed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"iswhiteListed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"selltax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"whitelistUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"}];
     var contractaddress_token = '0xc1578d26ff83b17db2dfcc43c8be07fd3fdbfa2f';
  
      const instance = new web3.eth.Contract(abi, contractaddress);
      const instance_token = new web3.eth.Contract(abi_token, contractaddress_token);
       var valueforstake = inputValue * decimal ;
       console.log("ye hai reffeal" , referral);
      await instance_token.methods.approve( contractaddress ,valueforstake ).send({
        from : account
      }).then( async()=>{
       
        await instance.methods.stakeTokens(valueforstake , valu , referral ).send({
          from : account
        });


      })

    }
    }


    const unstake = async (valu) => {
      // if (window.ethereum) {
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);
        await window.ethereum.send("eth_requestAccounts");
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
  
  
        var abi = [{"inputs":[{"internalType":"contract IERC20","name":"_TokenAdress","type":"address"},{"internalType":"address","name":"_lPAdress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBack","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"Alexa","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INVEST_MAX_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan1APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan2APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan3APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan4APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan5APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan6APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"depositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"},{"internalType":"address","name":"sender","type":"address"}],"name":"getUserAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasStaked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lPAdress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lPFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"levl1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"levl2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"levl3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"refToRef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan1","type":"uint256"},{"internalType":"uint256","name":"_plan2","type":"uint256"},{"internalType":"uint256","name":"_plan3","type":"uint256"},{"internalType":"uint256","name":"_plan4","type":"uint256"},{"internalType":"uint256","name":"_plan5","type":"uint256"},{"internalType":"uint256","name":"_plan6","type":"uint256"}],"name":"setPlans","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_APY1","type":"uint256"},{"internalType":"uint256","name":"_APY2","type":"uint256"},{"internalType":"uint256","name":"_APY3","type":"uint256"},{"internalType":"uint256","name":"_APY4","type":"uint256"},{"internalType":"uint256","name":"_APY5","type":"uint256"},{"internalType":"uint256","name":"_APY6","type":"uint256"}],"name":"setPlansApy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_plan","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"stakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxUnstake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRefBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"}],"name":"unstakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"}],"name":"unstakeTokensbeforetime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
      var contractaddress = '0x2198571f4c9e950549ac8ad785b90035f6211684';
    
       
       var abi_token = [{"inputs":[{"internalType":"address","name":"_marketWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"blacklistUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buytax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_buy","type":"uint256"},{"internalType":"uint256","name":"_sell","type":"uint256"}],"name":"changeBuyNSellTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_add","type":"address"}],"name":"changeMarketWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pair","type":"address"}],"name":"createPairAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"isBlackListed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"iswhiteListed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"selltax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"whitelistUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"}];
       var contractaddress_token = '0xc1578d26ff83b17db2dfcc43c8be07fd3fdbfa2f';
    
        const instance = new web3.eth.Contract(abi, contractaddress);
        const instance_token = new web3.eth.Contract(abi_token, contractaddress_token);
        
        
          await instance.methods.unstakeTokens(valu).send({
            from : account
          });
      }





   






      const unstakebefore = async (valu) => {
        // if (window.ethereum) {
          const provider = await web3Modal.connect();
          const web3 = new Web3(provider);
          await window.ethereum.send("eth_requestAccounts");
          const accounts = await web3.eth.getAccounts();
          const account = accounts[0];
    
    
          var abi = [{"inputs":[{"internalType":"contract IERC20","name":"_TokenAdress","type":"address"},{"internalType":"address","name":"_lPAdress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBack","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"Alexa","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INVEST_MAX_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan1APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan2APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan3APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan4APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan5APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan6APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"depositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"},{"internalType":"address","name":"sender","type":"address"}],"name":"getUserAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasStaked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lPAdress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lPFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"levl1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"levl2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"levl3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"refToRef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan1","type":"uint256"},{"internalType":"uint256","name":"_plan2","type":"uint256"},{"internalType":"uint256","name":"_plan3","type":"uint256"},{"internalType":"uint256","name":"_plan4","type":"uint256"},{"internalType":"uint256","name":"_plan5","type":"uint256"},{"internalType":"uint256","name":"_plan6","type":"uint256"}],"name":"setPlans","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_APY1","type":"uint256"},{"internalType":"uint256","name":"_APY2","type":"uint256"},{"internalType":"uint256","name":"_APY3","type":"uint256"},{"internalType":"uint256","name":"_APY4","type":"uint256"},{"internalType":"uint256","name":"_APY5","type":"uint256"},{"internalType":"uint256","name":"_APY6","type":"uint256"}],"name":"setPlansApy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_plan","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"stakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxUnstake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRefBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"}],"name":"unstakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"}],"name":"unstakeTokensbeforetime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        var contractaddress = '0x2198571f4c9e950549ac8ad785b90035f6211684';
      
         
         var abi_token = [{"inputs":[{"internalType":"address","name":"_marketWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"blacklistUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buytax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_buy","type":"uint256"},{"internalType":"uint256","name":"_sell","type":"uint256"}],"name":"changeBuyNSellTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_add","type":"address"}],"name":"changeMarketWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pair","type":"address"}],"name":"createPairAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"isBlackListed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"iswhiteListed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"selltax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"whitelistUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"}];
         var contractaddress_token = '0xc1578d26ff83b17db2dfcc43c8be07fd3fdbfa2f';
      
          const instance = new web3.eth.Contract(abi, contractaddress);
          const instance_token = new web3.eth.Contract(abi_token, contractaddress_token);
          
          
            await instance.methods.unstakeTokensbeforetime(valu).send({
              from : account
            });
        }



      const withdraw = async (valu) => {
        // if (window.ethereum) {

          const provider = await web3Modal.connect();
          const web3 = new Web3(provider);
          await window.ethereum.send("eth_requestAccounts");
          const accounts = await web3.eth.getAccounts();
          const account = accounts[0];
    
    
 var abi = [{"inputs":[{"internalType":"contract IERC20","name":"_TokenAdress","type":"address"},{"internalType":"address","name":"_lPAdress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBack","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"Alexa","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INVEST_MAX_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan1APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan2APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan3APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan4APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan5APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Plan6APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"depositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"},{"internalType":"address","name":"sender","type":"address"}],"name":"getUserAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasStaked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lPAdress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lPFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"levl1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"levl2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"levl3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"refToRef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan1","type":"uint256"},{"internalType":"uint256","name":"_plan2","type":"uint256"},{"internalType":"uint256","name":"_plan3","type":"uint256"},{"internalType":"uint256","name":"_plan4","type":"uint256"},{"internalType":"uint256","name":"_plan5","type":"uint256"},{"internalType":"uint256","name":"_plan6","type":"uint256"}],"name":"setPlans","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_APY1","type":"uint256"},{"internalType":"uint256","name":"_APY2","type":"uint256"},{"internalType":"uint256","name":"_APY3","type":"uint256"},{"internalType":"uint256","name":"_APY4","type":"uint256"},{"internalType":"uint256","name":"_APY5","type":"uint256"},{"internalType":"uint256","name":"_APY6","type":"uint256"}],"name":"setPlansApy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_plan","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"stakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalancePlan6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingStartTime6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxUnstake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRefBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan5","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedOfPlan6","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"}],"name":"unstakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"}],"name":"unstakeTokensbeforetime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_plan","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        var contractaddress = '0x2198571f4c9e950549ac8ad785b90035f6211684';
      
  
      
          const instance = new web3.eth.Contract(abi, contractaddress);

          
          
        await instance.methods.withdraw(valu).send({
              from : account
            });
        }

   
  return (
    <div className="App">






<div className="main">
  {/* ***** Header Start ***** */}
  <header id="header">
    {/* Navbar */}
    <nav data-aos="zoom-out" data-aos-delay={800} className="navbar gameon-navbar navbar-expand">
      <div className="container header">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src="/img/logo/logo.png" alt="Brand Logo" />
        </a>
        <div className="ml-auto" />
        {/* Navbar Nav */}
        <ul className="navbar-nav items mx-auto">
          <li className="nav-item active">
            <a  href="/" className="nav-link active">Home</a>
          </li>
        </ul>
        <ul className="navbar-nav items mx-auto">
          <li className="nav-item active">
            <a href="#stake" className="nav-link active">Stake</a>
          </li>  
        </ul>
        <ul className="navbar-nav items mx-auto">
          <li className="nav-item active">
            <a href="#referral" className="nav-link active">Referral</a>
          </li>  
        </ul>
        <ul className="navbar-nav items mx-auto">
          <li className="nav-item active">
            <a href="#how_to" className="nav-link active">How to</a>
          </li>  
        </ul>
        {/* Navbar Icons */}
        {/* Navbar Toggler */}
        <ul className="navbar-nav toggle">
          <li className="nav-item">
            <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
              <i className="icon-menu m-0" />
            </a>
          </li>
        </ul>
        {/* Navbar Action Button */}
        <ul className="navbar-nav action">
          <li className="nav-item ml-2">
            <a onClick={connectWallet} href="#" className="btn ml-lg-auto btn-bordered-white"><i className="icon-wallet mr-md-2" />{wallet}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  {/* ***** Header End ***** */}
  {/* ***** Hero Area Start ***** */}
  <section className="hero-section">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-md-6 col-lg-9 text-center">
          {/* Hero Content */}
          <div className="hero-content">
            <div className="intro text-center mb-5">
              <h1 style={{color: 'blue'}}>Alexa Staking</h1>
              <h3 className="mt-4">Rule The World</h3>
            </div>
            {/* Buttons */}
            <div className="button-group">
              <a className="btn btn-bordered active smooth-anchor" href="https://www.pinksale.finance/launchpad/0x2198571f4c9e950549ac8ad785b90035f6211684606CAd36C28E7b4578DB3E3099ecdd9F75206945?chain=BSC"><i className="icon-rocket mr-2" />Buy Token</a>
              <a className="btn btn-bordered-white" href="https://bscscan.com/address/0x2198571f4c9e950549ac8ad785b90035f621168476c82Eef290f8de6E230cbaddf508f16c202b52B"><i className="icon-note mr-2" />Contract</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ***** Hero Area End ***** */}
  {/* ***** Staking Area Start ***** */}
  <section className="staking-area" id="stake">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-7">
          <div className="card no-hover staking-card single-staking">
            <h3 className="m-0">Stake Alexa Token &amp; get upto 150% APY</h3>
            <ul className="nav nav-tabs staking-tabs border-0 my-3 my-md-4" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="tab-link active" id="tab-one-tab" data-toggle="tab" href="#tab-one" role="tab" aria-controls="tab-one" aria-selected="true">45 Days</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="tab-link" id="tab-two-tab" data-toggle="tab" href="#tab-two" role="tab" aria-controls="tab-two" aria-selected="false">90 Days</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="tab-link" id="tab-three-tab" data-toggle="tab" href="#tab-three" role="tab" aria-controls="tab-three" aria-selected="false">180 Days</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="tab-link" id="tab-four-tab" data-toggle="tab" href="#tab-four" role="tab" aria-controls="tab-four" aria-selected="false">365 Days</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="tab-link" id="tab-five-tab" data-toggle="tab" href="#tab-five" role="tab" aria-controls="tab-five" aria-selected="false">500 Days</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="tab-link" id="tab-six-tab" data-toggle="tab" href="#tab-six" role="tab" aria-controls="tab-six" aria-selected="false">730 Days</a>
              </li>
            </ul>
            <div className="tab-content mt-md-3" id="myTabContent">
              <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one-tab">
                <div className="staking-tab-content">
                  {/* Info Box */}
                  <div className="info-box d-flex justify-content-between">
                    <div className="info-left">
                      <ul className="list-unstyled">
                        <li><strong>Your Staked Alexa:</strong> {mytotalStakedPlan1} Alexa</li>
                        <li><strong>My  Reward:</strong> {totalStakedPlan1} Alexa</li>
                        <li><strong>Alexa My Balance:</strong> {alexa} Alexa</li>
                      </ul>
                    </div>
                    <div className="info-right d-flex flex-column">
                      <span>24%</span>
                      <span>APY*</span>
                    </div>
                  </div>


                  <div className="input-box my-4">
              <div className="input-area d-flex flex-column flex-md-row mb-3">
                <div className="input-text">
                  <input value={ inputValue }  onChange={ handleInputChange } type="text" placeholder={10000} />
                  <a style={{cursor :"pointer"}} onClick={()=>max()} href="#">Maxx</a>
                </div>
                <a onClick={() => stake(3888000)} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Stake</a>
              </div>
              <div className="input-area d-flex flex-column flex-md-row">
               
                <a onClick={() => unstake(3888000)} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Unstake</a>
                <a onClick={() => totalStakedPlan1 > 1 ?  withdraw(3888000)  : alert("you can't able to withdraw" )} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Withdraw</a>
                <a onClick={()=> unstakebefore(3888000)} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Unstake Early</a>
              </div>
            </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-two" role="tabpanel" aria-labelledby="tab-two-tab">
                <div className="staking-tab-content">
                  {/* Info Box */}
                  <div className="info-box d-flex justify-content-between">
                    <div className="info-left">
                      <ul className="list-unstyled">
                      <li><strong>Your Staked Alexa:</strong> {mytotalStakedPlan2} Alexa</li>
                        <li><strong>My  Reward:</strong> {totalStakedPlan2} Alexa</li>
                        <li><strong>Alexa My Balance:</strong> {alexa} Alexa</li>
                      </ul>
                    </div>
                    <div className="info-right d-flex flex-column">
                      <span>48%</span>
                      <span>APY*</span>
                    </div>
                  </div>
                  <div className="input-box my-4">
              <div className="input-area d-flex flex-column flex-md-row mb-3">
                <div className="input-text">
                <input value={ inputValue }  onChange={ handleInputChange } type="text" placeholder={10000} />
                  <a onClick={max} href="#">Max</a>
                </div>
                <a onClick={() => stake(7776000)} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Stake</a>
              </div>
              <div className="input-area d-flex flex-column flex-md-row">
                {/* <div className="input-text">
                  <input type="text" placeholder={10000} />
                  <a href="#">Max</a>
                </div> */}
                <a onClick={() => unstake(7776000)} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Unstake</a>
                <a onClick={() => totalStakedPlan2 > 1 ?  withdraw(7776000)  : alert("you can't able to withdraw" )} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Withdraw</a>
                <a onClick={() => unstakebefore(7776000)} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Unstake Early</a>
              </div>
            </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-three" role="tabpanel" aria-labelledby="tab-three-tab">
                <div className="staking-tab-content">
                  {/* Info Box */}
                  <div className="info-box d-flex justify-content-between">
                    <div className="info-left">
                      <ul className="list-unstyled">
                      <li><strong>Your Staked Alexa:</strong> {mytotalStakedPlan3} Alexa</li>
                        <li><strong>My  Reward:</strong> {totalStakedPlan3} Alexa</li>
                        <li><strong>Alexa My Balance:</strong> {alexa} Alexa</li>
                      </ul>
                    </div>
                    <div className="info-right d-flex flex-column">
                      <span>72%</span>
                      <span>APY*</span>
                    </div>
                  </div>
                  <div className="input-box my-4">
              <div className="input-area d-flex flex-column flex-md-row mb-3">
                <div className="input-text">
                <input value={ inputValue }  onChange={ handleInputChange } type="text" placeholder={10000} />
                  <a onClick={max} href="#">Max</a>
                </div>
                <a onClick={() => stake(15552000)} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Stake</a>
              </div>
              <div className="input-area d-flex flex-column flex-md-row">
                
                <a onClick={() => unstake(15552000)} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Unstake</a>
                <a onClick={() => totalStakedPlan3 > 1 ? withdraw(15552000) : alert("you can't able to withdraw")} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Withdraw</a>
                <a onClick={() => unstakebefore(15552000)} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Unstake Early</a>
              </div>
            </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-four" role="tabpanel" aria-labelledby="tab-four-tab">
                <div className="staking-tab-content">
                  {/* Info Box */}
                  <div className="info-box d-flex justify-content-between">
                    <div className="info-left">
                      <ul className="list-unstyled">
                      <li><strong>Your Staked Alexa:</strong> {mytotalStakedPlan4} Alexa</li>
                        <li><strong>My  Reward:</strong> {totalStakedPlan4} Alexa</li>
                        <li><strong>Alexa My Balance:</strong> {alexa} Alexa</li>
                      </ul>
                    </div>
                    <div className="info-right d-flex flex-column">
                      <span>120%</span>
                      <span>APY*</span>
                    </div>
                  </div>
                  <div className="input-box my-4">
              <div className="input-area d-flex flex-column flex-md-row mb-3">
                <div className="input-text">
                <input value={ inputValue }  onChange={ handleInputChange } type="text" placeholder={10000} />
                  <a onClick={max} href="#">Max</a>
                </div>
                <a onClick={() => stake(31536000)} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Stake</a>
              </div>
              <div className="input-area d-flex flex-column flex-md-row">
                
                <a onClick={() => unstake(31536000)} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Unstake</a>
                <a onClick={() => totalStakedPlan4 > 1 ? withdraw(31536000) : alert("you can't able to withdraw") } href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Withdraw</a>
                <a onClick={() => unstakebefore(31536000)} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Unstake Early</a>
              </div>
            </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-five" role="tabpanel" aria-labelledby="tab-five-tab">
                <div className="staking-tab-content">
                  {/* Info Box */}
                  <div className="info-box d-flex justify-content-between">
                    <div className="info-left">
                      <ul className="list-unstyled">
                      <li><strong>Your Staked Alexa:</strong> {mytotalStakedPlan5} Alexa</li>
                        <li><strong>My  Reward:</strong> {totalStakedPlan5} Alexa</li>
                        <li><strong>Alexa My Balance:</strong> {alexa} Alexa</li>
                      </ul>
                    </div>
                    <div className="info-right d-flex flex-column">
                      <span>144%</span>
                      <span>APY*</span>
                    </div>
                  </div>
                  <div className="input-box my-4">
              <div className="input-area d-flex flex-column flex-md-row mb-3">
                <div className="input-text">
                <input value={ inputValue }  onChange={ handleInputChange } type="text" placeholder={10000} />
                  <a onClick={max} href="#">Max</a>
                </div>
                <a onClick={() => stake(43200000)} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Stake</a>
              </div>
              <div className="input-area d-flex flex-column flex-md-row">
                
                <a  onClick={() => unstake(43200000)} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Unstake</a>
                <a  onClick={() =>  totalStakedPlan5 > 1 ? withdraw(43200000) : alert("you can't able to withdraw")} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Withdraw</a>
                <a  onClick={() => unstakebefore(43200000)} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Unstake Early </a>
              </div>
            </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-six" role="tabpanel" aria-labelledby="tab-six-tab">
                <div className="staking-tab-content">
                  {/* Info Box */}
                  <div className="info-box d-flex justify-content-between">
                    <div className="info-left">
                      <ul className="list-unstyled">
                      <li><strong>Your Staked Alexa:</strong> {mytotalStakedPlan6} Alexa</li>
                        <li><strong>My  Reward:</strong> {totalStakedPlan6} Alexa</li>
                        <li><strong>Alexa My Balance:</strong> {alexa} Alexa</li>
                      </ul>
                    </div>
                    <div className="info-right d-flex flex-column">
                      <span>150%</span>
                      <span>APY*</span>
                    </div>
                  </div>
                  <div className="input-box my-4">
              <div className="input-area d-flex flex-column flex-md-row mb-3">
                <div className="input-text">
                <input value={ inputValue }  onChange={ handleInputChange } type="text" placeholder={10000} />
                  <a onClick={max} href="#">Max</a>
                </div>
                <a onClick={() => stake(63072000)} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Stake</a>
              </div>
              <div className="input-area d-flex flex-column flex-md-row">
               
                <a onClick={() => unstake(63072000)} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Unstake</a>
                <a onClick={() =>  totalStakedPlan6 > 1 ? withdraw(63072000) : alert("you can't able to withdraw")} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Withdraw</a>
                <a onClick={() => unstakebefore(63072000)} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Unstake Early</a>
              </div>
            </div>
                </div>
              </div>
            </div>
            {/* <div className="input-box my-4">
              <div className="input-area d-flex flex-column flex-md-row mb-3">
                <div className="input-text">
                  <input type="text" placeholder={0.00} />
                  <a href="#">Max</a>
                </div>
                <a href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Stake</a>
              </div>
              <div className="input-area d-flex flex-column flex-md-row">
                <div className="input-text">
                  <input type="text" placeholder={0.00} />
                  <a href="#">Max</a>
                </div>
                <a href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Unstake</a>
              </div>
            </div> */}
            <span>Early unstake fee : 25%</span>
            <span>Referral Commision upto 6%</span>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="staking-items mt-4 mt-md-0">
            {/* Single Card */}
            <div className="card no-hover staking-card">
              <h3 className="m-0">{totalStaked} Alexa</h3>
              <p>Total Staked Alexa</p>
            </div>
            {/* Single Card */}
            <div className="card no-hover staking-card my-4">
              <h3 className="m-0">{totalRefBonus} Alexa</h3>
              <p>Total Referral Commision</p>
            </div>


            {/* Single Card */}
            <div className="card no-hover staking-card">
              <h3 className="m-0">{totalStaker}</h3>
              <p>Number of Stakers</p>
            </div>
            <div className="card no-hover staking-card my-4">
              <p className="m-0"> <img onClick={handleClick}  style={{maxWidth :"25%" , cursor :"pointer"}} src={copy1} ></img> </p>
              <p>Copy  Referral Link </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ***** Staking Area End ***** */}
  {/* ***** Staking Area Start ***** */}
  <section className="staking-area" id="referral">
    <h2 style={{textAlign: 'center'}}>Referral Commision</h2>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="card no-hover staking-card">
            <h3 className="m-0">Level 1 - (5%)</h3>
            <p>{lvl1} Alexa</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card no-hover staking-card">
            <h3 className="m-0">Level 2 - (3%)</h3>
            <p>{lvl2} Alexa</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card no-hover staking-card">
            <h3 className="m-0">Level 3 - (1%)</h3>
            <p>{lvl3} Alexa </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ***** Staking Area End ***** */}
  {/* ***** Content Area Start ***** */}
  <section className="content-area" id="how_to">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <div className="content intro">
            <span className="intro-text">staking</span>
            <h2>How to Stake ?</h2>
            {/* <div style={{cursor: "pointer"}} >
                <MdOutlineFileCopy className={styles.copyIcon} />
                <h3>COPY LINK</h3>
              </div> */}
            <p>Staking is a popular way to earn passive income with your crypto investments</p>
            <ul className="list-unstyled items mt-5">
              <li className="item">
                {/* Content List */}
                <div className="content-list d-flex align-items-center">
                  <div className="content-icon">
                    <span>
                      <i className="fa-brands fa-discord" />
                    </span>
                  </div>
                  <div className="content-body ml-4">
                    <h3 className="m-0">Add Alexa Tokens</h3>
                    <p className="mt-3">You will need Alexa tokens in your wallet to stake. Once you purchase Alexa tokens, make sure that you add the Alexa token to your MetaMask/TrustWallet Wallet so you can view your Alexa balance.</p>
                  </div>
                </div>
              </li>
              <li className="item">
                {/* Content List */}
                <div className="content-list d-flex align-items-center">
                  <div className="content-icon">
                    <span className="featured">
                      <i className="fa-brands fa-hotjar" />
                    </span>
                  </div>
                  <div className="content-body ml-4">
                    <h3 className="m-0">Connect &amp; Verify Wallet</h3>
                    <p className="mt-3">Click the "Connect Wallet" button at the upper right corner of the site and make sure you have the Binance Smart Chain network selected in your MetaMask wallet.</p>
                  </div>
                </div>
              </li>
              <li className="item">
                {/* Content List */}
                <div className="content-list d-flex align-items-center">
                  <div className="content-icon">
                    <span>
                      <i className="fa-solid fa-rocket" />
                    </span>
                  </div>
                  <div className="content-body ml-4">
                    <h3 className="m-0">Stake Alexa</h3>
                    <p className="mt-3">You'll need to click the 'Stake Alexa' and scroll to the top of the page to bring up the staking interface on the site.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6">
          {/* Blockchain Animation */}
          <div className="wrapper-animation d-none d-md-block">
            <div className="blockchain-wrapper">
              <div className="pyramid">
                <div className="square">
                  <div className="triangle" />
                  <div className="triangle" />
                  <div className="triangle" />
                  <div className="triangle" />
                </div>
              </div>
              <div className="pyramid inverse">
                <div className="square">
                  <div className="triangle" />
                  <div className="triangle" />
                  <div className="triangle" />
                  <div className="triangle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ***** Content Area End ***** */}
  {/* ***** CTA Area Start ***** */}
  <section className="cta-area p-0">
    <div className="container">
      <div className="row">
        <div className="col-12 card">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-5 text-center">
              <img src="/img/content/cta_thumb.png" alt />
            </div>
            <div className="col-12 col-md-6 mt-4 mt-md-0">
              <h2 className="m-0">BUY $Alexa NOW</h2>
              <br />
              <p>Still don’t have $Alexa token? Buy it now on PancakeSwap and start staking your tokens</p>
              <a className="btn btn-bordered active d-inline-block"><i className="icon-rocket mr-2" />Buy on Pancakeswap</a>
            </div>
          </div>
          <a className="cta-link" />
        </div>
      </div>
    </div>
  </section>
  {/* ***** CTA Area End ***** */}
  {/*====== Footer Area Start ======*/}
  <footer className="footer-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center">
          {/* Footer Items */}
          <div className="footer-items">
            {/* Logo */}
            <a className="navbar-brand" href="/">
              <img src="/img/logo/logo.png" alt />
            </a>
            <div className="social-share ml-auto">
              <ul className="d-flex list-unstyled" style={{justifyContent: 'center'}}>
                <li>
                  <a href="https://t.me/AlexaPro_Official">
                    <i className="fab fa-telegram" />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/AlexaPro_OfficialNews">
                    <i className="fab fa-telegram" />
                  </a>
                </li>
                <li>
                  <a href="https://alexapro.finance">
                    <i className="fas fa-globe" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/alexapro100">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright-area py-4">©2023 Alexapro, All Rights Reserved By <a href="#" target="_blank">Alexapro</a></div>
          </div>
          {/* Scroll To Top */}
          <div id="scroll-to-top" className="scroll-to-top">
            <a href="#header" className="smooth-anchor">
              <i className="fa-solid fa-arrow-up" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/*====== Footer Area End ======*/}
  {/*====== Modal Search Area Start ======*/}
  <div id="search" className="modal fade p-0">
    <div className="modal-dialog dialog-animated">
      <div className="modal-content h-100">
        <div className="modal-header" data-dismiss="modal">
          Search <i className="far fa-times-circle icon-close" />
        </div>
        <div className="modal-body">
          <form className="row">
            <div className="col-12 align-self-center">
              <div className="row">
                <div className="col-12 pb-3">
                  <h2 className="search-title mt-0 mb-3">What are you looking for?</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 input-group mt-md-4">
                  <input type="text" placeholder="Enter your keywords" />
                </div>
              </div>
              <div className="row">
                <div className="col-12 input-group align-self-center">
                  <button className="btn btn-bordered-white mt-3">Search</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/*====== Modal Search Area End ======*/}
  {/*====== Modal Responsive Menu Area Start ======*/}
  <div id="menu" className="modal fade p-0">
    <div className="modal-dialog dialog-animated">
      <div className="modal-content h-100">
        <div className="modal-header" data-dismiss="modal">
          Menu <i className="far fa-times-circle icon-close" />
        </div>
        <div className="menu modal-body">
          <div className="row w-100">
            <div className="items p-0 col-12 text-center" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*====== Modal Responsive Menu Area End ======*/}
</div>


















    </div>
  );
}

export default App;
