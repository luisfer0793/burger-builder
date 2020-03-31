import React from 'react';

// import styles from './Layout.module.css';

const Layout = props => (
    <React.Fragment>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main>
            { props.children }
        </main>
    </React.Fragment>
);

export default Layout;