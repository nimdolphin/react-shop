const Item = (props) => {
  const {
    mainId,
    displayAssets,
    displayName,
    displayDescription,
    price,
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>

      <div className="card-content">
        <div className="card-title">{displayName}</div>

        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn #e91e63 pink"
          onClick={addToBasket({
            mainId,
            displayName,
            price,
          })}
        >
          Buy
        </button>
        <span className="right price">{price.regularPrice}$</span>
      </div>
    </div>
  );
};

export { Item };
