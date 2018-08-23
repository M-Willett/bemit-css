import React from 'react';
import AppFooter from './AppFooter';
import SettingCore from './Components/SettingCore';
import SettingTheme from './Components/SettingTheme';
import ElementBody from './Components/ElementBody';
import ComponentButton from './Components/ComponentButton';


export default class AppContent extends React.Component {

    render(){
        return (
            <main className={'o-flex--1'}>
                <div className={'u-p--xl'}>
                    <p className={'u-h1'}>Settings</p>

                    <SettingCore/>
                    <SettingTheme/>

                    <p className={'u-h1'}>Resets</p>

                    <p className={'u-h1'}>Elements</p>

                    <ElementBody/>

                    <p className={'u-h1'}>Objects</p>

                    <p className={'u-h1'}>Components</p>
                    <ComponentButton/>

                    <AppFooter/>
                </div>
            </main>
        )
    }
}
