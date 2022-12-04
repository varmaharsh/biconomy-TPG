import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookCard, Footer, Header, NavBar } from "./components";
import { filterBooks, getContract } from "./utils";
import "./index.css";
import { useWeb3AuthContext } from "./contexts/SocialLoginContext";

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const { signer, address, connect, disconnect } = useWeb3AuthContext();

  console.log("helo");
  useEffect(() => {
    setLoggedIn(true);
    (async () => {
      if (!signer) {
        await connect();
      }
      await getAllBooks();
    })();
  }, [address]);

  async function getAllBooks() {
    try {
      const contract = getContract(signer as any);
      const books = await contract.getAllBooks();
      setBooks(books);
      console.log(books);
      setFilteredBooks(books);
    } catch (error) {
      console.log(error);
    }
  }

  const handleFilterBooks = (filter: any, searchText: any) => {
    const temp = filterBooks(filter, searchText, books);
    setFilteredBooks(temp);
  };

  return (
    <>
      <>
        <button
          onClick={
            !address
              ? connect
              : () => {
                  // setSelectedAccount(null);
                  disconnect();
                }
          }
          title={!address ? "Connect Wallet" : "Disconnect Wallet"}
        />
        <NavBar loggedIn={loggedIn} />
        <div className="container mx-auto px-4 mt-10">
          <Header
            heading="Explore Books"
            subHeading="Browse through our collection of books"
            showFilters={true}
            filterBooks={handleFilterBooks}
          />
          <div className="mt-16 flex flex-wrap justify-between w-full">
            {filteredBooks?.map((book: any, i) => {
              // console.log(book);
              return (
                <BookCard
                  info={book}
                  key={i}
                  onclick={() => {
                    navigate(`/book/${book?.bookId?.toString()}`);
                  }}
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

export default App;
