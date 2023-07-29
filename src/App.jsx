import React from "react";
import Footer from "./componentns/Footer/Footer";
import Header from "./componentns/Header/Header";
import Items from "./componentns/Items/Items.jsx";
import './index.css';
import Categories from "./componentns/Categories/Categories";
import ShowFullItem from "./componentns/ShowFullItem/ShowFullItem";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          titel: 'chair',
          img: 'chair.jpeg',
          desc: 'Lorem',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          titel: 'table',
          img: 'table.jpg',
          desc: 'Lorem',
          category: 'table',
          price: '249.99'
        },
        {
          id: 3,
          titel: 'lamp',
          img: 'lamp.jpg',
          desc: 'Lorem',
          category: 'lamp',
          price: '25.99'
        },
        {
          id: 4,
          titel: 'bed gray',
          img: 'bed.jpg',
          desc: 'Lorem',
          category: 'bed',
          price: '2499.99'
        }
      ],
      showFullItem: false,
      fullItem: {},
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategoty = this.chooseCategoty.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper" >
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategoty={this.chooseCategoty} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} item={this.state.fullItem} onAdd={this.addToOrder}/>}
        <Footer />
      </div>
    );
  }  

  onShowItem (item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategoty(category) {
    if(category==='all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })

  }
}

export default App;
