export const CONTRACT_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Fees_Too_Low",
    type: "error",
  },
  {
    inputs: [],
    name: "Invalid_Book_Id",
    type: "error",
  },
  {
    inputs: [],
    name: "Invalid_NFT_Id",
    type: "error",
  },
  {
    inputs: [],
    name: "Not_For_Sale",
    type: "error",
  },
  {
    inputs: [],
    name: "Not_The_Owner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "NFT_Minted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "genre",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "book_name",
        type: "string",
      },
      {
        internalType: "address",
        name: "authorAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "authorName",
        type: "string",
      },
      {
        internalType: "uint32",
        name: "physical_price",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "digital_price",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "rentPerMonth",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "authorPercentage",
        type: "uint16",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "addBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllBooks",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "bookId",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "genre",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "physical_price",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "digital_price",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "rentPricePerMonth",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "authorPercentage",
            type: "uint16",
          },
          {
            internalType: "string",
            name: "book_name",
            type: "string",
          },
          {
            internalType: "address",
            name: "authorAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "authorName",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        internalType: "struct NFTBookStore.Book[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getAllBooksByUser",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "bookId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiryTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "deliveryStatus",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "deliveryCharge",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "sellingPrice",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "nftType",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "ownership",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "openForSale",
            type: "bool",
          },
          {
            internalType: "string",
            name: "QRCode",
            type: "string",
          },
        ],
        internalType: "struct NFTBookStore.NFTBook[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllSecondHandBooks",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "bookId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiryTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "deliveryStatus",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "deliveryCharge",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "sellingPrice",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "nftType",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "ownership",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "openForSale",
            type: "bool",
          },
          {
            internalType: "string",
            name: "QRCode",
            type: "string",
          },
        ],
        internalType: "struct NFTBookStore.NFTBook[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bookId",
        type: "uint256",
      },
    ],
    name: "getBookById",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "bookId",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "genre",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "physical_price",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "digital_price",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "rentPricePerMonth",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "authorPercentage",
            type: "uint16",
          },
          {
            internalType: "string",
            name: "book_name",
            type: "string",
          },
          {
            internalType: "address",
            name: "authorAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "authorName",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        internalType: "struct NFTBookStore.Book",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_deliveryStatus",
        type: "uint8",
      },
    ],
    name: "markShippedOrDelivered",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bookId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_nftType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_expiryTimestamp",
        type: "uint256",
      },
    ],
    name: "orderBook",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "orderSecondHandBook",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_sellingPrice",
        type: "uint32",
      },
    ],
    name: "putNFTToSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
    ],
    name: "setContractAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
