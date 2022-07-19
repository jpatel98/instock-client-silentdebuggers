import './Header.scss';
import logo from '../../logo/InStock-Logo.svg'

function Header () {
    // const handleClick = (event) => {
    //     event.target.classList.add('header__nav-item--selected');
    //     event.target.nextSibling.classList.remove('header__nav-item--selected');
    // }
    // const handleClickTwo = (event) => {
    //     event.target.classList.add('header__nav-item--selected');
    //     event.target.previousSibling.classList.remove('header__nav-item--selected');
    // }

    return ( 
        <div className='header'>
            <img className='header__logo' src={logo} alt='logo'/>
            <ul className='header__nav'>
                <li className='header__nav-item' >
                    Warehouses
                </li>
                <li className='header__nav-item' >
                    Inventory
                </li>
            </ul>
        </div>
     );
}

export default Header;