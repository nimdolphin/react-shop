const BasketItem = (props) => {
  const { order, setOrder, mainId, displayName, price, quantity } = props;

  const handleClickQuantity = (itemId, number) => () => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity + +number;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const removeItem = (id) => () => {
    const newList = order.filter((list) => list.mainId !== id);
    setOrder(newList);
  };

  return (
    <div className="collection-item">
      {displayName}
      <button className="btn-flat" onClick={handleClickQuantity(mainId, -1)}>
        -
      </button>
      {quantity}
      <button className="btn-flat" onClick={handleClickQuantity(mainId, +1)}>
        +
      </button>
      = {price.regularPrice * quantity}$
      <span className="secondary-content" onClick={removeItem(mainId)}>
        <i className="material-icons pink-text basket-close">close</i>
      </span>
    </div>
  );
};

export { BasketItem };
