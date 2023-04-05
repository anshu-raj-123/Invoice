import React from "react";
import { useState, useRef } from "react";
import Footer from "./component/Footer";
import Notes from "./component/Notes";
import Table from "./component/Table";
import Dates from "./component/Dates";
import ClientDetails from "./component/ClientDetails";
import MainDetails from "./component/MainDetails";
import Header from "./component/Header";
import TableForm from "./component/TableForm";
import ReactToPrint from "react-to-print";

const App = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const handlePrint = () => {
    window.print();
  };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);

  const componentRef = useRef();
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:mx-w-4xl bg-white rounded shadow">
        <ReactToPrint
          trigger={() => (
            <button
              className="bg-gray-500 text-white font-bold
        py-2 px-8 
       rounded shadow
   border-2 border-blue-500
    hover:bg-transparent 
    hover:text-blue-500
    transition-all duration-300"
            >
              Print / Download
            </button>
          )}
          content={() => componentRef.current}
        />
        {showInvoice ? (
          <div ref={componentRef}>
            <Header handlePrint={handlePrint} />
            <MainDetails name={name} address={address} />
            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
            />
            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />
            <Table
              description={description}
              price={price}
              quantity={quantity}
              amount={amount}
              list={list}
              setList={setList}
            />
            <Notes notes={notes} />
            <Footer
              name={name}
              address={address}
              website={website}
              email={email}
              phone={phone}
              bankAccount={bankAccount}
              bankName={bankName}
            />

            <button
              onClick={() => setShowInvoice(false)}
              className=" mt-5 bg-blue-500 text-white font-bold
               py-2 px-8 
              rounded shadow
          border-2 border-blue-500
           hover:bg-transparent
           hover:text-blue-500
           transition-all duration-300"
            >
              Edit Information
            </button>
          </div>
        ) : (
          <>
            {/* name, address,email, phone, bank name, bank address,
           client name, client address, invoice
          number , invoice date, due date, due notes */}
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Your Full Name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="address">Enter your Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="email">Enter your Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your Email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="website">Enter your Website</label>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    placeholder="Enter your Website"
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone">Enter your Phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your Phone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gaps-10">
                <div className="flex flex-col">
                  <label htmlFor="bankname">Enter your bankname</label>
                  <input
                    type="text"
                    name="bankname"
                    id="bankname"
                    placeholder="Enter your Website"
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="bankaccount">Enter your bankaccount</label>
                  <input
                    type="text"
                    name="bankaccount"
                    id="bankaccount"
                    placeholder="Enter your bankaccount"
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gaps-10">
                <div className="flex flex-col">
                  <label htmlFor="clientname">Enter your Client Name</label>
                  <input
                    type="text"
                    name="clientname"
                    id="clientname"
                    placeholder="Enter Name"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="clientaddress">
                    Enter your Client Address
                  </label>
                  <input
                    type="text"
                    name="clientaddress"
                    id="clientaddress"
                    placeholder="john@example.com"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-3 gaps-10">
                <div className="flex flex-col">
                  <label htmlFor="invoicenumber">Invoice Number</label>
                  <input
                    type="text"
                    name="invoicenumber"
                    id="invoicenumber"
                    placeholder="Invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="invoicedate"> Invoice Date</label>
                  <input
                    type="date"
                    name="invoicedate"
                    id="invoicedate"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="duedate"> Due Date</label>
                  <input
                    type="date"
                    name="duedate"
                    id="duedate"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>
              {/* Table form */}
              <article>
                <TableForm
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                />
              </article>

              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional notes to the client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
              <button
                onClick={() => setShowInvoice(true)}
                className="bg-blue-500 text-white font-bold
              py-2 px-8 
              rounded shadow
              border-2 border-blue-500
              hover:bg-transparent
              hover:text-blue-500
              transition-all duration-300"
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
};
export default App;
