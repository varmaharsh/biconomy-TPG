import React from "react";
import { genreMapper, nftTypeMapper } from "../utils";
import { getContract } from "../utils";
import "../styles/index.css";
import { utils } from "ethers";

const SecHandBookCard = ({
  info,
  onclick,
  signer,
}: {
  info: any;
  onclick: any;
  signer: any;
}) => {
  async function handleBuyNft() {
    try {
      const contract = getContract(signer);

      const tx = await contract.orderSecondHandBook(info.tokenId.toString(), {
        value: (info.sellingPrice * 10 ** 18).toString(),
      });
      alert("Transaction in progress");
      await tx.wait();
      alert("Physical copy bought successfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className="rounded-xl overflow-hidden bg-white mx-4 my-4 shadow-sm cursor-pointer"
      style={{ width: "280px" }}
    >
      <img
        style={{ minHeight: "250px", maxHeight: "250px", objectFit: "cover" }}
        src={info.uri}
        alt="Book Cover"
        // width={100}
        // height={100}
      />
      <div className="mt-2 mb-7 p-4 pb-0 flex justify-between items-start">
        <div>
          <h2 className="font-semibold text-base text-black">
            {info.book_name}
          </h2>
          <h2 className="text-base text-slate-500">
            Nft Type: {nftTypeMapper[info.nftType]}
          </h2>
          <p className="text-slate-500 text-sm">{genreMapper[info.genre]}</p>
        </div>
        <div>
          <h2 className="font-semibold text-slate-500">Matic</h2>
          <p className="text-2xl font-bold">
            {Number(utils.formatEther(info.sellingPrice || 0)) * 10 ** 9}
          </p>
        </div>
      </div>
      <div className="flex flex-col p-4">
        <div>
          <button
            onClick={onclick}
            // size="large" variant="outlined"
          >
            Show Detail
          </button>
        </div>
        <div className="mt-4">
          <button
            onClick={handleBuyNft} // size="large" variant="outlined"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecHandBookCard;
