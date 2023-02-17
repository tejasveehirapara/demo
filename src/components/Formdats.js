import React from 'react'
import { useState } from 'react'

function Formdats() {

const [itemList, setitemList] = useState([])

  return (
    <div>
          <tbody>
                    {itemList.map((value, key) => (
                        <tr key={key}>
                            <td>{value.itemId}</td>
                            <td>{value.item.itemPrice}</td>
                            <td>{value.itemCount}</td>
                            <td>{value.item.itemPrice * value.itemCount}</td>      //not woring this
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>total here</td>
                    </tr>
                </tbody>
    </div>
  )
}

export default Formdats