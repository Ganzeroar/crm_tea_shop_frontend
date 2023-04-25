import React, { Component } from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>ID</th>
                <th>Код товара</th>
                <th>Наименование товара</th>
                <th>Количество</th>
                <th>Ед. измерения</th>
                <th>Тип товара</th>
                <th>Цена</th>
                <th>Описание</th>
                <th>Удалить товар</th>
            </tr>
        </thead>
    );
}


const TableBody = props => {
    const rows = props.productsData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.id}</td>
                <td>{row.code}</td>
                <td>{row.name}</td>
                <td>{row.count}</td>
                <td>{row.unit}</td>
                <td>{row.type}</td>
                <td>{row.price}</td>
                <td>{row.description}</td>
                <td>
                    <button onClick={() => props.removeProduct(index)}>Удалить</button>
                </td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}


const Table = (props) => {
    const { productsData, removeProduct } = props;
        return (
            <table>
                <TableHeader />
                <TableBody productsData={productsData} removeProduct={removeProduct} />
            </table>
        );
}

export default Table;