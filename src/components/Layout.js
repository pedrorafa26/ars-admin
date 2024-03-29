import React from 'react'
import Navbar from './Navbar'

function Layout(props) {
    return(
        <React.Fragment>
            <Navbar
                setUser = {props.setUser}
            />
            {props.children}
        </React.Fragment>
    )
}

export default Layout