import React from "react";
export interface Column<T> {
  key: string;
  label: string;
  data: any;
  render?: (value: T[keyof T], row: T, rowIndex: number) => React.ReactNode;
}
interface TableProps<T> {
  column: Column<T>[];
  data: T[];
  rowKey: keyof T | string;
}

const Table = <T extends Record<string, any>>({
  column,
  data,
  rowKey,
}: TableProps<T>) => {
  return (
    <div>
      <table className="w-full overflow-auto ">
        <thead className="bg-[#c3ebfa] divide-y divide-[#EAECF0]  ">
          <tr>
            {column.map((col, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-semibold text-[#667085]  tracking-wider"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className=" bg-white   divide-y divide-[#EAECF0]">
          {/* Table rows would go here */}
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-purple-50">
              {column.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 wrap text-sm text-[#101828]    "
                >
                  {col.render
                    ? col.render(row[col.key], row, rowIndex)
                    : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
