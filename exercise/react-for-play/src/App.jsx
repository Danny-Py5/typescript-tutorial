import { useEffect, useRef, useState } from "react";

function App() {
  // const [isAddClicked, setIsAddClicked] = useState(false);
  // const [productQuantity, setProductQuantity] = useState(0);
  // console.log("isAddClicked", isAddClicked);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 100,
      productQuantity: 0,
      isAddClicked: false,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      productQuantity: 0,
      isAddClicked: false,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      productQuantity: 0,
      isAddClicked: false,
    },
  ]);
  const previousAddToCartId = useRef();

  useEffect(() => {
    // console.log(products);
    // console.log(previousAddToCartId);
  });
  return (
    <>
      <h1>Add Product to Cart</h1>

      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <h2>{product.name}</h2>
            <div>
              {!product.isAddClicked ? (
                <button
                  onClick={() => {
                    if (previousAddToCartId) {
                      setProducts((current) =>
                        current.map((product) => {
                          // console.log(product.id, previousAddToCartId.current);
                          if (product.id === previousAddToCartId.current) {
                            product.isAddClicked = false;
                            return product;
                          }
                          return product;
                        })
                      );
                    }
                    return setProducts((current) => {
                      return current.map((p) => {
                        if (p.id === product.id) {
                          p.isAddClicked = true;
                          previousAddToCartId.current = product.id;
                        }
                        return p;
                      });
                    });
                  }}
                >
                  Add To Cart
                </button>
              ) : (
                <div className="increase-decrease-product">
                  <button
                    onClick={() => {
                      setProducts((current) => {
                        return current.map((p) => {
                          if (p.id === product.id) {
                            p.productQuantity++;
                          }
                          return p;
                        });
                      });
                    }}
                  >
                    +
                  </button>
                  <span>{product.productQuantity}</span>
                  <button
                    onClick={() => {
                      setProducts((current) => {
                        return current.map((p) => {
                          if (p.id === product.id) {
                            p.productQuantity--;
                          }
                          return p;
                        });
                      });
                    }}
                  >
                    -
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
