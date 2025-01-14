import React from "react";
import DataTable from "react-data-table-component";
import styled, { css } from "styled-components";
import { FONTSIZES, FONTWEIGHTS } from "../../constants/font-spec";

const Table = ({
  data,
  columns,
  handleRowSelect,
  onRowClicked,
  className,
  selectableRowsComponent,
  selectableRows,
  progressComponent,
  progressPending,
  pointer,
  pagination,
  paginationServer,
  paginationTotalRows,
  onChangeRowsPerPage,
  onChangePage,
  border,
  tableHeader,
  selectableRowDisabled,
  tableHeaderPink,
  selectableRowSelected,
  dropdown,
}) => {
  const TableData = React.useMemo(() => data, [data]);
  const TableColumns = React.useMemo(() => columns, [columns]);

  return (
    <TableWrapper
      className={className}
      pointer={pointer}
      border={border}
      tableHeader={tableHeader}
      tableHeaderPink={tableHeaderPink}
      dropdown={dropdown}
    >
      <DataTable
        columns={TableColumns}
        data={TableData || []}
        onSelectedRowsChange={handleRowSelect}
        selectableRowDisabled={selectableRowDisabled}
        onRowClicked={onRowClicked}
        selectableRows={selectableRows}
        selectableRowsComponent={selectableRowsComponent}
        progressPending={progressPending}
        progressComponent={progressComponent}
        selectableRowSelected={selectableRowSelected}
        pagination={pagination}
        paginationServer={paginationServer}
        paginationTotalRows={paginationTotalRows}
        onChangeRowsPerPage={onChangeRowsPerPage}
        onChangePage={onChangePage}
      />
    </TableWrapper>
  );
};

export default Table;

const TableWrapper = styled.div`
  .rdt_Table {
    width: 100%; /* Ensure the table fits the width of the container */
    min-height: 60vh;
    overflow-x: hidden; /* Hide horizontal overflow */
    overflow-y: auto;
    ${({ dropdown }) =>
      dropdown &&
      css`
        padding-bottom: 160px;
      `};
  }

  .rdt_TableRow {
    height: 57px;
    border-bottom: 0.0852273px solid rgba(91, 91, 91, 0.4);
    border-top: 0;
    font-size: ${FONTSIZES.xsmall};
    font-weight: ${FONTWEIGHTS.medium};
    color: #11192a;
    cursor: ${({ pointer }) => (pointer ? "pointer" : "auto")};
    ${({ border }) =>
      !border &&
      css`
        padding: 15px;
      `};
  }

  .rdt_TableHeadRow {
    height: 55px;
    background-color: #efefef;
    border-bottom: 0;
    padding: 15px;
    font-weight: ${FONTWEIGHTS.bold};
    font-size: ${FONTSIZES.xsmall};
    color: #11192a;
    ${({ border }) =>
      border &&
      css`
        border: 0.0852273px solid rgba(91, 91, 91, 0.4);
      `};
    ${({ tableHeader }) =>
      tableHeader &&
      css`
        background-color: #fafafa;
      `};
    ${({ tableHeaderPink }) =>
      tableHeaderPink &&
      css`
        border-radius: 20px 20px 0px 0px;
        border-bottom: 0.8px solid rgba(240, 128, 0, 0.37);
        background: rgba(240, 128, 0, 0.07);
      `};
  }

  .rdt_TableCell {
    ${({ border }) =>
      border &&
      css`
        border-right: 0.0852273px solid rgba(91, 91, 91, 0.4);
      `};
  }

  .rdt_Pagination {
    justify-content: center;
  }

  .fxSmWS {
    border: 1px solid #ffa500;
    padding: 5px 4px;
    color: #ffa500;
  }

  .fSGGmj {
    width: 100%;
    height: 20px;
  }

  #pagination-previous-page,
  #pagination-next-page {
    border-radius: 3px;
    margin: 0 3px;
    border: 1px solid #dfe3e8;
  }

  #pagination-first-page,
  #pagination-last-page {
    display: none;
  }
`;
