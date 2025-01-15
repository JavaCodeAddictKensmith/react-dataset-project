import React, { useState } from "react";
import Table from "../components/table/Table";
import Card from "../shared/Card";

import Pagination from "../shared/Pagination";

import * as XLSX from "xlsx";
import Loading from "../shared/Loading";

import { PAIconDownload } from "../assets/images/svg";
import { directFundingData } from "../utils/mockData/tableData";

const TransactionHistory = () => {
  const [selectedTab, setSelectedTab] = useState("single");

  const formatAmount = (amount) => {
    if (typeof amount !== "number") return "0.00";
    return amount?.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const paginatedData = React.useMemo(() => {
    const start = page * rowsPerPage;
    return directFundingData.data.slice(start, start + rowsPerPage);
  }, [page, rowsPerPage]);

  const [status, setStatus] = useState("");

  const filteredBids = paginatedData?.filter((bid) => {
    if (status === "") return true;
    if (status === "Early Payment Offers")
      return bid?.fundingChannel === "Early Payment Offers";

    //  Direct Funding

    if (status === "Invoicing") return bid?.fundingChannel === "Invoicing";
    if (status === "Direct Funding")
      return bid?.fundingChannel === "Direct Funding";

    // Open Market
    //  EarlyPayment Request
    if (status === "PFP") return bid?.fundingChannel === "PFP";
    if (status === "Open Market") return bid?.fundingChannel === "Open Market";
    if (status === "Closed Market")
      return bid?.fundingChannel === "Closed Market";
    if (status === "EarlyPayment Request")
      return bid?.fundingChannel === "EarlyPayment Request";
    return true;
  });

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      paginatedData?.map((row) => ({
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
        <div className="gap-3 flex relative  flex-wrap">
          <button
            onClick={exportToExcel}
            className="py-2.5 text-base font-semibold px-5 rounded-[5px] bg-white border-[#DEDEDE] shadow-sm mr-2 flex items-center justify-center gap-1.5"
          >
            Export {<PAIconDownload className="accent-gray300 w-4" />}
          </button>
        </div>

        <div className=" flex justify-end  items-center gap-2">
          {" "}
          <div>
            <select
              className="shadow-sm text-sm focus:outline-none cursor-pointer h-[37px] px-5 py-2.5 rounded-[5px] border border-[#949494] justify-start items-end gap-2 inline-flex md:min-w-[12.5rem]"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="" key="all-bids">
                All
              </option>
              <option value="Early Payment Offers" key="Early-Payment-Offers">
                Early Payment Offers
              </option>
              <option value="Invoicing" key="Invoicing">
                Invoicing
              </option>
              <option value="Direct Funding" key="direct-funding">
                Direct Funding
              </option>
              <option value="PFP" key="pfp">
                PFP
              </option>
              <option value="Open Market" key="open-market">
                Open Market
              </option>
              {/* EarlyPayment Request */}
              <option value="Closed Market" key="closed-market">
                Closed Market
              </option>
              <option value="EarlyPayment Request" key="earlyPayment-request">
                EarlyPayment Request
              </option>
            </select>
          </div>
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
                  <span className="text-base font-thin">
                    Here is a list of your recievables from Payment disbursement
                    <br />
                    Note (To sort the below table, click on the column headers)
                  </span>
                </div>
              </div>
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
                </div>
                <Table
                  columns={columns}
                  data={filteredBids}
                  progressComponent={<Loading />}
                  // pointer
                  // tableHeader
                  className="mt-5"
                  pagination={false}
                />

                <div className="flex justify-center gap-x-[8px] mt-[20px]">
                  <Pagination
                    page={page}
                    setPage={setPage}
                    totalPages={Math.ceil(
                      directFundingData.data.length / rowsPerPage
                    )}
                    rowsPerPage={rowsPerPage}
                    setRowsPerPage={setRowsPerPage}
                  />
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
