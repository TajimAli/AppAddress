import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Country() {
  const { index } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState({ countryName: "", countryCode: "" });

  useEffect(() => {
    if (index) {
      const storedData = JSON.parse(localStorage.getItem('Countrys')) || [];
      const item = storedData.find(item => item.index === index);
      if (item) {
        setCountry(item);
      }
    }
  }, [index]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCountry({
      ...country,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('Countrys')) || [];
    if (index) {
      const updatedData = storedData.map(item => item.index === index ? country : item);
      localStorage.setItem('Countrys', JSON.stringify(updatedData));
    } else {
      country.index = Date.now().toString();
      storedData.push(country);
      localStorage.setItem('Countrys', JSON.stringify(storedData));
    }
    navigate('/ContryesTable');


    if (country.countryName) {
      let countries = JSON.parse(localStorage.getItem('countries')) || [];
      if (!countries.includes(country.countryName)) {
        countries.push(country.countryName);
        localStorage.setItem('countries', JSON.stringify(countries));
      }
      
    }
  };
  return (
    <div>

      <section className="get-in-touch">
        {/* <h1 className="title">Add Your Country</h1> */}
        <h1 className="title">{index ? 'Edit Country' : 'Add Your Country'}</h1>
        <form onSubmit={handleSubmit} className="contact-form row">

          <div className="form-field col-lg-6">
            <input id="countryName" name="countryName" value={country.countryName} onChange={handleChange} className="input-text js-input" type="countryName" />
            <label className="label" htmlFor="countryName">Country:</label>
          </div>

          <div className="form-field col-lg-6 ">
            <input id="countryCode" name="countryCode" value={country.countryCode} onChange={handleChange} className="input-text js-input" type="countryCode" />
            <label className="label" htmlFor="countryCode">Country Code:</label>
          </div>

          <div className="form-field col-lg-12">
            {/* <input className="submit-btn" type="submit" defaultValue="Submit" /> */}
            <button className="submit-btn" defaultValue="Submit" type="submit">{index ? 'Update' : 'Submit'}</button>
          </div>
        </form>
      </section>
    </div>
  )
}
export default Country
