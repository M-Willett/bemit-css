import React from 'react';


export default class AppHeader extends React.Component {

    render(){
        return (
            <header className={'c-header c-header--app o-flex o-flex--center u-width--full'}>
                <div className={'c-header__logo u-font--bold u-ml--rg'}>
                    BEM CSS Library
                </div>
                <span className={'o-flex--1'}></span>
                <div className={'c-header__navigation o-flex o-flex--center'}>
                    <a className={'u-mr--rg'} href={'#settings'}>Settings</a>
                    <a className={'u-mr--rg'} href={'#reset'}>Reset</a>
                    <a className={'u-mr--rg'} href={'#generic'}>Generic</a>
                    <a className={'u-mr--rg'} href={'#tools'}>Tools</a>
                    <a className={'u-mr--rg'} href={'#elements'}>Elements</a>
                    <a className={'u-mr--rg'} href={'#objects'}>Objects</a>
                    <a className={'u-mr--rg'} href={'#components'}>Components</a>
                </div>
            </header>
        )
    }
}
