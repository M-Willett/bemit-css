import React from 'react';


export default class AppSidebar extends React.Component {

    render(){
        return (
            <aside className={'c-sidebar u-p u-scrollable u-br'}>
                <div className={'c-sidebar__navigation'}>
                    {/* Settings */}
                    <a className={'o-block u-mb--xs u-bold u-pt--md'} href={'#settings'}>Settings</a>
                    <a className={'o-block u-mb--xs u-pl--rg'} href={'#settings_core'}>Core settings</a>
                    <a className={'o-block u-mb--xs u-pl--rg'} href={'#settings_theme'}>Theme settings</a>

                    {/* Resets */}
                    <a className={'o-block u-mb--xs u-bold u-pt--md'} href={'#reset'}>Reset</a>
                    <a className={'o-block u-mb--xs u-pl--rg'} href={'#reset_user_agent'}>User Agent</a>
                    <a className={'o-block u-mb--xs u-pl--rg'} href={'#reset_box_sizing'}>Box Sizing</a>

                    {/* Elements */}
                    <a className={'o-block u-mb--xs u-bold u-pt--md'} href={'#elements'}>Elements</a>
                    <a className={'o-block u-mb--xs u-pl--rg'} href={'#element_body'}>Body</a>
                    <a className={'o-block u-mb--xs u-pl--rg'} href={'#element_heading'}>Heading</a>

                    {/* Objects */}
                    <a className={'o-block u-mb--xs u-bold u-pt--md'} href={'#objects'}>Objects</a>
                    <a className={'o-block u-mb--xs u-pl--rg'} href={'#object_block'}>Sidebar</a>
                    <a className={'o-block u-mb--xs u-pl--rg'} href={'#object_flex'}>Flex</a>
                    <a className={'o-block u-mb--xs u-pl--rg'} href={'#object_wrapper'}>Wrapper</a>

                    {/* Components */}
                    <a className={'o-block u-mb--xs u-bold u-pt--md'} href={'#components'}>Components</a>
                    <a className={'o-block u-mb--xs u-pl--rg'} href={'#component_header'}>Header</a>
                    <a className={'o-block u-mb--xs u-pl--rg'} href={'#component_sidebar'}>Sidebar</a>
                    <a className={'o-block u-mb--xs u-pl--rg'} href={'#component_button'}>Button</a>

                </div>
            </aside>
        )
    }
}
