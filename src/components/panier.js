import React from "react";
import { connect } from "react-redux";
import { incrementQuantity, decrementQuantity,deleteArticle,deleteAll } from "../Action/action";
import { useHistory } from "react-router-dom";
const Panier = props => {
    let history = useHistory()
  return (
    <div className="element-panier">
      {props.panier.map(el => (
        <div className="affichage-panier">
          <span>{el.name}</span>
          <span>{el.price}</span>
           <div>
          <button onClick={() => props.incrementQuantity(el)}>+</button>
          <span>{el.quantity}</span>
          <button onClick={() => props.decrementQuantity(el)}>-</button>
          </div>
          <span>{el.quantity * el.price}$</span>
          <button onClick={()=>props.deleteArticle(el.id)}>Delete</button>
        </div>
      ))}
       
          <div className="total">
              <span>Total</span>
              <span>{props.panier.reduce(
              (prev, cur) => prev + cur.quantity * cur.price,
              0 
            )}$</span>
            <button onClick={()=>props.deleteAll()}>Delete All</button>
            <button className="search-btn" onClick={()=>history.push("/")} >Go home</button>
          </div>
            
        
    </div>
  );
};
const mapStateToProps = state => ({
  panier: state.panier
});
const mapDispatchToProps = dispatch => ({
  incrementQuantity: payload => dispatch(incrementQuantity(payload)),
  decrementQuantity: payload => dispatch(decrementQuantity(payload)),
  deleteArticle : payload => dispatch(deleteArticle(payload)),
  deleteAll : payload => dispatch(deleteAll(payload))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panier);