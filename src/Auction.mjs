import * as dotenv from 'dotenv';
dotenv.config()
import AuctionAbi from '../ABI/AuctionAbi.json' assert {type:'json'};
import fs from 'fs';
import {ethers} from 'ethers';
import { type } from 'os';
const toEth=(value)=>ethers.utils.formatEther(value);
const toWei=(value)=>ethers.utils.parseEther(value.toString());


const url=process.env.sepolia_url;
const NFT_Auction_address=process.env.NFT_Auction_address;
const private_key=process.env.private_key;
const account=process.env.account;
const account2=process.env.account2;
const provider = new ethers.JsonRpcProvider(url);
const wallet=new ethers.Wallet(private_key,provider)


let createAuction=()=>{
    let token_address=process.env.contract_address;
    let id=0;
    let startTime=1;
    let endTime=2;
    let setPrice=BigInt(100000000000000000); 
    return {token_address,id,startTime,endTime,setPrice}
}

let Start=async()=>{
    const contract=new ethers.Contract(NFT_Auction_address,AuctionAbi,provider);
    // let AucInfo=await contract.AucInfo(1);
    // console.log("🚀 -----------------------------🚀")
    // console.log("🚀 ~ Start ~ AucInfo:", AucInfo)
    // console.log("🚀 -----------------------------🚀")
    let contractWithWallet=contract.connect(wallet)

    let {token_address,id,startTime,endTime,setPrice} = createAuction();
    let create=await contractWithWallet.createAuction(token_address,id,startTime,endTime,setPrice);

    // let winner=await contract.AucInfo(1);
    // console.log("🚀 ---------------------------🚀")
    // console.log("🚀 ~ Start ~ winner:", winner)
    // console.log("🚀 ---------------------------🚀")
    
    
}
Start()