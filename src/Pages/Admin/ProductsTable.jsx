import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "http://localhost:5050/users"
      );
      setProducts(res.data);
    };
    getData();
  });

  const productsUpdate = products.sort((a, b) => a.id - b.id);
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Unit Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {productsUpdate &&
            productsUpdate.map((product) => (
              <Tr>
                <Td>{product._id}</Td>
                <Td>{product.username}</Td>
                <Td>{product.password}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
