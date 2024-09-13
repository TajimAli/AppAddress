import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddressApplication from './AddressApplication';
import Country from './Country';
import State from './State';
import District from './District';
import City from './City';
import AddAddress from './AddAddress';
import CountrysTable from './CountrysTable';
import StateTable from './StateTable';


function App() {
    return (
        <Router>
            <AddressApplication/>
            <Routes>
                <Route path="/Home" element={<AddressApplication />} />
                <Route path="/Country" element={<Country />} />
                <Route path="/ContryesTable" element={<CountrysTable />} />
                <Route path="/form/:index" element={<Country />}/>
                <Route path="/State" element={<State />} />
                <Route path="/StateTable" element={<StateTable />} />
                <Route path="/Stateform/:index" element={<State />}/>
                <Route path="/onState" element={<State />} />
                <Route path="/district" element={<District/>} />
                <Route path="/AddCity" element={<City />} />
                <Route path="/fill-form" element={<AddAddress />} />
            </Routes>
        </Router>
    );
}

export default App;