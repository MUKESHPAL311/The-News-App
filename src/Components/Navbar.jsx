import React from 'react';

const Navbar = ({ setcategory, setcountry }) => {
  const countries = [
    { code: 'in', label: 'IN' },
    { code: 'us', label: 'USA' },
    { code: 'ae', label: 'UAE' },
    { code: 'ch', label: 'CH' },
    { code: 'ar', label: 'AR' },
    { code: 'sa', label: 'SA' },
    { code: 'cn', label: 'CN' },
    { code: 'it', label: 'IT' },
    { code: 'rs', label: 'RS' },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-space-between" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className='badge bg-light text-dark fs-4'>NewsMania</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav">
            {/* Categories */}
            <li className="nav-item">
              <div className="nav-link" onClick={() => setcategory("general")}>General</div>
            </li>

            <li className="nav-item">
              <div className="nav-link" onClick={() => setcategory("technology")}>Technology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setcategory("business")}>Business</div>
            </li>

            <li className="nav-item">
              <div className="nav-link" onClick={() => setcategory("entertainment")}>Entertainment</div>
            </li>

            <li className="nav-item">
              <div className="nav-link" onClick={() => setcategory("health")}>Health</div>
            </li>

            <li className="nav-item">
              <div className="nav-link" onClick={() => setcategory("science")}>Science</div>
            </li>

            <li className="nav-item">
              <div className="nav-link" onClick={() => setcategory("sports")}>Sports</div>
            </li>
            {/* Add more categories as needed */}
          </ul>
          {/* Country Dropdown */}
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Select Country
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {countries.map(country => (
                <li key={country.code}>
                  <a className="dropdown-item" href="#" onClick={() => setcountry(country.code)}>
                    {country.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
