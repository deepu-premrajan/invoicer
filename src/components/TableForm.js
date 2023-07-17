import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";

export default function TableForm({
  date,
  setDate,
  hours,
  setHours,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) {
  const [isEditing, setIsEditing] = useState(false);

  // Submit form function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !hours) {
      alert("Please fill in all fields.");
    } else {
      const newItems = {
        id: uuidv4(),
        date: date,
        hours: hours,
        amount: amount,
      };
      setDate("");
      setHours("");
      setAmount("");
      setList([...list, newItems]);
      setIsEditing(false);
    }
  };

  // Calculate amount function

  useEffect(() => {
    const calculateAmount = (hours) => {
      setAmount(hours * 80);
    };

    calculateAmount(hours);
  }, [hours, amount, setAmount]);

  // Calculate total amount function

  useEffect(() => {
    let rows = document.querySelectorAll(".amount");
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    }
  });

  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setDate(editingRow.date);
    setHours(editingRow.hours);
    setAmount(editingRow.amount);
  };

  // Delete function
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="md:grid grid-cols-3 gap-10 md:mt-10">
          <div className="flex flex-col">
            <label htmlFor="date of session">Date of Session</label>
            <input
              type="date"
              name="date of session"
              id="date of session"
              placeholder="Session Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="date of session">Hours</label>
            <input
              type="text"
              name="hours"
              id="hours"
              placeholder="Hours"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="date of session">Amount</label>
            <p>{amount}</p>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500
              text-white
              font-bold
              py-2
              px-8
              rounded
              shadow
              border-2
              border-blue-500
              hover:bg-transparent
              hover:text-blue-500
              transition-all
              duration-300
              mb-5"
        >
          {isEditing ? "Edit Session Details" : "Add Session Details"}
        </button>
      </form>

      {/* Table items */}

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
                <td className="amount">{amount}</td>
                <td>
                  <button onClick={() => deleteRow(id)}>
                    <AiFillDelete className="text-red-500 text-xl" />
                  </button>
                </td>
                <td>
                  <button onClick={() => editRow(id)}>
                    <AiOutlineEdit className="text-green-500 text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="text-gray-800 text-4xl font-bold flex items-end justify-end">
          Total: ${total.toLocaleString()}
        </h2>
      </div>
    </>
  );
}
