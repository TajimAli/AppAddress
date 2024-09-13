import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const StateTable = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('State')) || [];
        setData(storedData);
    }, []);

    const handleDelete = (index) => {
        if (window.confirm("Do You Want To Delete This Data?")) {
            const updatedData = data.filter((_, i) => i !== index);
            localStorage.setItem('State', JSON.stringify(updatedData));
            setData(updatedData);
        }
    };
    return (
        <div>
            <h1></h1>
            <div className="tableData">
                <button onClick={() => navigate('/State')} style={{ marginLeft: '33%' }}>Add State</button>
                <table border="1" class="table" style={{ width: '500px', marginLeft: '30%' }}>
                    <thead class="thead-dark">
                        <tr>
                            <th>No.</th>
                            <th>Countrys</th>
                            <th>States</th>
                            <th>States Code</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.countryName}</td>
                                    <td>{item.stateName}</td>
                                    <td>{item.stateCode}</td>
                                    <td><Link to={`/Stateform/${item.index}`} className='edit'>Edit</Link>
                                        <Link onClick={() => handleDelete(index)} className='Delete'>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>No data Available</tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StateTable;