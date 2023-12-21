import React from 'react'
import { BsFillPencilFill, BsFillTrash2Fill } from "react-icons/bs";
import "./Task.css"

export const Task = ({ rows, deleteRow, editRow }) => {
  return (
    <div className='App'>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
      <div className="card animated fadeInDown">
        <h1>Tasks</h1>
        <table>
          <thead>
          <tr>
            <th>Tasks</th>
            <th className="expand">Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
            </thead>
            <tbody>
            {rows && rows.map((row, idx) => {
            const statusText =
              row.status.charAt(0).toUpperCase() + row.status.slice(1);
            return (
              <tr key={idx}>
                <td>{row.tasks}</td>
                <td className="expand">{row.description}</td>
                <td>
                  <span className={`label label-${row.status}`}>
                    {statusText}
                  </span>
                </td>
              <td className="fit">
                <span className="actions">
                  <BsFillTrash2Fill
                  className="delete-btn"
                    onClick={() => deleteRow(idx)}
                  />
                  <BsFillPencilFill
                  className="edit-btn"
                    onClick={() => editRow(idx)}
                  />
                </span>
              </td>
            </tr>
            );
          })}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  )

}
