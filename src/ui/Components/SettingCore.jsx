import React from "react";


export default class SettingCore extends React.Component {
    render(){
        return (
            <div className={'id-component__wrapper o-block u-pt--xxl u-mb--xxl'}>
                <p className={'u-h2'}>Core settings</p>
                <p className={'u-h4'}>Available settings</p>
                <p className={'u-mb--md'}>These settings are defined in a single place and allow easy customisation of some global variables.</p>
                <p className={'u-mb--md'}>Beware, these settings are applied for all themes.</p>

                <div className={'c-code u-mb--md'}>
               .c-component &#123;<br/>
                &nbsp;&nbsp;height: var(--height-component);<br/>
                &#125;
                </div>

                <div className={'o-table u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Variable name</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Value</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>xyz</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>xyz</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>xyz</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>xyz</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>xyz</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>xyz</p>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}