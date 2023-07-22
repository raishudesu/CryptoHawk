import React, { useState, useMemo, useEffect } from "react";
import { useTable, useGlobalFilter } from "react-table";
import GlobalFilter from "./GlobalFilter";
import coinsRequest from "./CoinsRequest";

const CoinsTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await coinsRequest();
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const tableData = useMemo(() => data, [data]);
  const tableCols = useMemo(
    () => [
      {
        Header: "Coin",
        accessor: "image",
        Cell: ({ cell }) => (
          <div className="w-full flex justify-center p-2">
            <img
              src={cell.value}
              alt="Coin"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
        ), // Render the image
      },
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ cell }) => (
          <span className="text-xl font-semibold">{cell.value}</span>
        ),
      },
      {
        Header: "Symbol",
        accessor: "symbol",
      },
      {
        Header: "Current Price",
        accessor: "current_price",
        Cell: ({ cell }) =>
          `$${parseFloat(cell.value).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`,
      },
      {
        Header: "Market Cap",
        accessor: "market_cap",
        Cell: ({ cell }) => `$${parseFloat(cell.value).toLocaleString()}`,
      },
      {
        Header: "24h",
        accessor: "price_change_percentage_24h",
        Cell: ({ cell }) => (
          <span
            className={
              parseFloat(cell.value) < 0 ? "text-red-500" : "text-green-500"
            }
          >
            {cell.value}%
          </span>
        ),
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns: tableCols,
      data: tableData,
    },
    useGlobalFilter
  );
  const { globalFilter } = state;
  return (
    <div className="w-full min-h-screen max-h-fit p-6 flex flex-col gap-6 overflow-hidden items-center">
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div className="w-full lg:max-w-[75%] overflow-x-scroll rounded-lg shadow-md shadow-violet-500 scrollbar-thin scrollbar-rounded scrollbar-track-violet-500 scrollbar-thumb-gray-300 lg:scrollbar-none">
        <table
          className="w-full min-w-[800px] text-center bg-gray-800 rounded-lg"
          {...getTableProps()}
        >
          <thead className="text-xl bg-violet-500 h-20">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      className="border-b-[1px] border-r-[1px] border-gray-500"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinsTable;
