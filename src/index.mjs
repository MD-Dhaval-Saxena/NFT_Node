import * as dotenv from 'dotenv';
dotenv.config()
import abi from '../ABI/abi.json' assert {type:'json'};
import fs from 'fs';
import {pinJSONToIPFS} from '../src/pinata.mjs';
import {assert, ethers} from 'ethers';
const toEth=(value)=>ethers.utils.formatEther(value);
const toWei=(value)=>ethers.utils.parseEther(value.toString());

// const url=process.env.sepolia_url;
const url=process.env.M_url;
const contract_address=process.env.contract_address;
const private_key=process.env.private_key;
const account=process.env.account;
const account2=process.env.account2;
const provider = new ethers.JsonRpcProvider(url);
const wallet=new ethers.Wallet(private_key,provider)


// var file = fs.readFileSync('D:\\NFT_Node\\Metadatas\\nft0.json','utf-8');
let id;
// pinJSONToIPFS(file,id)
const ConnectSmt=async(SetURI)=>{
    const contract=new ethers.Contract(contract_address,abi,provider)
    const name=await contract.name()
    console.log("🚀 -------------------------🚀")
    console.log("🚀 ~ connect ~ name:", name)
    console.log("🚀 -------------------------🚀")

    const contractWithWallet=contract.connect(wallet);
    id = await contractWithWallet._tokenIdCounter();

    // let apporval=await contractWithWallet.setApprovalForAll(NFT_Auction_address,true)   
    // console.log("🚀 ------------------------------------🚀")
    // console.log("🚀 ~ ConnectSmt ~ apporval:", apporval)
    // console.log("🚀 ------------------------------------🚀")
    
    // id=parseInt(id)
    console.log("🚀 ------------------------🚀")
    console.log("🚀 ~ ConnectSmt ~ id:", id)
    console.log("🚀 ------------------------🚀")
    // await contractWithWallet.safeMint(account,id.toString());
    // console.log(id.toString());

   
   

}
ConnectSmt()

export const setURI=async(url)=>{
    ConnectSmt()
    console.log("calling setURI..................",url);

}
