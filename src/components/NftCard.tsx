import React from "react";
import { useState } from "react";
import {
  deliveryStatusMapper,
  getContract,
  nftTypeMapper,
  ownerShipMapper,
} from "../utils";
import PdfModal from "./PdfModal";
import "../styles/index.css";

const NftCard = ({
  info,
  onclick,
  getAllBooks,
  signer,
}: {
  info: any;
  onclick: any;
  getAllBooks: any;
  signer: any;
}) => {
  const [salePrice, setSalePrice] = useState(0);
  const [showInputs, setShowInputs] = useState(false);
  const [showModal, setShowModal] = useState(false);

  async function putNftForSale() {
    try {
      if (salePrice <= 0) {
        alert("Please enter a valid price");
        return;
      }
      const contract = getContract(signer);

      const tx = await contract.putNFTToSale(
        info.tokenId.toString(),
        (salePrice * 10 ** 18).toString()
      );
      alert("Transaction in progress");
      await tx.wait();
      alert("Nft put for sale successfully");
      getAllBooks();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <PdfModal
        showModal={showModal}
        setShowModal={setShowModal}
        pdfLink={
          "https://ipfs.io/ipfs/QmaNxbQNrJdLzzd8CKRutBjMZ6GXRjvuPepLuNSsfdeJRJ"
        }
      />
      <div
        className="rounded-xl overflow-hidden bg-white mx-4 my-4 shadow-sm cursor-pointer"
        style={{ width: "280px" }}
        onClick={onclick}
      >
        <div className="mt-2 mb-7 p-4 pb-0 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">
              Token ID: {info.tokenId.toString()}
            </h2>
            <p className="text-slate-500 text-lg mt-2">
              Onwnership Status: {ownerShipMapper[info.ownership]}
            </p>
            <p className="text-slate-500 text-lg mt-2">
              Nft Type: {nftTypeMapper[info.nftType]}
            </p>
            <p className="text-slate-500 text-lg mt-2">
              Delivery Status: {deliveryStatusMapper[info.deliveryStatus]}
            </p>
            {/* <p className="text-slate-500 text-lg mt-2">
              Delivery Status: {deliveryStatusMapper[info.deliveryStatus]}
            </p> */}
            <div className="mt-10">
              {info.ownership === 1 ? (
                info.openForSale ? (
                  <p className="text-slate-500 text-lg mt-2">
                    Currenlty listed for: {info.sellingPrice} Reef
                  </p>
                ) : !showInputs ? (
                  <button
                    onClick={() => setShowInputs(true)}
                    // size="large"
                    // variant="outlined"
                  >
                    Put Nft for Sale
                  </button>
                ) : (
                  <div className="flex flex-col justify-between">
                    <div style={{ maxWidth: "200px" }}>
                      <input
                        name="salePrice"
                        placeholder="Sale Price"
                        value={salePrice}
                        onBlur={function noRefCheck() {}}
                        onChange={(e) => setSalePrice(Number(e.target.value))}
                      />
                    </div>
                    <div style={{ maxWidth: "200px" }} className="mt-4">
                      <button
                        onClick={putNftForSale}
                        //size="large"
                        // variant="outlined"
                      >
                        Put Nft for Sale
                      </button>
                    </div>
                  </div>
                )
              ) : null}
              {info.nftType === 2 ? (
                <div
                  style={{ maxWidth: "200px", width: "200px" }}
                  className="mt-4"
                >
                  <button
                    onClick={() =>
                      window.open(
                        "https://ipfs.io/ipfs/QmaNxbQNrJdLzzd8CKRutBjMZ6GXRjvuPepLuNSsfdeJRJ",
                        "_blank"
                      )
                    }
                    // size="large"
                    // variant="outlined"
                  >
                    View Pdf
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftCard;
