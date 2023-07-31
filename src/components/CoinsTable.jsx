import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, useGlobalFilter } from "react-table";
import { useQuery } from "@tanstack/react-query";
import GlobalFilter from "./GlobalFilter";
import CoinsRequest from "./CoinsRequest";
import { BiLoaderAlt } from "react-icons/bi";
import { MdOutlineArrowBack } from "react-icons/md";

const CoinsTable = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const initialDataSize = 25;

  const handleShowMoreClick = () => {
    setShowMore(true);
  };

  const {
    isLoading,
    data: coins = [], //ALWAYS PUT AN INITIAL VALUE, AN EMPTY ARRAY SO THAT IT WONT GIVE AN ERROR WHEN
    isError, // DATA IS STILL NOT AVAILABLE
    error,
  } = useQuery({
    queryKey: ["coins"],
    queryFn: CoinsRequest,
    refetchOnWindowFocus: false,
  });

  const tableData = useMemo(() => coins, [isLoading, error]);
  const tableCols = useMemo(
    () => [
      {
        Header: "#",
        id: "index",
        accessor: (row, index) => index + 1,
      },

      {
        Header: "Coin",
        accessor: (dataRow) => ({
          image: dataRow.image,
          symbol: dataRow.symbol,
        }),
        Cell: ({ cell }) => (
          <div className="w-full flex justify-center items-center gap-2 p-2">
            <div className="w-[30%] flex items-center gap-2">
              <img
                src={cell.value.image}
                alt="Coin"
                style={{ width: "35px", height: "35px" }}
              />
              <span className="text-lg uppercase">{cell.value.symbol}</span>
            </div>
          </div>
        ),
      },
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ cell }) => <div>{cell.value}</div>,
      },
      {
        Header: "Price",
        accessor: "current_price",
        Cell: ({ cell }) =>
          `$${parseFloat(cell.value).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`,
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
      {
        Header: "Volume",
        accessor: "total_volume",
        Cell: ({ cell }) => `$${parseFloat(cell.value).toLocaleString()}`,
      },
      {
        Header: "Market Cap",
        accessor: "market_cap",
        Cell: ({ cell }) => `$${parseFloat(cell.value).toLocaleString()}`,
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
      <div className="w-full lg:max-w-[75%]">
        <button className="self-start" onClick={() => navigate("/")}>
          <MdOutlineArrowBack size={30} />
        </button>
      </div>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      {isLoading && <BiLoaderAlt size={30} className="animate-spin" />}
      {isError && <h1>Error fetching data, please try again later.</h1>}
      <div className="w-full lg:max-w-[75%] overflow-x-scroll rounded-lg shadow-md shadow-violet-500 scrollbar-thin scrollbar-rounded scrollbar-track-violet-500 scrollbar-thumb-gray-300 lg:scrollbar-none">
        <table
          className="w-full min-w-[800px] text-center bg-gray-800 rounded-lg"
          {...getTableProps()}
        >
          <thead className="text-lg bg-violet-500 h-20">
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
            {rows
              .slice(0, showMore ? undefined : initialDataSize)
              .map((row) => {
                prepareRow(row);
                return (
                  <tr
                    className="shadow-md hover:shadow-[#FED700] transition ease-in-out"
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell) => (
                      <td
                        className="hover:scale-[1.05] transition ease-in-out"
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
        {/* Show "Show More" button if there are more items to show */}
        {rows.length > initialDataSize && !showMore && (
          <button className="my-2 py-3 px-6" onClick={handleShowMoreClick}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default CoinsTable;
