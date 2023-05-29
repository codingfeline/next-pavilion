import parse from 'html-react-parser'

const Table4col_1_price_per_person = ({ menus, title }) => {
  return (
    <>
      <h3>{title}</h3>
      <table className="menus table-auto">
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Description</th>
            <th className="price">Price</th>
          </tr>
        </thead>
        <tbody>
          {menus.map(menu => (
            <tr key={menu.id}>
              <td className="row_number">{menu.id}</td>
              <td className="item">{menu.item}</td>
              <td>{parse(menu.description)}</td>
              <td className="price2">
                &pound; {menu.price1.toFixed(2)}
                <span className="setMenu">per person</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table4col_1_price_per_person
