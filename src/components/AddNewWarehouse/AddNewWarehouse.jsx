import './AddNewWarehouse.scss';
import backIcon from '../../assets/icons/arrow_back-24px.svg'

function AddNewWarehouse () {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }
    
    return (
        <div className='addNewWarehouse'>
            <div className='addNewWarehouse__card'>
                <header className='addNewWarehouse__header'>
                    <img src={backIcon} />
                    <h1 className= 'addNewWarehouse__heading page-header'>
                        Add New Warehouse
                    </h1>
                </header>

                <main className='addNewWarehouse__details'>
                    <form className='addNewWarehouse__forms' onSubmit={handleSubmit} id='form'>
                        <section className='addNewWarehouse__details-warehouse'>
                            <h2 className='addNewWarehouse__details-subheading sub-header'>
                                Warehouse Details
                            </h2>
                            <div className='addNewWarehouse__form-container'>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>Warehouse Name</label>
                                <input className='addNewWarehouse__input' type='text' placeholder='Warehouse Name'/>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>Street Address</label>
                                <input className='addNewWarehouse__input' type='text' placeholder='Street Address'/>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>City</label>
                                <input className='addNewWarehouse__input' type='text' placeholder='City'/>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>Country</label>
                                <input className='addNewWarehouse__input' type='text' placeholder='Country'/>
                            </div>
                        </section>
                        <section className='addNewWarehouse__details-contact'>
                            <h2 className='addNewWarehouse__details-subheading sub-header'>
                                Contact Details
                            </h2>
                            <div className='addNewWarehouse__form-container'>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>Contact Name</label>
                                <input className='addNewWarehouse__input' type='text' placeholder='Contact Name'/>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>Position</label>
                                <input className='addNewWarehouse__input' type='text' placeholder='Position'/>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>Phone Number</label>
                                <input className='addNewWarehouse__input' type='text' placeholder='Phone Number'/>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>Email</label>
                                <input className='addNewWarehouse__input' type='text' placeholder='Email'/>
                            </div>
                        </section>
                     </form>
                </main>
                <section className='addNewWarehouse__button-section'>
                        <button className='addNewWarehouse__button-cancel button-text' type='submit'>
                            Cancel
                        </button>
                        <button className='addNewWarehouse__button-add button-text' type='submit' form='form'>
                            + Add Warehouse
                        </button>
                </section>
            </div>
        </div>
    );
}

export default AddNewWarehouse ;