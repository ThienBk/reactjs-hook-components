import { useMemo, useRef, useState } from "react";

export default function UseMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);


  const nameRef = useRef()

  const handleSubmit = () => {
    if(!name || !price){
        alert(`Missing form input data!`)
        return
    }
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setName("");
    setPrice("");

    nameRef.current.focus()
  };

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {

        console.log('Tinh toan lai')

        return result + prod.price
      }, 0)
      return result;
  }, [products])


  return (
    <div style={{ padding: "10px 32px" }}>
      <input
        ref={nameRef}
        type="text"
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      <h2>Total: {total} </h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {" "}
            {product.name} - {product.price}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
