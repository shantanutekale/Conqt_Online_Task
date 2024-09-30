import React from 'react'
import {useSelector} from 'react-redux'

function DataTable() {
    const formData=useSelector((state)=>state.form.data)
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Item name</th>

                </tr>
            </thead>
            <tbody>
                {formData.map((item,index)=>(
                <tr key={index}>
                    <td>
                        <td>{item.itemName}</td>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default DataTable