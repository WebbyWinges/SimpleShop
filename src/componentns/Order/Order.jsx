import React from "react";
import s from './Order.module.css'
import {FaTrash} from 'react-icons/fa'
class Order extends React.Component {
  render() {
    return (
        <div className={s.item}>
         <img src={'./img/' + this.props.item.img} />
         <div className={s.right}>
          <h2>{this.props.item.titel}</h2>
          <p>{this.props.item.price}$</p>
         </div>
          <FaTrash className={s.deleteIcon} onClick={()=> this.props.onDelete(this.props.item.id)}/>
        </div>
    )
  }
 
}

export default Order;
