import React from "react";
import s from './ShowFullItem.module.css'
import { HiOutlineX } from "react-icons/hi";
class ShowFullItem extends React.Component {
  render() {
    return (
        <div className={s.fullItem}>
            <HiOutlineX className={s.x} onClick={() => this.props.onShowItem(this.props.item)} />
            <div>
                <img src={'./img/' + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
                <h2>{this.props.item.titel}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}$</b>
                <div className={s.addToCart} onClick={()=> this.props.onAdd(this.props.item)}>+</div>
            </div>
        </div>
    )
  }
 
}

export default ShowFullItem;
