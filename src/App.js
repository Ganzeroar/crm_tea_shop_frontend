import React, { Component } from 'react';
import Table from './Table';
import Header from './Header';
import Form from './add_products_form';


class App extends Component {
    state = {
        products: []
    };

    removeProduct = index => {
        const { products } = this.state;

        this.setState({
            products: products.filter((products, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = products => {
        this.setState({products: [...this.state.products, products]});
    }

    render() {
        const { products } = this.state;

        return (
            <div className='container'>
                <Header />
                <Table
                    productsData={products}
                    removeProduct={this.removeProduct}
                    />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App