import { useEffect } from "react";
const Alert = (props) => {
  const { name = "", closeAlert } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast">{name} added to card</div>
    </div>
  );
};

export { Alert };
