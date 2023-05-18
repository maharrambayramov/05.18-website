import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { index } from "../../Schema";
import axios from "axios";

const Products = () => {
  const [products1, setProducts1] = useState([]);

  const { register, handleSubmit, getValues } = useForm({
    resolver: yupResolver(index),
  });

  const postData = async () => {
    const values = getValues();
    console.log(values);
    await axios.post("https://northwind.vercel.app/api/categories", {
      name: values.name,
      price: values.unitPrice,
    });
  };
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://northwind.vercel.app/api/categories");
      setProducts1(res.data);
    };
    getData();
  }, []);

  // const handleChanged = (e) => {
  //   setProducts1(e.target.value);
  // };

  return (
    <div>
      <form onSubmit={handleSubmit(postData)}>
        <label>Name</label>
        <input type="text" {...register("name")} />
        <label>Price</label>
        <input type="text" {...register("price")} />
        <button type="submit">submit</button>
      </form>
      {products1 &&
        products1.map((d) => (
          <>
            <h1>{d.name}</h1>
            <p>{d.unitPrice}</p>
          </>
        ))}
    </div>
  );
};

export default Products;
