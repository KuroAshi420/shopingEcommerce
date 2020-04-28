import React, { useState } from "react";
import {connect} from 'react-redux';
import { addArticleToCard } from "../Action/action";


function Card(props) {
    
  return (
    <div className="main-card">
        {props.article.map((el)=>( 
         <div className="card">
      <div className="card-img">
        <img className="movie-img" src={el.link} alt="" />
      </div>
      <div className="card-desc">
        
        <span>{el.name}</span>
        
        
          <span>{el.price}£</span>
        
      </div>

      <button className="description-button" onClick={()=>addArticleToCard(el)}>Add to card</button>
    </div>
         ))}
    </div>
   
  );
}
const mapStateToProps = (state) => ({
    article : state.item,
    panier : state.panier

})
const mapDispatchToProps = (dispatch) => {
    return {
        addArticleToCard:(payload) => dispatch(addArticleToCard(payload))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Card);
