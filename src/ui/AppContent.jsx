import React from 'react';
import AppFooter from './AppFooter';
import SettingCore from './Components/SettingCore';
import SettingTheme from './Components/SettingTheme';
import ElementBody from './Components/ElementBody';
import ComponentButton from './Components/ComponentButton';
import UtilityBackground from './Components/UtilityBackground';
import UtilityPadding from './Components/UtilityPadding';


export default class AppContent extends React.Component {

    render(){
        return (
            <main className={'c-content--abs o-flex--1'}>
                <div className={'u-p--xl'}>
                    <p className={'u-h1'}>Settings</p>
                    <SettingCore/>
                    <SettingTheme/>

                    <p className={'u-h1'}>Resets</p>
                    {/* <ResetBoxSizing/> */}
                    {/* <ResetUserAgent/> */}

                    <p className={'u-h1'}>Elements</p>
                    <ElementBody/>
                    {/* <ElementHeading/> */}
                    {/* <ElementScrollbar/> */}
                    {/* <ElementTypography/> */}

                    <p className={'u-h1'}>Objects</p>
                    {/* <ObjectBlock/> */}
                    {/* <ObjectFlex/> */}
                    {/* <ObjectTable/> */}
                    {/* <ObjectWrapper/> */}

                    <p className={'u-h1'}>Components</p>
                    <ComponentButton/>
                    {/* <ComponentCode/> */}
                    {/* <ComponentHeader/> */}
                    {/* <ComponentFooter/> */}
                    {/* <ComponentSidebar/> */}

                    <p className={'u-h1'}>Utilities</p>
                    <UtilityBackground/>
                    {/* <UtilityBorder/> */}
                    {/* <UtilityClearfix/> */}
                    {/* <UtilityColour/> */}
                    {/* <UtilityHeading/> */}
                    {/* <UtilityMargin/> */}
                    <UtilityPadding/>
                    {/* <UtilityPosition/> */}
                    {/* <UtilityScroll/> */}
                    {/* <UtilityTypography/> */}
                    {/* <UtilityWidth/> */}
                    {/* <Utility/> */}
                    {/* <Utility/> */}

                    <AppFooter/>
                </div>
            </main>
        )
    }
}
