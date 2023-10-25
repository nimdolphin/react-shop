import { Item } from "../Item";

const Items = (props) => {
  const { goods = [], addToBasket = Function.prototype } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item, idx) => (
        <Item key={idx} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
};

export { Items };
