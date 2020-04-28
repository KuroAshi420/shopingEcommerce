import React, {useState} from 'react'
import { connect } from 'react-redux';

const Panier = (props) => {
    const [quatite,setQuantite] = useState(0);
    let total = []
    return(
        <div className="element-panier">
           {props.panier.map((el)=>(
              <div>
                  <span>{el.name}</span>
                  <span>{el.price}</span>
                  <button onClick={()=>setQuantite(quatite+1)}>+</button>
                  <span>{quatite}</span>
                  <button onClick={()=>setQuantite(quatite-1)}>-</button>
                  <span>{quatite*el.price}</span>
              </div>
              ))}
              <div>

              </div>
            
        </div>
    )
}
const mapStateToProps = (state) => ({
    panier: state.panier,
  });
export default connect(mapStateToProps) (Panier);