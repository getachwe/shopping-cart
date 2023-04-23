
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { delItem, addItem } from "../redux/action/index";


export default function Cart() {
  const state = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();
  const handleClose = (item) => {
    dispatch(delItem(item));
  };
  const Increment = (item) => {
    dispatch(addItem(item));
  };
  const ctartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            className="btn-close float-end"
            aria-label="Close"
            onClick={() => handleClose(cartItem)}
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">${cartItem.price}</p>
            </div>
            <div className="col-md-4">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  onClick={() => Increment(cartItem)}
                  type="button"
                  className="btn btn-primary"
                >
                  +
                </button>
                <button type="button" className=" btn btn-outline-primary">
                  {cartItem.qty}
                </button>
                <button
                  onClick={() => handleClose(cartItem)}
                  type="button"
                  className="btn btn-primary"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart Empty</h3>
          </div>
        </div>
      </div>
    );
  };
  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-primary mb-5 w-25 mx-auto"
          >
            Proceed To checout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state?.length === 0 && emptyCart()}
      {state?.length !== 0 && state?.map(ctartItems)}
      {state.length !== 0 && button()}
    </>
  );
}
