import React from "react";


export default class SettingTheme extends React.Component {
    render(){
        return (
            <div className={'id-component__wrapper o-block u-mb--xxl'}>
                <p className={'u-h3'}>Theme settings</p>
                <p className={'u-h4 u-mb--md'}>Available settings</p>
                <p className={'u-mb--md'}>The theme settings allow extremely flexible customisation, maintenance and implementation of themes both old and new.</p>
                <p className={'u-h4 u-mb--md'}>Usage</p>
                <p className={'u-mb--md'}>To apply a theme a class is set on the root of the document, usually the <span className={'c-code c-code--inline'}>&lt;html&gt;</span> element.</p>

                <div className={'c-code u-mb--md'}>
               .c-component__text &#123;<br/>
                &nbsp;&nbsp;color: var(--text);<br/>
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