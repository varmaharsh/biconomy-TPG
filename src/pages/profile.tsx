import React from "react";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import NftCard from "../components/NftCard";
import { useWeb3AuthContext } from "../contexts/SocialLoginContext";
import { getContract } from "../utils";
import "../styles/index.css";

const Profile = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [books, setBooks] = useState([]);
  const { signer, connect } = useWeb3AuthContext();

  useEffect(() => {
    setLoggedIn(true);
    (async () => {
      if (!signer) {
        await connect();
      }
      await getAllBooks();
    })();
  }, []);

  async function getAllBooks() {
    try {
      const contract = getContract(signer);
      const address = await signer?.getAddress();

      const books = await contract.getAllBooksByUser(address);
      setBooks(books);
      console.log(books);
      // setFilteredBooks(books);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <>
        <NavBar loggedIn={loggedIn} />
        <div className="container mx-auto px-4 mt-10">
          <Header
            heading="Your Purchases"
            subHeading="Books you have bought on the market"
          />
          <div className="mt-16 flex flex-wrap justify-start w-full">
            {books?.map((book: any) => {
              if (book.ownership === 2 && book.expiryTimestamp < Date.now()) {
                return;
              }
              return (
                <NftCard
                  info={book}
                  key={book.id}
                  getAllBooks={getAllBooks}
                  signer={signer}
                  onclick={() => {}}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </>
    </>
  );
};

export default Profile;
