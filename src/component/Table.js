import React from "react";

export default function Table({ description, quantity, 
  price, amount, list, setList }) {
    const totalValue =  list.reduce(function(acc,cur) {
        return acc+cur.amount;
     },0)
     
  return (
    <>
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
                    </td>
                  </tr>
                </React.Fragment>
              ))}
              <tr>
                <td  colSpan = "3" className="font-bold">Total Amount</td>
                <td className="text-center font-bold ">{totalValue} </td>
              </tr>
            </tbody>
          </table>
    </>
  );
}
