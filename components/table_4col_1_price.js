import React from 'react'

const Table4col_1_price = ({ menus, title }) => {
  return (
    <>
      <h3>{title}</h3>
      <table className="menus table-auto">
        <thead>
          <tr>
            <th class="row_number"></th>
            <th>Item</th>
            <th>Description</th>
            <th class="price">Price</th>
          </tr>
        </thead>
        <tbody>
          {menus.map(menu => (
            <tr key={menu.id}>
              <td>{menu.id}</td>
              <td>{menu.item}</td>
              <td>{menu.description}</td>
              <td className="price">&pound; {menu.price1.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table4col_1_price
