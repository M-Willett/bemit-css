import React from "react";


export default class SettingCore extends React.Component {
    render(){
        return (
            <div id={'settings_core'} className={'id-component__wrapper o-block u-pt--xxl u-mb--xxl'}>
                <p className={'u-h2 u-mb--xl o-flex o-flex--align-center u-bg--foreground u-color--background u-p--md u-radius'}>
                    <span>Core Settings</span>
                    <span className={'o-flex--1'}></span>
                    <span className={'u-font--mono u-font--md'}>_setting.theme.less</span>
                </p>

                <p className={'u-mb--lg'}>These settings exist as native <a href={'https://developer.mozilla.org/en-US/docs/Web/CSS/--*'}>CSS custom properties</a> - please check your project's support level as you may need to convert these to LESS/SASS variables.</p>
                <p className={'u-mb--lg'}>Using custom properties means that we can perform changes to the DOM, styling and theming instantly with minimal fallout. Another benefit is maintenance is hassle free.</p>
                <p className={'u-mb--lg'}>Beware - the core settings are applied globally which means that any changes may have undesirable consequences.</p>

                <p className={'u-font--bold u-mt--xl u-mb--md'}>Usage</p>
                <p className={'u-mb--lg'}>A CSS Custom Property should be applied as the value of a property.</p>

                <pre className={'c-code u-mb--lg'}>
                .c-header--app &#123;<br/>
                &nbsp;&nbsp;min-height: <span className={'u-color--error'}>var(--height-header-app)</span>;<br/>
                &nbsp;&nbsp;background-color: <span className={'u-color--error'}>var(--background-header-app)</span>;<br/>
                &nbsp;&nbsp;color: <span className={'u-color--error'}>var(--text-header-app)</span>;<br/>
                &#125;
                </pre>

                
                <p className={'u-font--bold u-mt--xl u-mb--md'}>Quirks</p>
                <p className={'u-mb--lg'}>If you use a CSS preprocessor you may find that the calc function doesn't work as expected, produces incorrect results or your watch task fails to compile. This can often be fixed by interpolating the property values to correct the generated CSS, see below for and example highlighted in red:</p>

                <pre className={'c-code u-mb--lg'}>
                    height: <span className={'u-color--error u-font--bold'}>~"</span>calc( 100vh - var(--height-header-app) )<span className={'u-color--error u-font--bold'}>"</span>;<br/>
                </pre>

                <p className={'u-h4 u-mt--xxl'}>Available settings</p>

                <p className={'u-font--bold u-mt--lg'}>Breakpoints</p>
                <div className={'o-table o-table--rg u-mt--rg u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Variable name</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Value</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Purpose</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--mobile-max-width</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>768px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                </div>


                <p className={'u-font--bold u-mt--lg'}>Heights</p>
                <div className={'o-table o-table--rg u-mt--rg u-mb--lg'}>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--height-header</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>auto</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--height-header-app</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>48px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--height-footer</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>240px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                </div>


                <p className={'u-font--bold u-mt--lg'}>Widths</p>
                <div className={'o-table o-table--rg u-mt--rg u-mb--lg'}>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--width-logo</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>48px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--width-sidebar</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>15em</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--width-sidebar-abs</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>160px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--width-scrollbar</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>8px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                </div>


                <p className={'u-font--bold u-mt--lg'}>Font families</p>
                <div className={'o-table o-table--rg u-mt--rg u-mb--lg'}>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--font-family</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>roboto, verdana, 'helvetica neue', helvetica, arial, sans-serif</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--font-family-mono</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>consolas, 'courier new', monospace</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                </div>


                <p className={'u-font--bold u-mt--lg'}>Font sizes</p>
                <div className={'o-table o-table--rg u-mt--rg u-mb--lg'}>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--font-xxs</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>9px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--font-xs</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>10px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--font-sm</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>11px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--font-rg</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>12px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--font-md</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>14px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--font-lg</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>16px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--font-xl</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>24px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--font-xxl</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>32px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                </div>


                <p className={'u-font--bold u-mt--lg'}>Font weights</p>
                <div className={'o-table o-table--rg u-mt--rg u-mb--lg'}>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--font-bold</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>600</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--font-medium</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>400</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--font-regular</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>300</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--font-light</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>100</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                </div>


                <p className={'u-font--bold u-mt--lg'}>Units</p>
                <div className={'o-table o-table--rg u-mt--rg u-mb--lg'}>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--unit-xxs</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>1px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--unit-xs</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>2px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--unit-sm</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>4px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--unit-rg</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>6px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--unit-md</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>8px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--unit-lg</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>12px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--unit-xl</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>24px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>--unit-xxl</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>32px</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={''}>descc</p>
                        </div>
                    </div>



                </div>
            </div>


        )
    }
}