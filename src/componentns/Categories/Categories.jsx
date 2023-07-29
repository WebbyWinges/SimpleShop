import React from "react";
import s from './Categories.module.css'
import {FaTrash} from 'react-icons/fa'
class Categories extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'Всё'
        },
        {
          key: 'chairs',
          name: 'Стулья'
        },
        {
          key: 'table',
          name: 'Столы'
        },
        {
          key: 'lamp',
          name: 'Лампы'
        },
        {
          key: 'bed',
          name: 'Кровать'
        }
      ]
    }
  }
  render() {
    return (
        <div className={s.categories}>
          {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategoty(el.key)}>{el.name}</div>
          ))}
        </div>
    )
  }
 
}

export default Categories;
