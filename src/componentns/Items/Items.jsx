import React from "react";
import Item from "./Item/Item";
import s from './Item/Item.module.css'

class Items extends React.Component {
  render() {
    return (
        <main className={s.main}>
        
            {this.props.items.map(el=> 
                <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd}/>)}
        </main>
    )
  }
 
}

export default Items;
