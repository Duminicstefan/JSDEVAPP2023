import React, { useState,useEffect } from "react";
import Header from '../components/Header'
import axios from "axios";

import configData from "../config.json";
export default function Home() {
  const [posts, setPosts]  = useState([{}]);
  useEffect(() => {
    console.log("primesc datele");
    axios
      .get(configData.SERVER_POST_URL)
      .then(({ data }) => {
        console.log(data['data']);
        setPosts(data['data']);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
  return (
   <>
   <Header />
  
      <div key={data.id}>
          <p>{data.titlu}</p>
      </div>
 
   <div className="container">
    <div className="row mt-4">
      <h1>Ultimele articole</h1>
      
      <div className="col">
        <div className="card mb-4">
            <a href="#!"><img className="card-img-top" src={data.poza} alt="..." /></a>
            <div className="card-body">
                <div className="small text-muted">January 1, 2023</div>
                <h2 className="card-title h4">{data.titlu}</h2>
                <p className="card-text">{data.titlu}</p>
                <a className="btn btn-primary" href="#!">Read more →</a>
            </div>
        </div>
      </div>
    </div>                              
   </div>
   </>
  )
}