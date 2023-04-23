// const addItem = [];

// const addItems = (state = addItem, action) => {
//   switch (action.type) {
//     case "ADDITEM":
//       const product = action.payload;
//       // return [...state, action.payload];
//       //Check if product is Already Exist
//       const exist = state.findIndex((x) => x.id === product.id);
//       console.log(exist);
//       console.log(product.id);
//       //Increase the Quantity

//       if (exist > -1) {
//         return state.map((x) =>
//           x.id === product.id ? { ...x, qty: x.qty + 1 } : x
//         );
//       } else {
//         const product = action.payload;
//         return [
//           ...state,
//           {
//             ...product,
//             qty: 1,
//           },
//         ];
//       }

//     case "DELITEM":
//       return (state = state.filter((x) => {
//         return x.id !== action.payload.id;
//       }));

//     default:
//       return state;
//   }
// };
// export default addItems;
const cartData = localStorage.getItem("cart");
let cart;

if (cartData && cartData !== "undefined") {
  cart = JSON.parse(cartData);
} else {
  cart = [];
}

const handleCart = (state = cart, action) => {
  const product = action.payload;
  console.log(action.type);
  switch (action.type) {
    case "ADDITEM":
      //Check if product is Already Exist
      const exist = state.findIndex((x) => x.id === product.id);
      console.log(exist);
      //Increase the Quantity
      if (exist > -1) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      console.log(exist1);

      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};

export default handleCart;
