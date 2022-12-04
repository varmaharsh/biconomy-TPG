import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer, Header, NavBar } from "../components";
import SecHandBookCard from "../components/secHandBookCard";
import { useWeb3AuthContext } from "../contexts/SocialLoginContext";
import { filterBooks, getContract } from "../utils";
import "../styles/index.css";

const SecHandStore = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [books, setBooks] = useState<any[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<any[]>([]);
  const { signer, connect } = useWeb3AuthContext();

  useEffect(() => {
    setLoggedIn(true);
    (async () => {
      if (!signer) {
        await connect();
      }
      getAllBooks();
    })();
  }, []);

  async function getAllBooks() {
    try {
      if (!signer) {
        await connect();
      }
      const contract = getContract(signer);

      const nfts = await contract.getAllSecondHandBooks();
      const books = await contract.getAllBooks();
      const finalNfts = [];
      for (const nft of nfts) {
        let temp: any = {};
        Object.keys(nft).forEach((key) => {
          temp[key] = nft[key];
        });

        const book = books.find(
          (book: any) => book.bookId.toString() === nft.bookId.toString()
        );
        if (book) {
          temp.uri = book.uri;
          temp.book_name = book.book_name;
        }
        finalNfts.push(temp);
      }
      console.log(finalNfts);
      setBooks(finalNfts);
      setFilteredBooks(finalNfts);
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
        <NavBar loggedIn={loggedIn} />
        <div className="container mx-auto px-4 mt-10">
          <Header
            heading="Explore Books"
            subHeading="Browse through our collection of books"
            showFilters={true}
            filterBooks={handleFilterBooks}
          />
          <div className="mt-16 flex flex-wrap justify-start w-full">
            {filteredBooks?.map((book, i) => {
              // console.log(book);
              return (
                <SecHandBookCard
                  info={book}
                  key={i}
                  onclick={() => {
                    navigate(`/book/${book?.bookId?.toString()}`);
                  }}
                  signer={signer}
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

export default SecHandStore;
