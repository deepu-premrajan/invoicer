import React from "react";

export default function Table({ list, total }) {
  return (
    <>
      <table
        width="100%"
        className="mb-10"
      >
        <thead>
          <tr className="bg-gray-300 p-1">
            <td className="font-bold">Date</td>
            <td className="font-bold">Hours</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, date, hours, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td>{date}</td>
                <td>{hours}</td>
                <td>${amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          Total: ${total.toLocaleString()}
        </h2>
      </div>
    </>
  );
}
