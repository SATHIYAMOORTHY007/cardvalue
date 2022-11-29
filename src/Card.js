import { BasicExample } from './header.js'
export default function Card({ cartList, total, RemoveItem }) {
  return (
    <div>
      <ul class="list-group">
        {cartList.map((item) => {
          return (
            <li class="list-group-item d-flex justify-content-between align-items-center">
              {item.title}
              <span class="item-price">{item.price}</span>
              <span>
                <button
                  class="btn btn-primary"
                  onClick={() => RemoveItem(item)}
                >
                  X
                </button>
              </span>
            </li>
          )
        })}
      </ul>
      <h3 className="total">{`total ${total}`}</h3>
    </div>
  )
}
export { Card }
