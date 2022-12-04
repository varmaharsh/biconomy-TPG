import { utils } from "ethers";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { NavBar, Footer } from "../components";
import { useWeb3AuthContext } from "../contexts/SocialLoginContext";
import { genreMapper } from "../utils";
import { getContract } from "../utils";

const BookInfo = () => {
  const [bookInfo, setBookInfo] = useState<any>();
  const [loggedIn, setLoggedIn] = useState(false);

  const location = useLocation();
  const bookId = location.pathname.split("/")[2];
  // const web3ModalRef = useRef();
  const { ethersProvider, connect, signer } = useWeb3AuthContext();

  useEffect(() => {
    // if (!walletConnected) {
    // web3ModalRef.current = getWeb3Modal();
    // onPageLoad();

    getBookById();

    // }
  }, [ethersProvider]);

  async function onPageLoad() {
    //getBookById(router.query.bookId);
    //const loggedIn = getLoggedInStatus();
    setLoggedIn(loggedIn);
    // setHooks(setChainId);
  }

  async function getBookById() {
    try {
      if (!ethersProvider) {
        await connect();
      }
      const contract = getContract(ethersProvider);
      console.log(location.pathname);
      const info = await contract.getBookById(bookId.toString());
      setBookInfo(info);
    } catch (error) {
      console.log(error);
    }
  }

  async function buyPhysicalCopy() {
    try {
      if (!signer) {
        await connect();
      }
      const contract = getContract(signer);
      const value = utils
        .parseEther(((bookInfo.physical_price * 2) / 1000000000).toString())
        .toString();
      const tx = await contract.orderBook(bookId, "1", "0", {
        gasPrice: 100,
        gasLimit: 9000000,
        value: value,
      });
      alert("Transaction in progress");
      await tx.wait();
      alert("Physical copy bought successfully");
    } catch (error) {
      console.log(error);
    }
  }

  async function buyDigitalCopy() {
    try {
      if (!signer) {
        await connect();
      }
      const contract = getContract(signer);

      const tx = await contract.orderBook(bookId, "2", "0", {
        gasPrice: 100,
        gasLimit: 9000000,
        value: utils.parseEther(
          (bookInfo.digital_price / 1000000000).toString()
        ),
      });
      alert("Transaction in progress");
      await tx.wait();
      alert("Digital copy bought successfully");
    } catch (error) {
      console.log(error);
    }
  }

  async function rentBook() {
    try {
      if (!signer) {
        await connect();
      }
      const contract = getContract(signer);

      const tx = await contract.orderBook(
        bookId,
        "2",
        (Date.now() + 1000 * 60 * 60 * 24 * 30).toString(),
        {
          gasPrice: 100,
          gasLimit: 9000000,
          value: utils.parseEther(
            (bookInfo.rentPricePerMonth / 1000000000).toString()
          ),
        }
      );
      alert("Transaction in progress");
      await tx.wait();
      alert("Book rented successfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <>
        <NavBar loggedIn={loggedIn} />
        {bookInfo ? (
          <>
            <div className="container m-auto mt-12 px-4 py-2 flex flex-col w-full">
              <h1 className="text-6xl font-extrabold">{bookInfo.book_name}</h1>
              <div className="container m-auto mt-12 flex">
                <img
                  src={bookInfo.uri}
                  className="w-2/5 rounded-2xl"
                  style={{ height: "500px", objectFit: "cover" }}
                />
                <div className="w-1/2 mt-2 p-4 pl-14 pb-0 flex justify-between items-start">
                  <div>
                    <h2 className="text-5xl font-extrabold">
                      {bookInfo.authorName}
                    </h2>
                    <p className="text-slate-500 text-3xl mt-3 font-bold">
                      {genreMapper[bookInfo.genre]}
                    </p>

                    <p className="text-xl font-regular text-slate-500 mt-6">
                      {bookInfo.description}
                    </p>

                    <div className="flex flex-col justify-between items-start m-0 mt-16 p-0">
                      <div className="mt-4">
                        <button
                          className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                          onClick={buyPhysicalCopy}
                          type="submit"
                          //size="large"
                          //isFullWidth

                          //theme="outline"
                        >
                          Buy physical copy for $
                          {Number(
                            utils.formatEther(bookInfo.physical_price || 0)
                          ) *
                            10 ** 9}{" "}
                          Matic
                        </button>
                      </div>
                      <div className="mt-4">
                        <button
                          className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                          onClick={buyDigitalCopy}
                          // size="large"
                          // isFullWidth
                          type="submit"
                          //theme="outline"
                        >
                          Buy digital copy for $
                          {Number(
                            utils.formatEther(bookInfo.digital_price || 0)
                          ) *
                            10 ** 9}{" "}
                          Matic
                        </button>
                      </div>
                      <div className="mt-4">
                        <button
                          className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                          onClick={rentBook}
                          type="submit"
                          // size="large"
                          // isFullWidth

                          //theme="outline"
                        >
                          Rent for $
                          {Number(
                            utils.formatEther(bookInfo.rentPricePerMonth || 0)
                          ) *
                            10 ** 9}{" "}
                          Matic
                        </button>
                      </div>
                    </div>

                    <p className="text-sm font-regular text-slate-500 mt-3">
                      *Note: Rent period is 1 Month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full mt-24 flex justify-center items-center">
            <p className="text-6xl font-extrabold">Book not found</p>
          </div>
        )}
        <Footer />
      </>
      {/* <div className="flex flex-col items-center justify-center w-screen h-screen">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/2/24/Polygon_blockchain_logo.png"
          style={{ maxWidth: "800px" }}
        />
        <h1 className="text-3xl font-bold">
          Change your network to Mumbai Testnet
        </h1>
      </div> */}
    </>
  );
};

export default BookInfo;
