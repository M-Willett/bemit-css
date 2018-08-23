import React from "react";


export default class UtilityBackground extends React.Component {
    render(){
        return (
            <div className={'id-component__wrapper o-block u-mb--xxl'} id={'utility_background'}>
                <p className={'u-h2'}>Utility - Background</p>
                <p className={''}>The background utility classes can be used on-the-fly to set the <span className={'c-code c-code--inline'}>background-color</span> property of an element by simply adding a class.</p>

                <p className={'u-h4'}>Usage</p>
                {/* <p className={'u-mb--md'}>These settings are defined in a single place and allow easy customisation of some global variables.</p> */}

                <div className={'c-code u-mb--lg'}>
                ... class="u-background--primary"...
                </div>

                <div className={'o-table u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Component</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Class</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm u-bg--standard'}>
                            <p>&nbsp;</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--md u-mr'}>.u-bg--standard</p>
                            <p className={'c-code c-code--inline u-mb--md'}>.u-background--standard</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm u-bg--contrast'}>
                            <p>&nbsp;</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--md u-mr'}>.u-bg--contrast</p>
                            <p className={'c-code c-code--inline u-mb--md'}>.u-background--contrast</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm u-bg--primary'}>
                            <p>&nbsp;</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--md u-mr'}>.u-bg--primary</p>
                            <p className={'c-code c-code--inline u-mb--md'}>.u-background--primary</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm u-bg--secondary'}>
                            <p>&nbsp;</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--md u-mr'}>.u-bg--secondary</p>
                            <p className={'c-code c-code--inline u-mb--md'}>.u-background--secondary</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm u-bg--tertiary'}>
                            <p>&nbsp;</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--md u-mr'}>.u-bg--tertiary</p>
                            <p className={'c-code c-code--inline u-mb--md'}>.u-background--tertiary</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm u-bg--quarternary'}>
                            <p>&nbsp;</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--md u-mr'}>.u-bg--quarternary</p>
                            <p className={'c-code c-code--inline u-mb--md'}>.u-background--quarternary</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm u-bg--success'}>
                            <p>&nbsp;</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--md u-mr'}>.u-bg--success</p>
                            <p className={'c-code c-code--inline u-mb--md'}>.u-background--success</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm u-bg--submit'}>
                            <p>&nbsp;</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--md u-mr'}>.u-bg--submit</p>
                            <p className={'c-code c-code--inline u-mb--md'}>.u-background--submit</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm u-bg--warning'}>
                            <p>&nbsp;</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--md u-mr'}>.u-bg--warning</p>
                            <p className={'c-code c-code--inline u-mb--md'}>.u-background--warning</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm u-bg--error'}>
                            <p>&nbsp;</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--md u-mr'}>.u-bg--error</p>
                            <p className={'c-code c-code--inline u-mb--md'}>.u-background--error</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm u-bg--positive'}>
                            <p>&nbsp;</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--md u-mr'}>.u-bg--positive</p>
                            <p className={'c-code c-code--inline u-mb--md'}>.u-background--positive</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm u-bg--negative'}>
                            <p>&nbsp;</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--md u-mr'}>.u-bg--negative</p>
                            <p className={'c-code c-code--inline u-mb--md'}>.u-background--negative</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}