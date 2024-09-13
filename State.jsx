import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function State() {
  const { index } = useParams();
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [state, setState] = useState({ countryName: '', stateName: '', stateCode: '' });

  useEffect(() => {
    if (index) {
      const storedData = JSON.parse(localStorage.getItem('State')) || [];
      const item = storedData.find(item => item.index === index);
      if (item) {
        setState(item);
      }
    }
  }, [index]);


  useEffect(() => {
    const storedCountries = JSON.parse(localStorage.getItem('countries')) || [];
    setCountries(storedCountries);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value, })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('State')) || [];
    if (index) {
      const updatedData = storedData.map(item => item.index === index ? state : item);
      localStorage.setItem('State', JSON.stringify(updatedData));
    } else {
      state.index = Date.now().toString();
      storedData.push(state);
      localStorage.setItem('State', JSON.stringify(storedData));
    }
    // navigate('/StateTable');



    if (selectedCountry && state.stateName) {
      const countryStates = JSON.parse(localStorage.getItem(`states_${selectedCountry}`)) || [];
      if (!countryStates.includes(state.stateName)) {
        countryStates.push(state.stateName);
        localStorage.setItem(`states_${selectedCountry}`, JSON.stringify(countryStates));
      }
      navigate('/district');
    }
  };

  return (
    <>
      <div>
        <section className="get-in-touch">
          {/* <h1 className="title">Add Your State</h1> */}
          <h1 className="title">{index ? 'Edit Data' : 'Add Data'}</h1>
          <form className="contact-form row" onSubmit={handleSubmit}>
            <div className="form-field col-lg-6">
              <label htmlFor="countryName">Country:</label>
              <select name='countryName' value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                <option className="input-text js-input">--Select Your Country--</option>
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="form-field col-lg-6">
              <input id="stateName" name="stateName" type="stateName" value={state.stateName} onChange={handleChange} className="input-text js-input" />
              <label className="label" htmlFor="stateName">State:</label>
            </div>
            <div className="form-field col-lg-6 ">
              <input id="stateCode" name="stateCode" type="stateCode" value={state.stateCode} onChange={handleChange} className="input-text js-input" />
              <label className="label" htmlFor="stateCode">State Code:</label>
            </div>
            <div className="form-field col-lg-12">
              {/* <input className="submit-btn" type="submit" value="Submit" /> */}
              <button className="submit-btn" defaultValue="Submit" type="submit">{index ? 'Update' : 'Submit'}</button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}
export default State