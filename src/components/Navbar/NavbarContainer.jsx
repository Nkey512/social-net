import StoreContext from '../../StoreContext';
import Navbar from './Navbar';


const NavbarContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().sidebar
                    return (
                        <Navbar sidebar={state}/>
                    )
                }
            }
            
        </StoreContext.Consumer>
    )
}

export default NavbarContainer;