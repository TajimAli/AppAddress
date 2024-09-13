import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function City() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [city, setcity] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const storedCountries = JSON.parse(localStorage.getItem('countries')) || [];
    setCountries(storedCountries);
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const countryStates = JSON.parse(localStorage.getItem(`states_${selectedCountry}`)) || [];
      setStates(countryStates);
      setSelectedState('');
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedState) {
      const countryStatesDistrict = JSON.parse(localStorage.getItem(`districts_${selectedCountry}_${selectedState}`)) || [];
      setDistricts(countryStatesDistrict);
      setSelectedDistrict('');
    }
  }, [selectedCountry, selectedState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCountry && selectedState && selectedDistrict && city) {
      const districtsCity = JSON.parse(localStorage.getItem(`citys_${selectedCountry}_${selectedState}_${selectedDistrict}`)) || [];
      if (!districtsCity.includes(city)) {
        districtsCity.push(city);
        localStorage.setItem(`citys_${selectedCountry}_${selectedState}_${selectedDistrict}`, JSON.stringify(districtsCity));
      }
      navigate('/fill-form');
    }
  };
  return (
    <>
      <div>
        <section className="get-in-touch">
          <h1 className="title">Add Your City</h1>
          <form onSubmit={handleSubmit} className="contact-form row">
            <div className="form-field col-lg-5">
              <label htmlFor="country">Country:</label>
              <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                <option className="input-text js-input">--Select Your Country--</option>
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="form-field col-lg-5">
              <label htmlFor="country">State:</label>
              <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
                <option className="input-text js-input">--Select Your State--</option>
                {states.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="form-field col-lg-5">
              <label htmlFor="country">District:</label>
              <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
                <option className="input-text js-input">--Select Your District--</option>
                {districts.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div className="form-field col-lg-6">
              <input id="city" name="city" value={city} onChange={(e) => setcity(e.target.value)} className="input-text js-input" type="city" />
              <label className="label" htmlFor="city">City:</label>
            </div>
            <div className="form-field col-lg-12">
              <input className="submit-btn" type="submit" defaultValue="Submit" />
            </div>
          </form>
        </section>


        {/* <table border="1" style={{ marginTop: '20px', width: '100%', textAlign:'center' }}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Country</th>
            <th>State</th>
            <th>District</th>
            <th>City</th>
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
      </table> */}




      </div>
    </>
  )
}
export default City