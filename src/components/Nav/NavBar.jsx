import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Col, Nav, Row } from "react-bootstrap";

import "./style.css";

import { useNavigate } from "react-router-dom";

const NavBar = ({ color }) => {
  
  const navigate = useNavigate();

  const logout = ()=> {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("token");
    navigate('/login');
  }

  return (
    <Navbar
      id="hell"
      style={{ background:  "#f1f1f1"  }}
      expand="lg"
      fixed="top"
      
    >
      <Container fluid>
        <Navbar.Brand  onClick={()=>{navigate('/')}}> 
        <div >
          <div className={"gradient-text"}> DoubtFix</div>
          </div>
        </Navbar.Brand>

     
          <Nav className="justify-content-end" style={{ marginTop: 15, marginRight: 30 }}>
                        
            {/* <h5 onClick={logout} style={{ cursor:'pointer'}}>Logout</h5> */}

            <i  className={`fa fa-sign-out logout`}   style={{ cursor:'pointer', fontSize: 25}} onClick={logout}/>
  
          </Nav>
      
        
      </Container>
    </Navbar>
  );
};

export default NavBar;
