import { Link } from "react-router-dom"
function AddressApplication() {
    return (
        <div>
            <>
                <div className="sidebar">
                    <Link to={'/Home'} className="active">Home</Link>
                    <Link to={'/Country'}>Country</Link>
                    <Link to={'/State'}>State</Link>
                    <Link to={'/District'}>District</Link>
                    <Link to={'/AddCity'}>City</Link>
                    <Link to={'/fill-form'}>Add Full Address</Link>
                </div>
                <div id="content">
                    <div className="container-fluid">
                        <h1 >Address Application</h1>
                    </div>
                </div>
            </>

            {/* <>
                <div id="viewport">
                    <div id="sidebar">
                        <header><a href="#">Add Address</a></header>
                        <ul className="nav">
                            <li><Link to={'/Country'}><i className="zmdi zmdi-view-dashboard"></i>Country</Link></li>
                            <li><Link to={'/State'}><i className="zmdi zmdi-link"></i>State</Link></li>
                            <li><Link to={'/District'}><i className="zmdi zmdi-widgets"></i>District</Link></li>
                            <li><Link to={'/AddCity'}><i className="zmdi zmdi-calendar"></i> City</Link></li>
                            <li><Link to={'/fill-form'}><i className="zmdi zmdi-info-outline"></i>Add Full Address</Link></li>
                        </ul>
                    </div>
                    <div id="content">
                        <div className="container-fluid">
                            <h1>Address Application</h1>
                        </div>
                    </div>
                </div>
            </> */}

        </div>
    )
}
export default AddressApplication