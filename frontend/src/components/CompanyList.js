import axios from "axios";
    import React, {Component , useState, useEffect, useRef } from "react";
    // import { baseURL, headers } from "./../http-common";
    import { useNavigate } from "react-router-dom";
    import CompanyDataService from "../services/company.services";
    import { Link } from "react-router-dom";

export default class CompanyList extends Component { 

  constructor(props) {
    super(props); 

    this.retrieveCompany = this.retrieveCompany.bind(this);
    this.setActiveCompany = this.setActiveCompany.bind(this);

    this.state = {
      companies: [],
      currentCompany: null,
      currentIndex: -1
    };
  }
  componentDidMount() {
    this.retrieveCompany();
  }
  retrieveCompany() {
    CompanyDataService.getAll()
      .then(response => {
        this.setState({
          companies: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  setActiveCompany(company, index) {
    this.setState({
      currentCompany: company,
      currentIndex: index
    });
  }
  refreshList() {
      this.retrieveCompany();
      this.setState({
        currentCompany: null,
        currentIndex: -1
      });
    }
  
  
  render() {
    const { companies , currentCompany, currentIndex } = this.state; 
    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Companies List</h4>

          <ul className="list-group">
            {companies &&
              companies.map((companies, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveCompany(companies, index)}
                  key={index}
                >
                  {companies.username}
                </li>
              ))}
          </ul>

        </div>
        <div className="col-md-6">
          {currentCompany ? (
            <div>
              <h4>Company</h4>
              <div>
                <label>
                  <strong>Username:</strong>
                </label>{" "}
                {currentCompany.username}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentCompany.description}
              </div>


              {/* <Link
                to={"/company/" + currentCompany.id}
                className="badge badge-warning"
              >
                Edit
              </Link> */}
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}