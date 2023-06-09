import parse from 'html-react-parser'

const Table3_col = ({ menus, title }) => {
  return (
    <>
      <h3>{title}</h3>
      <table className="menus table-auto">
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {menus.map(menu => (
            <tr key={menu.id}>
              <td className="row_number">{menu.id}</td>
              <td>{menu.item}</td>
              <td>
                {parse(menu.description)}
                <span className="winePrices">
                  {menu.price1 && menu.price2 && menu.price3 ? (
                    <div className="flex flex-col md:flex-row justify-center ">
                      <i>175ml: &pound; {menu.price1.toFixed(2)}</i>
                      <i>250ml: &pound; {menu.price2.toFixed(2)}</i>
                      <i>bottle: &pound; {menu.price3.toFixed(2)}</i>
                    </div>
                  ) : (
                    ''
                  )}
                  {!menu.price1 && !menu.price2 && menu.price3 && (
                    <i>bottle: &pound; {menu.price3.toFixed(2)}</i>
                  )}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table3_col
