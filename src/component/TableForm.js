import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TableForm({
  description,
  setDescription,
  quantity,
  setAmount,
  setQuantity,
  amount,
  price,
  setPrice,
  list,
  setList,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItems = {
      id: uuidv4(),
      description,
      quantity,
      price,
      amount,
    };
    setDescription("");
    setQuantity("");
    setPrice("");
    setAmount("");
    setList([...list, newItems]);
  };
  const remove = (index, e) => {
    setList(list.filter((v, i) => i !== index));
  };
  useEffect(() => {
    const calculateAmount = price * quantity;
    setAmount(calculateAmount);
  }, [amount, price, quantity, setAmount]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="description">Item Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item Description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Enter qty"
              required
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <p>{amount}</p>
          </div>
        </div>
        <button
          type="submit"
          className=" mb-5 bg-blue-500 text-white font-bold
               py-2 px-8 
              rounded shadow
          border-2 border-blue-500
           hover:bg-transparent
           hover:text-blue-500
           transition-all duration-300"
        >
          Add Table Item
        </button>
      </form>

      <section>
        {/* <ul className="flex">
          {list.map(({ id, description, quantity, price, amount }) => (
              <React.Fragment key={id}>
              <li>{description}</li>
            <li>{quantity}</li>
            <li>{price}</li>
            <li>{amount}</li>
            </React.Fragment>
          ))}
         
        </ul> */}

        {list.length !== 0 ? (
          <table className="table-auto w-full text-center border">
            <thead>
              <tr className="border">
                <th>Description</th>
                <th>Qunatity</th>
                <th>Price</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {list.map((ele, index) => (
                <React.Fragment key={ele.id}>
                  <tr className="border">
                    <td>{ele.description} </td>
                    <td> {ele.quantity}</td>
                    <td>{ele.price} </td>
                    <td>{ele.amount} </td>
                    <td>
                      <button
                        className=" mt-2 rounded items-center
                         bg-blue-600 text-white font-light
                         rounded shadow
                         border-2 border-blue-500
                         hover:bg-transparent
                         hover:text-green-500
                         transition-all duration-300"
                        onClick={(e) => remove(index, e)}
                      >
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="28"
                          viewBox="0 96 960 960"
                          width="28"
                        >
                          <path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        ) : (
          " "
        )}
      </section>
    </>
  );
}
