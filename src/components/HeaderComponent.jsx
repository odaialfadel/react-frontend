import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div href="https://javaguides.net" className='navbar-brand'>Employee Management System<a></a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;