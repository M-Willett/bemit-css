import React from 'react';


export default class AppFooter extends React.Component {

    render(){
        return (
            <footer className={'c-footer o-flex'}>
                <p>&copy; All rights reserved.</p>
                <span className={'o-flex--1'}></span>
                <p className={''}>By Matt Willett</p>
            </footer>
        )
    }
}
