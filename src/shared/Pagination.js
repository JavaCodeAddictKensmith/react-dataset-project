import {
  PAIconPaginationLeft,
  PAIconPaginationRight,
} from "../assets/images/svg";
import React from "react";
import Button from "./Button";

// Pagination Component (Refactored)
const Pagination = ({
  page,
  setPage,
  totalPages,
  rowsPerPage,
  setRowsPerPage,
}) => {
  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(0); // Reset to the first page when rows per page changes
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Button
          neutral
          disabled={page === 0}
          onClick={handlePrev}
          className="pagination-btn"
        >
          <PAIconPaginationLeft />
        </Button>
        <span className="px-2">{`Page ${page + 1} of ${totalPages}`}</span>
        <Button
          neutral
          disabled={page >= totalPages - 1}
          onClick={handleNext}
          className="pagination-btn"
        >
          <PAIconPaginationRight />
        </Button>
      </div>
      <div>
        <label htmlFor="rowsPerPage" className="mr-2 text-sm">
          Rows per page:
        </label>
        <select
          id="rowsPerPage"
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className="border rounded px-2 py-1 text-sm"
        >
          {[10, 25, 50].map((rows) => (
            <option key={rows} value={rows}>
              {rows}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

//working firstside

/*const Pagination = ({ page, setPage, totalPages }) => {
  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="flex items-center">
      <Button
        neutral
        disabled={page === 0}
        onClick={handlePrev}
        className="pagination-btn"
      >
        <PAIconPaginationLeft />
      </Button>
      <span className="px-2">{`Page ${page + 1} of ${totalPages}`}</span>
      <Button
        neutral
        disabled={page >= totalPages - 1}
        onClick={handleNext}
        className="pagination-btn"
      >
        <PAIconPaginationRight />
      </Button>
    </div>
  );
};


*/

// const Pagination = ({
//   startPage,
//   setStartPage,
//   endPage,
//   setEndPage,
//   page,
//   setPage,
//   totalPages,
// }) => {
//   const length = Math.ceil(totalPages / 10);
//   const numbers = Array.from({ length }, (_, index) => index + 1);

//   const handleNext = () => {
//     const nextPage = page + 1;
//     if (nextPage < length) {
//       setPage(nextPage);
//       if (nextPage >= endPage) {
//         setStartPage(startPage + 1);
//         setEndPage(endPage + 1);
//         setEndPage(Math.min(endPage + 1, length));
//       }
//     }
//   };

//   const handlePrev = () => {
//     const prevPage = page - 1;
//     if (prevPage >= 0) {
//       setPage(prevPage);
//       if (prevPage < startPage) {
//         setStartPage(Math.max(startPage - 1, 0));
//         setEndPage(endPage - 1);
//       }
//     }
//   };

//   return (
//     <>
//       <Button
//         neutral
//         disabled={page === 0}
//         className="w-[24px] h-[24px] rounded flex justify-center items-center bg-white border border-arthensGray"
//         onClick={handlePrev}
//       >
//         <PAIconPaginationLeft />
//       </Button>
//       {numbers.slice(startPage, endPage).map((number, idx) => {
//         const pageIndex = startPage + idx;
//         return (
//           <Button
//             neutral
//             key={idx}
//             onClick={() => setPage(pageIndex)}
//             className={`w-[24px] h-[24px] rounded flex justify-center font-bold text-sm items-center ${
//               page === pageIndex
//                 ? "bg-white border border-secondaryColor text-secondaryColor"
//                 : "bg-white border border-arthensGray"
//             }`}
//           >
//             {number}
//           </Button>
//         );
//       })}
//       {page > 5 && (
//         <Button
//           neutral
//           className="w-[24px] h-[24px] rounded flex justify-center items-center bg-white border border-arthensGray"
//         >
//           &hellip;
//         </Button>
//       )}
//       {/* Conditionally render the "Next" button */}
//       {page < length - 1 && (
//         <Button
//           neutral
//           className="w-[24px] h-[24px] rounded flex justify-center items-center bg-white border border-arthensGray"
//           onClick={handleNext}
//         >
//           <PAIconPaginationRight />
//         </Button>
//       )}
//     </>
//   );
// };

export default Pagination;
