import React from 'react';
import '../style/CartTable.css';

function CartTable({ products }) {
  return (
    <div className='center'>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Discount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.discount}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
