import React from 'react';


export default class AppFooter extends React.Component {

    render(){
        return (
            <footer className={'o-flex'}>
                <p>&copy; Avanade - All rights reserved.</p>
                <span className={'o-flex--1'}></span>
                <p className={''}>Built by Matt Willett</p>
            </footer>
        )
    }
}
