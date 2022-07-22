import React from 'react';
import "./WarehouseItem.scss";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import garbage from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";

const WarehouseItem = ({ warehouse }) => {
    

    return (
        <section className='warehouse-item'>
            <div className='warehouse-item__column warehouse-item__column--select'>
                <div className='warehouse-item__box warehouse-item__box--select'>
                    <p className='table-header warehouse-item__label'>
                        Warehouse
                    </p>
                    <div className='warehouse-item__bottom'>
                        <p className='warehouse-item__data body-medium warehouse-item__data--select'>
                            {warehouse.city}
                        </p>
                        <img src={chevron} alt="chevron" className='warehouse-item__chevron'/>
                    </div>
                </div>
                <div className='warehouse-item__box '>
                    <p className=' table-header warehouse-item__label'>
                        Address
                    </p>
                    <p className='warehouse-item__data body-medium'>
                        {warehouse.address}
                    </p>
                </div>
                <img src={garbage} alt="delete" className='warehouse-item__icon'/>
                
            </div>

            <div className='warehouse-item__column'>
                <div className='warehouse-item__box'>
                    <p className='table-header warehouse-item__label'>
                        Contact Name
                    </p>
                    <p className='warehouse-item__data body-medium'>
                        {warehouse.contact.name}
                    </p>
                </div>
                <div className='warehouse-item__box'>
                    <p className='warehouse-item__label table-header'>
                        Contact Information
                    </p>
                    <p className='warehouse-item__data body-medium'>
                        {warehouse.contact.phone}
                    </p>
                    <p className='warehouse-item__data body-medium'>
                        {warehouse.contact.email}
                    </p>
                </div>
                <img src={edit} alt="edit" className='warehouse-item__icon warehouse-item__icon--select'/>

                <div className='warehouse-item__box warehouse-item__box--select'>
                    <img src={garbage} alt="delete" className='warehouse-item__tablet-button'/>
                    <img src={edit} alt="edit" className='warehouse-item__tablet-button'/>
                </div>
          
            </div>
        </section>
    );
};

export default WarehouseItem;