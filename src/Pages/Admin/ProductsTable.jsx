import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

const ProductsTable = () => {

    const [products, setProducts] = useState([])

    const getData = async () => {
        const res = ("https://northwind.vercel.app/api/products");
        setProducts(res.data)
    }
    useEffect(() => {
        getData()
    })
    return (

        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th>Uit</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {products.map(product => (
                        <Tr>
                            <Td>{product.id}</Td>
                            <Td>{product.name}</Td>
                            <Td >{product.unitprice}</Td>
                        </Tr>
                    ))}

                </Tbody>

            </Table>
        </TableContainer>
    )
}

export default ProductsTable