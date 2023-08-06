import "./DisplayValue.css";

const DisplayValueBox = ({ value }) => {
  return (
    <div className="display-value-box">
      <p>{value}</p>
    </div>
  );
};

export default DisplayValueBox;
