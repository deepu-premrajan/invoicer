import React, { useState, useRef } from "react";

import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Header from "./components/Header";
import PersonalInformation from "./components/PersonalInformation";
import ClientInformation from "./components/ClientInformation";
import InvoiceInformation from "./components/InvoiceInformation";
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="m-5 p-5 bg-white rounded shadow">
        {showInvoice ? (
          <>
            <ReactToPrint
              trigger={() => (
                <button
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
          duration-300 mb-5"
                >
                  Print/Download
                </button>
              )}
              content={() => componentRef.current}
            />
            <div
              ref={componentRef}
              className="p-5"
            >
              <Header handlePrint={handlePrint} />

              <PersonalInformation
                name={name}
                address={address}
              />

              <ClientInformation
                clientName={clientName}
                clientAddress={clientAddress}
              />

              <InvoiceInformation
                invoiceNumber={invoiceNumber}
                invoiceDate={invoiceDate}
                dueDate={dueDate}
              />

              <Table
                date={date}
                hours={hours}
                amount={amount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />

              <Notes notes={notes} />

              <Footer
                name={name}
                address={address}
                email={email}
                phone={phone}
                bankAccount={bankAccount}
                bankName={bankName}
              />
            </div>
            <button
              onClick={() => setShowInvoice(false)}
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
                    duration-300"
            >
              Edit Information
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label htmlFor="bankName">Bank Name</label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                placeholder="Enter your bank name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />

              <label htmlFor="bankAccount">Bank Account Number</label>
              <input
                type="text"
                name="bankAccount"
                id="bankAccount"
                placeholder="Enter your bank account number"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />

              <label htmlFor="clientName">Client's Name</label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Enter your client's name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />

              <label htmlFor="clientAddress">Client's Address</label>
              <input
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder="Enter your client's address"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />

              <label htmlFor="invoiceNumber">Invoice Number</label>
              <input
                type="text"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="Invoice Number"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />

              <label htmlFor="invoiceDate">Invoice Date</label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Invoice Date"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />

              <label htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder="Due Date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />

              {/* This is our table form */}
              <article>
                <TableForm
                  date={date}
                  setDate={setDate}
                  hours={hours}
                  setHours={setHours}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
              </article>

              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional notes for the client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

              <button
                onClick={() => setShowInvoice(true)}
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
              duration-300"
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
