import React, {useState} from "react";
import {search} from '../Action/action';
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";
function Nav(props) {
    const [recherche,setRecherche]= useState("")
    let history = useHistory()
  return (
    <div className="main">
      <div className="search-bar">
        <input
          className="input"
          type="text"
          placeholder="Enter movie name to search"
          value={recherche}
          onChange={(e)=>setRecherche(e.target.value)}
        />
        <button className="search-btn" onClick={()=>props.search(recherche)} >Search</button>
        <button className="search-btn" onClick={()=>history.push("/panier")} >panier</button>
      </div>
      </div>
  )
}
const mapDispatchToProps = (dispatch) => {
    return {
        search:(payload) => dispatch(search(payload)),
    }
}
export default connect(null,mapDispatchToProps)(Nav);