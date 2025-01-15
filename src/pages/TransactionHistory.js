import React, { useState } from "react";
import Table from "../components/table/Table";
import Card from "../shared/Card";
// import TableEmptyState from "../shared/TableEmptyState";

// import { allTransactions } from "appstate/collections/collectionSlice";
import Pagination from "../shared/Pagination";

import * as XLSX from "xlsx";
import Loading from "../shared/Loading";
// import DatePicker from "react-datepicker";
import {
  PAIconDownload,
  PAIconFilter,
  PAIconSearchGreen,
} from "../assets/images/svg";
import { motion } from "framer-motion";

const TransactionHistory = () => {
  // const dispatch = useDispatch();

  // const [page, setPage] = useState(0);
  // const [startPage, setStartPage] = useState(0);
  // const [endPage, setEndPage] = useState(10);

  const [selectedTab, setSelectedTab] = useState("single");
  // const [dateRange, setDateRange] = useState([null, null]);
  // const [startDate, endDate] = dateRange;
  const [searchQuery, setSearchQuery] = useState("");

  // const [selectAll] = useState(false);
  // const [, setSelectDownloadType] = useState(false);

  // const pageSize = 10;

  const formatAmount = (amount) => {
    if (typeof amount !== "number") return "0.00";
    return amount?.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    sessionStorage.setItem("searchQueryFunder", value);
  };

  // const closeModal = () => setIsModalOpen(false);

  // const applyFilter = (range) => {
  //   setSelectedRange(range);
  //   closeModal();
  // };

  const handleFilterButtonClick = () => {};

  const directFundingData = {
    data: [
      {
        id: 1,
        transactionParty: "XYZ Ventures",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "2090",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Early Payment Offers",
        invoiceAmount: 9000000,
        discountAmount: 950000,
        discountRate: "1.5%",
        fundableAmount: 8150000,
      },

      {
        id: 2,
        transactionParty: "XYZ Ventures",
        player: "Supplier",
        refNo: "R3456Y89Z",
        invoiceNumber: "2080",
        buyerCompanyName: "Providus Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Early Payment Offers",
        invoiceAmount: 9000000,
        discountAmount: 90000,
        discountRate: "1.5%",
        fundableAmount: 1350000,
      },

      {
        id: 3,
        transactionParty: "XYZ Ventures",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "2090",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Early Payment Offers",
        invoiceAmount: 9000000,
        discountAmount: 950000,
        discountRate: "1.5%",
        fundableAmount: 8150000,
      },

      {
        id: 4,
        transactionParty: "XYZ Ventures",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "2090",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Early Payment Offers",
        invoiceAmount: 9000000,
        discountAmount: 950000,
        discountRate: "1.5%",
        fundableAmount: 8150000,
      },
      {
        id: 5,
        transactionParty: "XYZ Ventures",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "2090",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Early Payment Offers",
        invoiceAmount: 9000000,
        discountAmount: 950000,
        discountRate: "1.5%",
        fundableAmount: 8150000,
      },

      {
        id: 6,
        transactionParty: "XYZ Ventures",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "2090",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Early Payment Offers",
        invoiceAmount: 9000000,
        discountAmount: 950000,
        discountRate: "1.5%",
        fundableAmount: 8150000,
      },
      {
        id: 7,
        transactionParty: "XYZ Ventures",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "2090",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Early Payment Offers",
        invoiceAmount: 9000000,
        discountAmount: 950000,
        discountRate: "1.5%",
        fundableAmount: 8150000,
      },

      {
        id: 8,
        transactionParty: "XYZ Ventures",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "2090",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Early Payment Offers",
        invoiceAmount: 9000000,
        discountAmount: 950000,
        discountRate: "1.5%",
        fundableAmount: 8150000,
      },
      {
        id: 9,
        transactionParty: "XYZ Ventures",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "2090",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Early Payment Offers",
        invoiceAmount: 9000000,
        discountAmount: 950000,
        discountRate: "1.5%",
        fundableAmount: 8150000,
      },

      {
        id: 10,
        transactionParty: "XYZ Ventures",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "2090",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Early Payment Offers",
        invoiceAmount: 9000000,
        discountAmount: 950000,
        discountRate: "1.5%",
        fundableAmount: 8150000,
      },
      {
        id: 11,
        transactionParty: "XYZ Ventures",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "2090",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Early Payment Offers",
        invoiceAmount: 9000000,
        discountAmount: 950000,
        discountRate: "1.5%",
        fundableAmount: 8150000,
      },

      {
        id: 12,
        transactionParty: "XYZ Ventures",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "2090",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Early Payment Offers",
        invoiceAmount: 9000000,
        discountAmount: 950000,
        discountRate: "1.5%",
        fundableAmount: 8150000,
      },

      {
        id: 13,
        transactionParty: "UBA",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Invoicing",
        invoiceAmount: 9000000,
        discountAmount: 950000,
        discountRate: "1.5%",
        fundableAmount: 8150000,
      },

      {
        id: 14,
        transactionParty: "Nova Merchant Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Invoicing",
        invoiceAmount: 8600000,
        discountAmount: 230000,
        discountRate: "14%",
        fundableAmount: 2150000,
      },

      {
        id: 16,
        transactionParty: "First Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Direct Funding",
        invoiceAmount: 8600000,
        discountAmount: 230000,
        discountRate: "14%",
        fundableAmount: 2150000,
      },

      {
        id: 17,
        transactionParty: "UBA",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Invoicing",
        invoiceAmount: 9000000,
        discountAmount: 950000,
        discountRate: "1.5%",
        fundableAmount: 8150000,
      },

      {
        id: 18,
        transactionParty: "Nova Merchant Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Invoicing",
        invoiceAmount: 8600000,
        discountAmount: 230000,
        discountRate: "14%",
        fundableAmount: 2150000,
      },

      {
        id: 19,
        transactionParty: "Access Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Direct Funding",
        invoiceAmount: 7600000,
        discountAmount: 6230000,
        discountRate: "14%",
        fundableAmount: 3150000,
      },

      {
        id: 20,
        transactionParty: "UBA",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "PFP",
        invoiceAmount: 5000000,
        discountAmount: 250000,
        discountRate: "13%",
        fundableAmount: 4150000,
      },

      {
        id: 21,
        transactionParty: "Zenith Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Open Market",
        invoiceAmount: 8600000,
        discountAmount: 230000,
        discountRate: "14%",
        fundableAmount: 6150000,
      },

      {
        id: 22,
        transactionParty: "First Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Direct Funding",
        invoiceAmount: 8600000,
        discountAmount: 230000,
        discountRate: "20%",
        fundableAmount: 1150000,
      },

      {
        id: 23,
        transactionParty: "Nova Merchant Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "PFP",
        invoiceAmount: 5000000,
        discountAmount: 250000,
        discountRate: "13%",
        fundableAmount: 4150000,
      },

      {
        id: 24,
        transactionParty: " Sterling Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Open Market",
        invoiceAmount: 6600000,
        discountAmount: 930000,
        discountRate: "14%",
        fundableAmount: 4150000,
      },

      {
        id: 25,
        transactionParty: "Stanbic Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Direct Funding",
        invoiceAmount: 4600000,
        discountAmount: 330000,
        discountRate: "20%",
        fundableAmount: 1650000,
      },

      {
        id: 26,
        transactionParty: "Access Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Closed Market",
        invoiceAmount: 5000000,
        discountAmount: 250000,
        discountRate: "13%",
        fundableAmount: 4150000,
      },

      {
        id: 27,
        transactionParty: " Fidelity Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Open Market",
        invoiceAmount: 6600000,
        discountAmount: 930000,
        discountRate: "14%",
        fundableAmount: 4150000,
      },

      {
        id: 28,
        transactionParty: "Monie Point",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Closed Market",
        invoiceAmount: 4600000,
        discountAmount: 330000,
        discountRate: "20%",
        fundableAmount: 1650000,
      },

      {
        id: 29,
        transactionParty: "PalmPay",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "EarlyPayment Request",
        invoiceAmount: 5000000,
        discountAmount: 250000,
        discountRate: "13%",
        fundableAmount: 4150000,
      },

      {
        id: 30,
        transactionParty: "Globus Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Open Market",
        invoiceAmount: 6600000,
        discountAmount: 930000,
        discountRate: "14%",
        fundableAmount: 4150000,
      },

      {
        id: 31,
        transactionParty: "Union Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Closed Market",
        invoiceAmount: 4600000,
        discountAmount: 330000,
        discountRate: "20%",
        fundableAmount: 1650000,
      },

      {
        id: 32,
        transactionParty: "Fidelity Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Closed Market",
        invoiceAmount: 5000000,
        discountAmount: 250000,
        discountRate: "13%",
        fundableAmount: 4150000,
      },

      {
        id: 33,
        transactionParty: " Premium Trust Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "EarlyPayment Request",
        invoiceAmount: 6600000,
        discountAmount: 930000,
        discountRate: "14%",
        fundableAmount: 4150000,
      },

      {
        id: 34,
        transactionParty: "Lotus Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Open Market",
        invoiceAmount: 4600000,
        discountAmount: 330000,
        discountRate: "20%",
        fundableAmount: 1650000,
      },

      {
        id: 35,
        transactionParty: "Paralax Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Closed Market",
        invoiceAmount: 4600000,
        discountAmount: 330000,
        discountRate: "20%",
        fundableAmount: 1650000,
      },

      {
        id: 36,
        transactionParty: "Alternative Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Closed Market",
        invoiceAmount: 5600000,
        discountAmount: 260000,
        discountRate: "13%",
        fundableAmount: 9150000,
      },

      {
        id: 37,
        transactionParty: " Premium Trust Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "EarlyPayment Request",
        invoiceAmount: 6600000,
        discountAmount: 930000,
        discountRate: "14%",
        fundableAmount: 840000,
      },

      {
        id: 39,
        transactionParty: "Lotus Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Open Market",
        invoiceAmount: 4800000,
        discountAmount: 390000,
        discountRate: "20%",
        fundableAmount: 1470000,
      },

      {
        id: 40,
        transactionParty: "Access Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Closed Market",
        invoiceAmount: 4600000,
        discountAmount: 330000,
        discountRate: "20%",
        fundableAmount: 1650000,
      },

      {
        id: 41,
        transactionParty: "Fidelity Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Direct Funding",
        invoiceAmount: 1400000,
        discountAmount: 300000,
        discountRate: "19%",
        fundableAmount: 7150000,
      },

      {
        id: 42,
        transactionParty: " Eco Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "EarlyPayment Request",
        invoiceAmount: 8700000,
        discountAmount: 430000,
        discountRate: "33%",
        fundableAmount: 1150000,
      },

      {
        id: 43,
        transactionParty: "Zenith Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "PFP",
        invoiceAmount: 4600000,
        discountAmount: 330000,
        discountRate: "20%",
        fundableAmount: 1650000,
      },

      {
        id: 44,
        transactionParty: "Paralax Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Direct Funding",
        invoiceAmount: 4600000,
        discountAmount: 330000,
        discountRate: "20%",
        fundableAmount: 1650000,
      },

      {
        id: 45,
        transactionParty: "Alternative Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Closed Market",
        invoiceAmount: 5600000,
        discountAmount: 260000,
        discountRate: "13%",
        fundableAmount: 9150000,
      },

      {
        id: 46,
        transactionParty: " Premium Trust Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "EarlyPayment Request",
        invoiceAmount: 6600000,
        discountAmount: 930000,
        discountRate: "14%",
        fundableAmount: 840000,
      },

      {
        id: 47,
        transactionParty: "Lotus Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Open Market",
        invoiceAmount: 4800000,
        discountAmount: 390000,
        discountRate: "20%",
        fundableAmount: 1470000,
      },

      {
        id: 48,
        transactionParty: "Access Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Closed Market",
        invoiceAmount: 4600000,
        discountAmount: 330000,
        discountRate: "20%",
        fundableAmount: 1650000,
      },

      {
        id: 49,
        transactionParty: "Fidelity Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Direct Funding",
        invoiceAmount: 1400000,
        discountAmount: 300000,
        discountRate: "19%",
        fundableAmount: 7150000,
      },

      {
        id: 50,
        transactionParty: " Eco Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "EarlyPayment Request",
        invoiceAmount: 8700000,
        discountAmount: 430000,
        discountRate: "33%",
        fundableAmount: 1150000,
      },

      {
        id: 51,
        transactionParty: "Zenith Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "PFP",
        invoiceAmount: 4600000,
        discountAmount: 330000,
        discountRate: "20%",
        fundableAmount: 1650000,
      },

      {
        id: 52,
        transactionParty: "Paralax Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Closed Market",
        invoiceAmount: 4600000,
        discountAmount: 330000,
        discountRate: "20%",
        fundableAmount: 1650000,
      },

      {
        id: 53,
        transactionParty: "Alternative Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Closed Market",
        invoiceAmount: 5600000,
        discountAmount: 260000,
        discountRate: "13%",
        fundableAmount: 9150000,
      },

      {
        id: 54,
        transactionParty: " Premium Trust Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "EarlyPayment Request",
        invoiceAmount: 6600000,
        discountAmount: 930000,
        discountRate: "14%",
        fundableAmount: 840000,
      },

      {
        id: 55,
        transactionParty: "Lotus Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Open Market",
        invoiceAmount: 4800000,
        discountAmount: 390000,
        discountRate: "20%",
        fundableAmount: 1470000,
      },

      {
        id: 56,
        transactionParty: "Access Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Closed Market",
        invoiceAmount: 4600000,
        discountAmount: 330000,
        discountRate: "20%",
        fundableAmount: 1650000,
      },

      {
        id: 57,
        transactionParty: "Fidelity Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Direct Funding",
        invoiceAmount: 1400000,
        discountAmount: 300000,
        discountRate: "19%",
        fundableAmount: 7150000,
      },

      {
        id: 58,
        transactionParty: " Eco Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "EarlyPayment Request",
        invoiceAmount: 8700000,
        discountAmount: 430000,
        discountRate: "33%",
        fundableAmount: 1150000,
      },

      {
        id: 59,
        transactionParty: "Zenith Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "PFP",
        invoiceAmount: 4600000,
        discountAmount: 330000,
        discountRate: "20%",
        fundableAmount: 1650000,
      },

      {
        id: 60,
        transactionParty: "Paralax Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Closed Market",
        invoiceAmount: 4600000,
        discountAmount: 330000,
        discountRate: "20%",
        fundableAmount: 1650000,
      },

      {
        id: 61,
        transactionParty: "Alternative Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Closed Market",
        invoiceAmount: 5600000,
        discountAmount: 260000,
        discountRate: "13%",
        fundableAmount: 9150000,
      },

      {
        id: 62,
        transactionParty: " Premium Trust Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "EarlyPayment Request",
        invoiceAmount: 6600000,
        discountAmount: 930000,
        discountRate: "14%",
        fundableAmount: 840000,
      },

      {
        id: 63,
        transactionParty: "Lotus Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Open Market",
        invoiceAmount: 4800000,
        discountAmount: 390000,
        discountRate: "20%",
        fundableAmount: 1470000,
      },

      {
        id: 64,
        transactionParty: "Access Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Closed Market",
        invoiceAmount: 4600000,
        discountAmount: 330000,
        discountRate: "20%",
        fundableAmount: 1650000,
      },

      {
        id: 65,
        transactionParty: "Fidelity Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Direct Funding",
        invoiceAmount: 1400000,
        discountAmount: 300000,
        discountRate: "19%",
        fundableAmount: 7150000,
      },

      {
        id: 66,
        transactionParty: " Eco Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "EarlyPayment Request",
        invoiceAmount: 8700000,
        discountAmount: 430000,
        discountRate: "33%",
        fundableAmount: 1150000,
      },

      {
        id: 67,
        transactionParty: "Zenith Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "PFP",
        invoiceAmount: 4600000,
        discountAmount: 330000,
        discountRate: "20%",
        fundableAmount: 1650000,
      },

      {
        id: 68,
        transactionParty: "Paralax Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Closed Market",
        invoiceAmount: 4600000,
        discountAmount: 330000,
        discountRate: "20%",
        fundableAmount: 1650000,
      },

      {
        id: 69,
        transactionParty: "Alternative Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Closed Market",
        invoiceAmount: 5600000,
        discountAmount: 260000,
        discountRate: "13%",
        fundableAmount: 9150000,
      },

      {
        id: 70,
        transactionParty: " Premium Trust Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "EarlyPayment Request",
        invoiceAmount: 6600000,
        discountAmount: 930000,
        discountRate: "14%",
        fundableAmount: 840000,
      },

      {
        id: 71,
        transactionParty: "Lotus Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Open Market",
        invoiceAmount: 4800000,
        discountAmount: 390000,
        discountRate: "20%",
        fundableAmount: 1470000,
      },

      {
        id: 72,
        transactionParty: "Access Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "Closed Market",
        invoiceAmount: 4600000,
        discountAmount: 330000,
        discountRate: "20%",
        fundableAmount: 1650000,
      },

      {
        id: 73,
        transactionParty: "Fidelity Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-01-12",
        paymentDate: "2023-07-12",
        currency: "NGN",
        fundingChannel: "Direct Funding",
        invoiceAmount: 1400000,
        discountAmount: 300000,
        discountRate: "19%",
        fundableAmount: 7150000,
      },

      {
        id: 74,
        transactionParty: " Eco Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "EarlyPayment Request",
        invoiceAmount: 8700000,
        discountAmount: 430000,
        discountRate: "33%",
        fundableAmount: 1150000,
      },

      {
        id: 75,
        transactionParty: "Zenith Bank",
        player: "Supplier",
        refNo: "R3456X89Y",
        invoiceNumber: "209880",
        buyerCompanyName: "Access Bank",
        dueDate: "2023-08-19",
        paymentDate: "2023-05-12",
        currency: "NGN",
        fundingChannel: "PFP",
        invoiceAmount: 4600000,
        discountAmount: 330000,
        discountRate: "20%",
        fundableAmount: 1650000,
      },
    ],
  };

  // Experiement

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const paginatedData = React.useMemo(() => {
    const start = page * rowsPerPage;
    return directFundingData.data.slice(start, start + rowsPerPage);
  }, [directFundingData.data, page, rowsPerPage]);

  // working formerly

  // const [page, setPage] = useState(0);
  // const itemsPerPage = 10;

  // const paginatedData = React.useMemo(() => {
  //   const start = page * itemsPerPage;
  //   return directFundingData.data.slice(start, start + itemsPerPage);
  // }, [directFundingData.data, page]);

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      directFundingData.data.map((row) => ({
        "Program Ref No": row?.refNo,
        "Invoice Number": `INV-${row?.invoiceNumber}`,
        Buyer: row?.buyerCompanyName,
        "Due Date": row?.dueDate,
        "Payment Date": row?.paymentDate,
        Currency: row?.currency,
        "Invoice Amount": formatAmount(row?.invoiceAmount),
        "Discount Amount": formatAmount(row?.discountAmount),
        "Discount Rate": formatAmount(row?.discountRate),
        "Fundable Amount": formatAmount(row?.fundableAmount),
      }))
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Direct Funding");
    XLSX.writeFile(wb, "DirectFundingData.xlsx");
  };

  // useEffect(() => {
  //   dispatch(allTransactions({ page, pageSize }));
  // }, [dispatch, page, pageSize]);

  const columns = [
    {
      name: (
        <span className="whitespace-nowrap">
          <img className=" pr1 inline" src="/group-icon.svg" alt="" />{" "}
          {/* Program */}
          Transaction Party
        </span>
      ),
      selector: (row) => (
        <div className="flex justify-center flex-col">
          <span>{row?.transactionParty}</span>
          <span className="text-xs font-light text-primaryColor">
            ({row?.player})
          </span>
        </div>
      ),
      sortable: true,
    },

    {
      name: "Payment Date",
      selector: (row) => row?.dueDate,
      sortable: true,
    },

    {
      name: (
        <span className="whitespace-nowrap">
          <img className=" pr1 inline" src="/group-icon.svg" alt="" />{" "}
          {/* Program */}
          Invoice No.
        </span>
      ),
      selector: (row) => row?.refNo,
      sortable: true,
    },
    {
      name: (
        <span className="whitespace-nowrap">
          {/* Program */}
          Currency
        </span>
      ),
      selector: (row) => row?.currency || "NGN",
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row?.invoiceAmount,
      sortable: true,
      cell: (row) => (
        <p className=" text-red">{formatAmount(row?.invoiceAmount)}</p>
      ),
    },
    {
      name: "Status",
      selector: (row) => row?.discountAmount,
      sortable: true,
      cell: (row) => <p className=" text-primaryColor">Paid</p>,
      // width: "9rem",
    },
    {
      name: "Funding Channel",
      selector: (row) => row?.fundingChannel,
      sortable: true,
      cell: (row) => <p>{row?.fundingChannel}</p>,
    },
  ];

  return (
    <div className=" p-16 m-4 border border-stone-300 rounded-md">
      <div className="mb-2 grid md:grid-cols-2 items-center">
        <div className="gap-3 flex relative">
          {/* <DatePicker
            className="px-5 py-2.5 min-w-56 text-sm bg-white rounded"
            selected={startDate}
            onChange={(update) => setDateRange(update)}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            placeholderText="Filters: Start date - End Date"
            // className="border  border-[#ccc] px-4 py-2 cursor-pointer rounded-md w-60"
          /> */}

          <button
            onClick={exportToExcel}
            className="py-2.5 text-xs px-5 rounded-[5px] bg-white border-[#DEDEDE] shadow-sm mr-2 flex items-center justify-center gap-1.5"
          >
            Export {<PAIconDownload className="accent-gray300 w-4" />}
          </button>
        </div>

        <div className="hidden md:flex  items-center gap-2">
          <div className="flex gap-2.5 w-full bg-white border-[0.5px] border-[#ccc] p-2.5 items-center rounded-[5px]">
            <PAIconSearchGreen />
            <input
              type="text"
              placeholder="Search for invoices on the open market"
              value={searchQuery}
              onChange={handleSearchInputChange}
              className="p-2 w-full text-xs flex items-center text-black placeholder:text-black focus:outline-none"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleFilterButtonClick}
            className="ml-2 flex gap-2 items-center justify-center bg-[#2FA06A] text-white text-sm  px-6 py-4 rounded-md duration-[200ms] ease-in  hover:bg-primaryColor focus:outline-none"
          >
            <PAIconFilter />
            Filter
          </motion.button>
        </div>
      </div>

      {/* TABLE */}
      <div>
        {!directFundingData?.data?.length ? (
          <div>
            <div className="flex justify-between items-center px-[15px] bg-alabasterHeader h-[60px] rounded-t-[10px]">
              <p className="text-black text-sm font-medium">
                Due Invoices from Direct Funding
              </p>
            </div>

            {/* <TableEmptyState dashboard /> */}
          </div>
        ) : (
          <Card className="rounded-[10px] min-h-[80vh] mt-[15px]">
            <div className="flex justify-between items-center p-[20px] bg-alabasterHeader rounded-t-[10px]">
              <div className="flex gap-6 items-center">
                <div>
                  <p className="text-black text-lg font-bold">
                    Recent disbursement history
                  </p>
                  <span className="text-xs font-thin">
                    Here is a list of your recievables from Payment disbursement
                  </span>
                </div>

                {/* <div>
                  <select className="text-xs border border-[#DEDEDEC7] outline-none rounded-[5px] px-5 py-3 cursor-pointer">
                    <option value="" key="">
                      Direct Funding Request
                    </option>
                    <option value="" key="">
                      Early Payment Request
                    </option>
                  </select>
                </div> */}
              </div>

              {/* {selectedTab === "single" && (
                <div className="flex items-center justify-center gap-3">
                  <div
                    className=" text-xs rounded-md py-2.5 px-4 text-white bg-[#2EA923] cursor-pointer"
                    onClick={handleSelectAll}
                    // checked={selectAll}
                  >
                    <p>{selectAllText}</p>
                  </div>
                  <button
                    style={{
                      boxShadow: "2px 3px 10px 0px rgba(0, 0, 0, 0.10)",
                    }}
                    className={`text-xs  rounded-md py-2.5 px-4 text-white ${
                      selectedRows.length === 0
                        ? "cursor-not-allowed bg-[#C2C0C0]"
                        : "cursor-pointer bg-secondaryColor"
                    }`}
                    disabled={selectedRows.length === 0}
                    onClick={() => setAcceptPaymentModal(true)}
                  >
                    <p>Make Payment</p>
                  </button>
                </div>
              )} */}
            </div>
            <div className="pb-3">
              <div className="pb-3">
                <div className="flex px-[24px] gap-5 my-5">
                  <p
                    className={`cursor-pointer text-sm font-bold relative ${
                      selectedTab === "single"
                        ? "text-[#F08000]"
                        : "text-[#959595]"
                    }`}
                    onClick={() => setSelectedTab("single")}
                  >
                    Single Request
                    {selectedTab === "single" && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#F08000] h-0.5 w-5"></span>
                    )}
                  </p>

                  {/* <p
                    className={`cursor-pointer text-sm font-bold relative ${
                      selectedTab === "bulk"
                        ? "text-[#F08000]"
                        : "text-[#959595]"
                    }`}
                    onClick={() => setSelectedTab("bulk")}
                  >
                    Bulk Request
                    {selectedTab === "bulk" && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#F08000] h-0.5 w-5"></span>
                    )}
                  </p> */}
                </div>
                <Table
                  columns={columns}
                  // data={directFundingData?.data}
                  data={paginatedData}
                  progressComponent={<Loading />}
                  // pointer
                  // tableHeader
                  className="mt-5"
                  pagination={false}
                />

                <div className="flex justify-center gap-x-[8px] mt-[20px]">
                  {/* {directFundingData?.data?.length > 10 && (
                    <Pagination
                      // page={page}
                      // startPage={startPage}
                      // setEndPage={setEndPage}
                      // endPage={endPage}
                      // setStartPage={setStartPage}
                      // setPage={setPage}

                      page={page}
                      startPage={startPage}
                      setEndPage={setEndPage}
                      endPage={endPage}
                      setStartPage={setStartPage}
                      setPage={setPage}
                      // totalPages={pendingRequestHistory?.meta?.totalElements}
                      totalPages={directFundingData?.data?.length}
                    />
                  )} */}

                  <Pagination
                    page={page}
                    setPage={setPage}
                    totalPages={Math.ceil(
                      directFundingData.data.length / rowsPerPage
                    )}
                    rowsPerPage={rowsPerPage}
                    setRowsPerPage={setRowsPerPage}
                  />

                  {/* <Pagination
                    page={page}
                    setPage={setPage}
                    totalPages={Math.ceil(
                      directFundingData.data.length / itemsPerPage
                    )}
                  /> */}
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;
