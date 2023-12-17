import { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { DOCUMENT_ADDRESS } from "../constant/addresses";
import { DOCUMENT_ABI } from "../constant/abi";

export const useDocumentContract = () => {
  const [contract, setContract] = useState(null);
  const [signer, setSigner] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        // Check if MetaMask is installed and an Ethereum provider is available
        if (window.ethereum) {
          // Request account access if needed
          await window.ethereum.request({ method: "eth_requestAccounts" });
        } else {
          console.error("MetaMask not installed");
          return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const _contract = new ethers.Contract(DOCUMENT_ADDRESS, DOCUMENT_ABI, provider);
        setContract(_contract);

        const _signer = provider.getSigner();
        setSigner(_signer);
      } catch (error) {
        console.error("Metamask not connected", error);
      }
    };

    init();
  }, []);

  return { contract, signer };
};
