import React from "react";


export default class SettingTheme extends React.Component {
    render(){
        return (
            <div id={'settings_theme'} className={'id-component__wrapper o-block u-pt--xxl u-mb--xxl'}>
                <p className={'u-h2 u-mb--lg o-flex'}>
                    Theme
                    <span className={'o-flex--1'}></span>
                    <span className={'c-code c-code--inline u-bg--midground u-color--background'}>Settings</span>
                </p>
                <p className={'u-h4 u-mb--lg'}>Available settings</p>
                <p className={'u-mb--lg'}>The theme settings allow extremely flexible customisation, maintenance and implementation of themes.</p>
                <p className={'u-mb--lg'}>Theme settings exist as native CSS variables. </p>

                <p className={'u-h4 u-mt--xxl'}>Usage</p>
                <p className={'u-mb--lg'}>To apply a theme a class is set on the root of the document, this is usually the <span className={'c-code c-code--inline'}>&lt;html&gt;</span> element.</p>

                <pre className={'c-code u-mb--lg'}>
                &lt;html class="<span className={'u-color--error'}>t-default</span>"&gt;...&lt;/html&gt;<br/>
                &lt;html class="<span className={'u-color--error'}>t-theme-name</span>"&gt;...&lt;/html&gt;
                </pre>

                <p className={'u-mb--lg'}>In order for a user to switch between themes a mechanism must be created (this can vary between projects and is not supported by this library).</p>

                <p className={'u-h4 u-mt--xxl'}>Theme composition</p>
                <p className={'u-mb--lg'}>Themes are composed of between 10 and 12 core colours (6 UI colours and 4 accent colours). These colours form the foundation or palatte of the theme and are then applied to other variables to specify component styles.</p>
                <p className={'u-mb--lg'}>For example, the app header component of this library applies a background color using the variable <span className={'c-code c-code--inline'}>var(--background-header-app)</span> whose value is defined as <span className={'c-code c-code--inline'}>var(--text)</span>. This method allows complete customisation of theme colours without affecting other components.</p>

                <p className={'u-h4 u-mt--xxl'}>Theme variable examples</p>

                <div className={'o-table u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Variable name</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Value</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                        <p className={'u-font--bold'}>Example</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>--ui-background</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>#FFFFFF</p>
                        </div>
                        <div className={'o-table__cell u-p--sm u-bg--background'}>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>--ui-background-accent</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>#EEEEEE</p>
                        </div>
                        <div className={'o-table__cell u-p--sm u-bg--background-accent'}>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>--ui-midground</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>#BBBBBB</p>
                        </div>
                        <div className={'o-table__cell u-p--sm u-bg--midground'}>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>--ui-foreground</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>#666666</p>
                        </div>
                        <div className={'o-table__cell u-p--sm u-bg--foreground'}>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>--ui-text</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>#161616</p>
                        </div>
                        <div className={'o-table__cell u-p--sm u-bg--text'}>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>--ui-text-accent</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>#333333</p>
                        </div>
                        <div className={'o-table__cell u-p--sm u-bg--text-accent'}>
                        </div>
                    </div>
    
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>--ui-accent-1</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>#0ABDE3</p>
                        </div>
                        <div className={'o-table__cell u-p--sm u-bg--accent-1'}>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>--ui-accent-2</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>#1DD1A1</p>
                        </div>
                        <div className={'o-table__cell u-p--sm u-bg--accent-2'}>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>--ui-accent-3</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>#FECA57</p>
                        </div>
                        <div className={'o-table__cell u-p--sm u-bg--accent-3'}>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>--ui-accent-4</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline'}>#EE5253</p>
                        </div>
                        <div className={'o-table__cell u-p--sm u-bg--accent-4'}>
                        </div>
                    </div>



                </div>

            </div>


        )
    }
}