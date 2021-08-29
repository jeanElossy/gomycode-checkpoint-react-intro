import React from 'react';

const Formulaire = () => {
  return (
    <div className="container-fluid card-primary">
      <div className="row">
        <h1 className="text-center mt-4">
          Bienvenue 
        <span className="text-warning">
          Wilseloo
        </span>, 
          Veuillez vous inscrire
        </h1>
      </div>
      <div className="container mt-5">
        <div className="row">
          <form action="/" className="form-group">

            <div className="d-md-flex gap-5">
              <div className="col">
              <label htmlFor="firsName" className="fw-bold mb-1">First Name</label>
              <input type="text" name="nom" id="firsName" placeholder="Enter your firstName" className="form-control p-3"/>
              </div>
              <div className="col mt-4 mt-md-0">
                <label htmlFor="lastName" className="fw-bold mb-1">Last Name</label>
                <input type="text" name="nom" id="lastName" placeholder="Enter your lastName" className="form-control p-3"/>
              </div>
            </div>

            <div className="d-md-flex gap-5">
              <div className="col mt-4">
                <label htmlFor="email" className="fw-bold mb-1">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter your email" className="form-control p-3"/>
              </div>
              <div className="col mt-4">
                <label htmlFor="password" className="fw-bold mb-1">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter your password" className="form-control p-3"/>
              </div>
            </div>

            <div className="text-center text-md-start">
              <button type="submit" className="btn btn-outline-success mt-4">S'inscrire</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
export default Formulaire;