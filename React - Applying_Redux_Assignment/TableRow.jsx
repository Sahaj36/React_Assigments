import React from 'react';

const TableRow = ({ data, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>
        <button onClick={() => onEdit(data)}className='btn btn-primary my-1 mx-1'>Read</button>
        <button onClick={() => onEdit(data)}className='btn btn-success my-1 mx-1'>Edit</button>
        <button onClick={() => onDelete(data.id)} className='btn btn-danger my-1 mx-1'>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
