import React, { useState, useEffect } from 'react';

function AddAddress() {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [citys, setCitys] = useState([])
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        const storedCountries = JSON.parse(localStorage.getItem('countries')) || [];
        setCountries(storedCountries);
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            const countryStates = JSON.parse(localStorage.getItem(`states_${selectedCountry}`)) || [];
            setStates(countryStates);
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedCountry && selectedState) {
            const stateDistricts = JSON.parse(localStorage.getItem(`districts_${selectedCountry}_${selectedState}`)) || [];
            setDistricts(stateDistricts);
        }
    }, [selectedCountry, selectedState]);

    useEffect(() => {
        if (selectedCountry && selectedState && selectedDistrict) {
            const districtCitys = JSON.parse(localStorage.getItem(`citys_${selectedCountry}_${selectedState}_${selectedDistrict}`)) || [];
            setCitys(districtCitys);
        }
    }, [selectedCountry, selectedState, selectedDistrict]);

    return (
        <>
            <div>
                <section className="get-in-touch">
                    <h1 className="title">Add Complete Address</h1>
                    <form className="contact-form row">
                        <div className="form-field col-lg-5">
                            <label htmlFor="country">Country:</label>
                            <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                                <option name="country" className="input-text js-input" type="country">--Select Your Country--</option>
                                {countries.map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-field col-lg-5">
                            <label htmlFor="state">State:</label>
                            <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
                                <option name="state" className="input-text js-input" type="state">--Select Your state--</option>
                                {states.map((s) => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-field col-lg-5">
                            <label htmlFor="district">District:</label>
                            <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
                                <option name="district" className="input-text js-input" type="district">--Select Your District--</option>
                                {districts.map((d) => (
                                    <option key={d} value={d}>{d}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-field col-lg-5">
                            <label htmlFor="city">City:</label>
                            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                                <option name="city" className="input-text js-input" type="city">--Select Your City--</option>
                                {citys.map((ct) => (
                                    <option key={ct} value={ct}>{ct}</option>
                                ))}
                            </select>
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
export default AddAddress