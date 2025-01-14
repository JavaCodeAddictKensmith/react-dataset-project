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

  const [page, setPage] = useState(1);
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(10);
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
    ],
  };

  const directFundingDataBulk = {
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
        noOfInvoices: 2,
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
        noOfInvoices: 2,
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
        noOfInvoices: 4,
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
        noOfInvoices: 3,
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
    ],
  };

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

  const columnsBulk = [
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
          No of Invoices
        </span>
      ),
      selector: (row) => (
        <div className="text-center flex justify-center w-full">
          {row?.noOfInvoices}
        </div>
      ),
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
    <>
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

                  <p
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
                  </p>
                </div>
                {selectedTab === "bulk" ? (
                  <Table
                    columns={columnsBulk}
                    data={directFundingDataBulk?.data}
                    onRowClicked={(row) => {
                      // bulkDetails(row.invoiceIds, row?.id);
                    }}
                    // progressPending={isLoading}
                    progressComponent={<Loading />}
                    pointer
                    tableHeader
                    className="mt-5"
                  />
                ) : (
                  <Table
                    columns={columns}
                    data={directFundingData?.data}
                    onRowClicked={(row) => {
                      // bulkDetails(row.invoiceIds, row?.id);
                    }}
                    progressComponent={<Loading />}
                    pointer
                    tableHeader
                    className="mt-5"
                  />
                )}
                <div className="flex justify-center gap-x-[8px] mt-[20px]">
                  {directFundingData?.data?.length > 0 && (
                    <Pagination
                      page={page}
                      startPage={startPage}
                      setEndPage={setEndPage}
                      endPage={endPage}
                      setStartPage={setStartPage}
                      setPage={setPage}
                      totalPages={directFundingData?.length}
                    />
                  )}
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </>
  );
};

export default TransactionHistory;
