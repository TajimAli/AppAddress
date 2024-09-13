import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function District() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [district, setDistrict] = useState('');
  const [districtCode, setDistrictCode] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCountry && selectedState && district) {
      const stateDistricts = JSON.parse(localStorage.getItem(`districts_${selectedCountry}_${selectedState}`)) || [];
      if (!stateDistricts.includes(district)) {
        stateDistricts.push(district);
        localStorage.setItem(`districts_${selectedCountry}_${selectedState}`, JSON.stringify(stateDistricts));
      }
      navigate('/AddCity');
    }
  };

  return (
    <>
      <div>
        <section className="get-in-touch">
          <h1 className="title">Add Your District</h1>
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

            <div className="form-field col-lg-6">
              <input id="district" name="district" value={district} onChange={(e) => setDistrict(e.target.value)} className="input-text js-input" type="district" />
              <label className="label" htmlFor="district">District:</label>
            </div>
            <div className="form-field col-lg-6 ">
              <input id="districtCode" name="districtCode" value={districtCode} onChange={(e) => setDistrictCode(e.target.value)} className="input-text js-input" type="districtCode" />
              <label className="label" htmlFor="districtCode">District Code:</label>
            </div>
            <div className="form-field col-lg-12">
              <input className="submit-btn" type="submit" defaultValue="Submit" />
            </div>
          </form>
        </section>
      </div>
    </>
  )
}
export default District