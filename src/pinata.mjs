import * as dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
const app = express();
import fs from "fs";
import { create } from "ipfs-http-client";
import { setURI } from "../src/index.mjs";
// const ipfs=create("http://127.0.0.1:5001");
const ipfs = create("http://127.0.0.1:45005/");

const key = process.env.pinata_key;

const Service = async () => {
  let result = await ipfs.pin.remote.service.add("pinata", {
    endpoint: new URL("https://api.pinata.cloud"),
    key: key,
  });
};
// Service()
export const pinJSONToIPFS = async (jsonBody, id) => {
  let result = await ipfs.files.write(`/NFTS/${id}`, jsonBody, {
    create: true,
  });
  let data = await ipfs.files.stat("/NFTS/0");
  console.log("🚀 -------------------------------🚀")
  console.log("🚀 ~ pinJSONToIPFS ~ data:", data)
  console.log("🚀 -------------------------------🚀")

  // setURI(data.cid);
};

