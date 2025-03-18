import React from "react";
import './receipeList.scss'
const ReceipeList = ({ data }) => {
  const {name, image, items} = data[0]
  return <div className="receipe-list">
    <div className="heading">
      <h1>{name}</h1>
    </div>
    <div className="receipe-list-container">
      {items.map((item) => (
        <div className="receipe-item" key={item.id}>
          {/*  Receipie with price Table  */}
          <table>
            <tr>
              <td>{item.name}</td>
              <td>{`$ ${item.price}`}</td>
            </tr>
          </table>

        </div>
      ))}
    </div>
  </div>;
};

export default ReceipeList;
