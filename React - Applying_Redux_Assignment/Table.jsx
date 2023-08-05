import React from 'react';
import TableRow from './TableRow';

const Table = ({ data, onEdit, onDelete }) => {
  return (
    <table className='table table-info'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <TableRow
            key={item.id}
            data={item}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
