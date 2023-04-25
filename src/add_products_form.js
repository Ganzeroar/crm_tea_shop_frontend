import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

    this.initialState = {
        id: '',
        code: '',
        name: '',
        count: '',
        unit: '',
        type: '',
        price: '',
        description: '',
    }



    this.state = this.initialState;
    }


    HandleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
            [value]: event.target.label,
        });
    }


    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }


    render() {
        
        const { id, code, name, count, selectedType, selectedUnit, price, description } = this.state;

        return (
            <form onSubmit={this.onFormSubmit} className="adding_form">
                
                <div className="first_container">
                    <label for="id">ID продукта</label>
                    <input
                    type="text"
                    name="id"
                    id="id"
                    value={id}
                    onChange={this.HandleChange}
                    />


                    <label for="code">Код продукта</label>
                    <input
                    type="text"
                    name="code"
                    id="code"
                    value={code}
                    onChange={this.HandleChange}
                    />


                    <label for="name">Наименование продукта</label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.HandleChange}
                    />
                </div>


                <div className="second_container">
                    <label for="count">Количество продукта</label>
                    <input
                    type="number"
                    name="count"
                    id="count"
                    value={count}
                    onChange={this.HandleChange}
                    />


                    <div className="input-group mb-3">
                    <div className="input-group-prepend">
                    <label for="unit" className="input-group-text" id="inputGroupSelect01">Ед. измерения</label>
                    </div>
                    <select 
                    value={this.state.value}
                    defaultValue={'selected'}
                    name="unit"
                    onChange={this.HandleChange}
                    className="custom-select"
                    id="inputGroupSelect01"
                    >
                        <option selected>Выберите...</option>
                        <option>грамм</option>
                        <option>штук</option>
                    </select>
                    </div>
                </div>


                <div className="three_container">
                    <div className="input-group mb-3">
                    <div className="input-group-prepend">
                    <label for="type" className="input-group-text" id="inputGroupSelect01">Тип продукта</label>
                    </div>
                    <select
                        option = {[
                            {value: "1", label: "Чай" },
                            {value: "2", label: "Чай" },
                            {value: "3", label: "Чай" },
                        ]}
                        defaultValue={'selected'}
                        name="type"
                        onChange={this.HandleChange}
                        className="custom-select" id="inputGroupSelect01"
                        >
                        <option selected>Выберите...</option>
                        <option>Чай</option>
                        <option>Кофе</option>
                        <option>Посуда</option>
                    </select>
                    </div>



                <label for="price">Цена продукта</label>
                    <input
                    type="number"
                    name="price"
                    id="price"
                    value={price}
                    onChange={this.HandleChange}
                    />

                
                <label for="description">Описание продукта</label>
                    <textarea
                    name="description"
                    id="description"
                    value={description}
                    onChange={this.HandleChange}
                    />
                </div>


                <button type="submit">
                    Добавить
                </button>

            </form>
        );
    }
}

export default Form;