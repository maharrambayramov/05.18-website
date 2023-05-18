import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { index } from "../../Schema";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Products = () => {
  const [products1, setProducts1] = useState([]);

  const { register, handleSubmit, getValues } = useForm({
    resolver: yupResolver(index),
  });

  const postData = async () => {
    const values = getValues();
    console.log(values);
    await axios.post("http://localhost:5050/users", {
      name: values.name,
      price: values.unitPrice,
    });
  };
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:5050/users");
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
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Id</Th>
                  <Th>Password</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>{d.username}</Td>
                  <Td>{d._id}</Td>
                  <Td>{d.password}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        ))}
    </div>
  );
};

export default Products;
