import axios from "axios";

import { Contract } from "ethers";
import NFTContract from "../contracts/NFTBookStore.json";

const FactoryAbi = NFTContract.abi;
const factoryContractAddress = NFTContract.address;

export const getContract = (signer: any) => {
  const factoryContract = new Contract(
    factoryContractAddress,
    FactoryAbi,
    signer as any
  );
  return factoryContract;
};

export const FILTERS = [
  {
    id: "book_name",
    label: "Book Name",
  },
  {
    id: "authorName",
    label: "Author Name",
  },
  {
    id: "genre",
    label: "Genre",
  },
  // {
  //   id: "rating",
  //   label: "Rating",
  // },
  {
    id: "physical_price",
    label: "Max Price",
  },
];

export const uploadFileToPinata = async (pngFile: any) => {
  try {
    let response = await fetch(pngFile);
    let blob = await response.blob();
    let file = new File([blob], "qr.png", { type: "image/png" });
    const data = new FormData();
    data.append("file", file);
    data.append("pinataOptions", '{"cidVersion": 1}');
    data.append(
      "pinataMetadata",
      '{"name": "Book QR code", "keyvalues": {"bookName": "The Alchemist"}}'
    );
    var config = {
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI1NjYyYjZmNy1jNmJhLTRmODctYTE4Zi1mM2E1NTc3MTE2ZmEiLCJlbWFpbCI6ImpoZW1hbnQ1MzlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjQ3ZWIzNDRlYTEzYTk1NTg0MmZhIiwic2NvcGVkS2V5U2VjcmV0IjoiM2M4ZDA3ODM1MGQ1ZDFmYmU1ZTZkZGIzNThmN2RhYWY4MjY0OWYxOTE5M2YwMmZiODJhZTQ3YzgwNjZjNzE2YyIsImlhdCI6MTY2NzY0MTM5N30.WMe7hIRTF0ktD8y4rIC1m43iJAPrJOx2rZySEygoqyA",
      },
      data,
    };
    let res: any;
    // const res = await axios(config);
    return res.data.IpfsHash;
  } catch (error) {
    console.log(error);
  }
};

export const filterBooks = (filter: any, searchText: any, books: any) => {
  let filterBooks;
  switch (filter) {
    case "book_name":
    case "authorName":
    case "genre":
      filterBooks = books.filter((book: any) =>
        book[filter].toLowerCase().includes(searchText.toLowerCase())
      );
      break;

    case "physical_price":
      filterBooks = books.filter(
        (book: any) => parseFloat(book.price) <= parseFloat(searchText)
      );
      break;

    default:
      filterBooks = books;
      break;
  }

  return filterBooks;
};

export const genreMapper = {
  1: "Thriller",
  2: "Comedy",
  3: "Self Help",
  4: "History",
  5: "Politics",
  6: "Finance",
  7: "Startup",
  8: "Horror",
  9: "Romance",
  10: "Short Stories",
  11: "Life Style",
} as any;

export const deliveryStatusMapper = {
  1: "Ordered",
  2: "Shipped",
  3: "Delivered",
} as any;

export const ownerShipMapper = {
  1: "Owner",
  2: "Rented",
} as any;

export const nftTypeMapper = {
  1: "Physical",
  2: "Digital",
} as any;
