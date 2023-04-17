import * as dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
const app = express();
import fs from "fs";
import { create } from "ipfs-http-client";
import { setURI } from "../src/index.mjs";
const ipfs = create(process.env.ipfs_url);

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

