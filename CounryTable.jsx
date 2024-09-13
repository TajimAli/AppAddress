import React, { useState, useEffect } from 'react';

const TableData = () => {
  const [formData, setFormData] = useState({ name: '', age: '' });
  const [dataList, setDataList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('dataList')) || [];
    setDataList(storedData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedList = dataList.map((item, index) =>
        index === editIndex ? formData : item
      );
      setDataList(updatedList);
      localStorage.setItem('dataList', JSON.stringify(updatedList));
      setEditIndex(null);
    } else {
      // Add new entry
      const updatedList = [...dataList, formData];
      setDataList(updatedList);
      localStorage.setItem('dataList', JSON.stringify(updatedList));
    }
    setFormData({ name: '', age: '' });
  };

  const handleEdit = (index) => {
    setFormData(dataList[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedList = dataList.filter((_, i) => i !== index);
    setDataList(updatedList);
    localStorage.setItem('dataList', JSON.stringify(updatedList));
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>Form Data Management</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
        </div>
        <div>
          <label>Age:</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} required/>
        </div>
        
        <button type="submit">{editIndex !== null ? 'Update' : 'Add'} Data</button>
      </form>

      <table border="1" style={{ marginTop: '20px', width: '100%', textAlign:'center' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;