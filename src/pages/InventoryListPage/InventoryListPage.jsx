import React, { Component } from 'react';
import "./InventoryListPage.scss";
import "../../styles/partials/_typography.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import InventoryList from '../../components/InventoryList/InventoryList';

import inventoryListData from "../../assets/data/inventories.json";
import axios from 'axios';


class InventoryListPage extends Component {

    state = {
        inventoryListArray: []    
    };

    componentDidMount() {
        axios
            .get('http://localhost:8080/inventories')
            .then(result => {
                this.setState({
                    inventoryListArray: result.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { inventoryListArray } = this.state;
        // console.log(inventoryListArray);
        return (
            <main className='inventory-page'>
                <div className='inventory-page__tablet-header'> 
                <header className='inventory-page__header page-header'>
                    <h1 className='inventory-page__title page-header'>
                        Inventory
                    </h1>
                </header>
                <article className='inventory-page__top'>
                    <section className='inventory-page__search-bar'>
                        <input type="text" placeholder='Search...' className='inventory-page__input label-text'/>
                        <img src={searchIcon} alt="search icon" className='inventory-page__search-icon'/>
                    </section>
       
                    <button className='inventory-page__button button-text'>
                        + Add New inventory
                    </button>
                </article>
                </div>
                <InventoryList inventoryListArray={inventoryListArray} />
            </main>
        );
    }
}

export default InventoryListPage;