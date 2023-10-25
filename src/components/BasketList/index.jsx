import { BasketItem } from "../BasketItem";

const BasketList = (props) => {
  const { setOrder, handleBasketShow, order = [] } = props;

  const totalPrice = order.reduce((sum, elem) => {
    return sum + elem.price.regularPrice * elem.quantity;
  }, 0);

  return (
    <ul className="collection basket-list ">
      <li className="collection-item active #ff80ab pink accent-1">
        Cart
        <span className="secondary-content basket-close">
          <i className="material-icons pink-text" onClick={handleBasketShow}>
            close
          </i>
        </span>
      </li>

      <div className="collection-item ">
        {order.length ? (
          order.map((item) => {
            return (
              <BasketItem
                key={item.mainId}
                {...item}
                order={order}
                setOrder={setOrder}
              />
            );
          })
        ) : (
          <li className="collection-item active black-text #ffffff white">
            Basket is empty
          </li>
        )}
      </div>

      <li className="collection-item active #ff80ab pink accent-1">
        Total price: {totalPrice}
      </li>
      <li className="collection-item active #ff80ab pink accent-1">
        <button className=" btn-small #e91e63 pink white-text">
          Proceed to checkout
        </button>
      </li>
    </ul>
  );
};

export { BasketList };
