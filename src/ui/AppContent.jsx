import React from 'react';
import AppFooter from './AppFooter';

import SettingCore from './Components/SettingCore';
import SettingTheme from './Components/SettingTheme';

import ResetUserAgent from './Components/ResetUserAgent';
import ResetBoxSizing from './Components/ResetBoxSizing';

import ElementBody from './Components/ElementBody';
import ElementHeading from './Components/ElementHeading';

import ObjectFlex from './Components/ObjectFlex';

import ComponentButton from './Components/ComponentButton';
import ComponentHeader from './Components/ComponentHeader';
import ComponentFooter from './Components/ComponentFooter';
import ComponentSwitch from './Components/ComponentSwitch';

import UtilityBackground from './Components/UtilityBackground';
import UtilityBorder from './Components/UtilityBorder';
import UtilityMargin from './Components/UtilityMargin';
import UtilityPadding from './Components/UtilityPadding';


export default class AppContent extends React.Component {

    render(){
        return (
            <main className={'c-content u-scrollable o-flex--1'}>
                <div className={'u-p--xxl u-ml--xl u-mr--xl'}>
                    <p className={'u-h1 u-mt--xxl'} id={'section_settings'}>Settings</p>
                    <SettingCore/>
                    <SettingTheme/>

                    <p className={'u-h1 u-pt--xxl u-mt--xxl'} id={'section_resets'}>Resets</p>
                    <ResetUserAgent/>
                    <ResetBoxSizing/>

                    <p className={'u-h1 u-pt--xxl u-mt--xxl'} id={'section_elements'}>Elements</p>
                    <ElementBody/>
                    <ElementHeading/>
                    {/* <ElementScrollbar/> */}
                    {/* <ElementTypography/> */}

                    <p className={'u-h1 u-pt--xxl u-mt--xxl'} id={'section_objects'}>Objects</p>
                    {/* <ObjectBlock/> */}
                    <ObjectFlex/>
                    {/* <ObjectTable/> */}
                    {/* <ObjectWrapper/> */}

                    <p className={'u-h1 u-pt--xxl u-mt--xxl'} id={'section_components'}>Components</p>
                    <ComponentButton/>
                    {/* <ComponentCode/> */}
                    <ComponentHeader/>
                    <ComponentFooter/>
                    {/* <ComponentSidebar/> */}
                    <ComponentSwitch/>

                    <p className={'u-h1 u-pt--xxl u-mt--xxl'} id={'section_utilities'}>Utilities</p>
                    <UtilityBackground/>
                    <UtilityBorder/>
                    {/* <UtilityClearfix/> */}
                    {/* <UtilityColour/> */}
                    {/* <UtilityHeading/> */}
                    <UtilityMargin/>
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
