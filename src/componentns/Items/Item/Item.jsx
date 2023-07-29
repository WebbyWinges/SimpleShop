import React from "react";
import s from './Item.module.css'
class Item extends React.Component {
  render() {
    return (
        <div className={s.item}>
          <img src={'./img/' + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
          <h2>{this.props.item.titel}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price}$</b>
          <div className={s.addToCart} onClick={()=> this.props.onAdd(this.props.item)}>+</div>
        </div>
    )
  }
 
}

export default Item;
