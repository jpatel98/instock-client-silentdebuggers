import './AddNewWarehouse.scss';
import backIcon from '../../assets/icons/arrow_back-24px.svg'

function AddNewWarehouse () {

    const handleSubmit = (e) => {
        e.preventDefault();

        for (let i=0; i < 8; i++) {
            const v = e.target[i].value
            return;
        }

    }

    return (
        <div className='addNewWarehouse'>
            <div className='addNewWarehouse__card'>
                <header className='addNewWarehouse__header'>
                    <img className='addNewWarehouse__back-icon' src={backIcon} alt='left arrow'/>
                    <h1 className= 'addNewWarehouse__heading page-header'>
                        Add New Warehouse
                    </h1>
                </header>
                <main className='addNewWarehouse__details'>
                    <form className='addNewWarehouse__forms' onSubmit={handleSubmit} id='form'>
                        <div className='addNewWarehouse__details-warehouse'>
                            <h2 className='addNewWarehouse__details-subheading sub-header'>
                                Warehouse Details
                            </h2>
                            <div className='addNewWarehouse__form-container'>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>
                                    Warehouse Name
                                    <input className='addNewWarehouse__input' type='text' placeholder='Warehouse Name'/>
                                    <label className= 'addNewWarehouse__input-error'>This field is required</label>
                                </label>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>
                                    Street Address
                                    <input className='addNewWarehouse__input' type='text' placeholder='Street Address'/>
                                    <label className= 'addNewWarehouse__input-error'>This field is required</label>
                                </label>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>
                                    City
                                    <input className='addNewWarehouse__input' type='text' placeholder='City'/>
                                    <label className= 'addNewWarehouse__input-error'>This field is required</label>
                                </label>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>
                                    Country
                                    <input className='addNewWarehouse__input' type='text' placeholder='Country'/>
                                    <label className= 'addNewWarehouse__input-error'>This field is required</label>
                                </label>
                            </div>
                        </div>
                        <div className='addNewWarehouse__details-contact'>
                            <h2 className='addNewWarehouse__details-subheading sub-header'>
                                Contact Details
                            </h2>
                            <div className='addNewWarehouse__form-container'>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>
                                    Contact Name
                                    <input className='addNewWarehouse__input' type='text' placeholder='Contact Name'/>
                                    <label className= 'addNewWarehouse__input-error'>This field is required</label>
                                </label>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>
                                    Position
                                    <input className='addNewWarehouse__input' type='text' placeholder='Position'/>
                                    <label className= 'addNewWarehouse__input-error'>This field is required</label>
                                </label>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>
                                    Phone Number
                                    <input className='addNewWarehouse__input' type='text' placeholder='Phone Number'/>
                                    <label className= 'addNewWarehouse__input-error'>This field is required</label>
                                </label>
                                <label className='addNewWarehouse__label label-text' htmlFor='addNewWarehouse__input'>
                                    Email
                                    <input className='addNewWarehouse__input' type='text' placeholder='Email'/>
                                    <label className= 'addNewWarehouse__input-error'>This field is required</label>
                                </label>
                            </div>
                        </div>
                    </form>
                </main>
                <div className='addNewWarehouse__button-container'>
                    <button className='addNewWarehouse__button-cancel button-text' type='submit'>
                        Cancel
                    </button>
                    <button className='addNewWarehouse__button-add button-text' type='submit' form='form'>
                        + Add Warehouse
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddNewWarehouse ;