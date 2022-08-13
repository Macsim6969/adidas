import React from 'react'
import { useSelector } from 'react-redux'
import c from '../../scss/cart.module.scss'

const Cart = () => {
  const { items, totalPrice, totalCount } = useSelector(state => state.cart)
  console.log([].concat.apply([], Object.values(items)))

  return (
    <>
      {
        items && <div className={c.cart}>
          <div className={c.main}>
            <div className={c.main_left}>
              <h2>Your Bag</h2>
              <p>TOTAL: ({totalCount} items) ${totalPrice}</p>
              <p>Items in your bag are not reserved — check out now to make them yours.</p>
              <div className={c.main_left_choice}>
                {
                  items && [].concat.apply([], Object.values(items)).map(e => {
                    return <div className={c.main_left_choice_bl} key={e.id}>
                      <div className={c.main_left_choice_bl_img}>
                        <img src={e.image} alt="" />
                      </div>
                      <div className={c.main_left_choice_bl_info}>
                      <nav>{e.name}</nav>
                      <nav>Size: {e.choiceSizes}</nav>
                      {
                        e.discount ? <nav>Discount :{e.discount}</nav> : <nav>Discount : 0</nav>
                      }
                      
                      <nav>Price: {e.price}</nav>
                      </div>
                    </div> 
                  })
                }
              </div>
            </div>
            <div className={c.main_right}>
              <div>Checkout</div>
              <div>
                <nav>OERDER SUMMARY</nav>
                <p>Original Price</p>

              </div>
            </div>
          </div>
        </div>
      }

    </>
  )
}

export default Cart