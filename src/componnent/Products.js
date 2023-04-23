import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
export default function Products() {
  const [data, setData] = useState();
  const [filter, setFilter] = useState();
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);

      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={400}></Skeleton>
        </div>
        <div className="col-md-3">
          <Skeleton height={400}></Skeleton>
        </div>
        <div className="col-md-3">
          <Skeleton height={400}></Skeleton>
        </div>
        <div className="col-md-3">
          <Skeleton height={400}></Skeleton>
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data?.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const ShowProduct = () => {
    const allCte = [
      { category: "men's clothing" },
      { category: "women's clothing" },
      { category: "jewelery" },
      { category: "electronics" },
    ];
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <div
            className=" btn btn-outline-primary  me-2 "
            onClick={() => setFilter(data)}
          >
            All
          </div>

          {allCte?.map((cat) => {
            return (
              <div
                className=" btn btn-outline-primary  me-2 "
                onClick={() => filterProduct(cat?.category)}
              >
                {cat.category}
              </div>
            );
          })}
        </div>
        {filter?.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div
                  className="card h-100 text-center p-4 key={product?.id}    transition: all 0.5s ease     transform: scale(1,1);
                box-shadow: 5px 5px 10px rgba(0,0, 0, 0.5)"
                >
                  <img
                    src={product?.image}
                    className="card-img-top"
                    alt={product?.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product?.title?.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">${product?.price}</p>
                    <NavLink
                      to={`/products/${product?.id}`}
                      className=" btn btn-outline-primary "
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}
