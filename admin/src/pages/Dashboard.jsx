import React, { useEffect, useState } from "react";
import { useApi } from "../context/ContextApi";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const { GetProducts } = useApi();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await GetProducts();
        setData(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  });

  console.log(data);

  return (
   <div>
      <h1>Products</h1>
      <ul>
        {data.length > 0 ? (
          data.map((item) => <li key={item.id}>{item.availabilityStatus}</li>)
        ) : (
          <p>Loading products...</p>
        )}
      </ul>
    </div>

  );
}
