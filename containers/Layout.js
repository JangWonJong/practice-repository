import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";


export default function Layout ({ children }) {
    return (
        <div>
        <Table>
            <thead>
            <Tr>
                <Th><Header/></Th>
            </Tr>
            </thead>
            <tbody>
            <Tr>
                <Td>
                     {children}
                </Td>
            </Tr>
            <Tr>
                <Td><Footer/></Td>
            </Tr>
            </tbody>
        </Table>
    
        </div>
    )
}
const Table = styled.table`
    border: 1px solid black;
    width:  1000px;
    height: 500px;
`
const Tr = styled.tr`
    border: 1px solid black;
`
const Th = styled.th`
    border: 1px solid black;
`
const Td = styled.td`
    border: 1px solid black;
`
