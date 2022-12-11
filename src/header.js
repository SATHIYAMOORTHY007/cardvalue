import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from './Card.js'
import { useState } from 'react'
import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation.js'
function BasicExample() {
  let array = [
    {
      id: '1',
      title: 'Baby Dress',
      price: '40.00',
      image: './image/dress.jpg',
    },
    { id: '2', title: 'Headset', price: '18.00', image: './image/head.jpg' },
    {
      id: '3',
      title: 'Fancy Product',
      price: '25.00',
      image: './image/iphone.jpg',
    },
    {
      id: '4',
      title: 'Popular Item',
      price: '40.00',
      image: './image/lap.jpg',
    },
    {
      id: '5',
      title: 'Sale Item',
      price: '20.00',
      image: './image/Redmi.jpg',
    },
    {
      id: '6',
      title: 'Special Item',
      price: '18.00',
      image: './image/skipping.jpg',
    },
    {
      id: '7',
      title: 'Fancy Product',
      price: '25.00',
      image: './image/dress.jpg',
    },
    {
      id: '8',
      title: 'Popular Item',
      price: '40',
      image: './image/head.jpg',
    },
  ]
  const [cartList, setCart] = useState([])
  const [total, setTotal] = useState(0)
  let addToCard = (item) => {
    setCart([...cartList, item])
    setTotal(parseFloat(total) + parseFloat(item.price))
  }

  let RemoveItem = (item) => {
    let index = cartList.findIndex((e) => e.id == item.id)
    cartList.splice(index, 1)
    setCart([...cartList])
    setTotal(total - item.price)
  }

  return (
    <div class="main">
      <div className="row">
        {array.map((item) => {
          return (
            <div className="card col-sm-3">
              <img class="card-img-top" src={item.image} alt="Card image cap" />
              <div class="card-body">
                <h4 class="card-title">
                  <p>{item.title}</p>
                </h4>

                <h4 class="card-price">
                  <a>{item.price}</a>
                </h4>

                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  class="btn btn-primary"
                  disabled={cartList.some((array) => array.id == item.id)}
                  onClick={() => addToCard(item)}
                >
                  Add to card
                </button>
              </div>
            </div>
          )
        })}
      </div>
      <div className="sidebar">
        <Card cartList={cartList} total={total} RemoveItem={RemoveItem} />
      </div>
    </div>
  )
}

export { BasicExample }
