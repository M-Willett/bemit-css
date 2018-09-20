import React from "react";


export default class UtilityBackground extends React.Component {
    render(){
        return (
            <div className={'id-component__wrapper o-block u-pt--xxl u-mb--xxl'} id={'utility_background'}>
                <p className={'u-h2 u-mb--xl o-flex o-flex--align-center u-color--background u-bg--foreground u-p--md u-radius'}>
                    <span>Background</span>
                    <span className={'o-flex--1'}></span>
                    <span className={'u-font--mono u-font--md'}>_utility.background.less</span>
                </p>

                <p className={'u-mb--lg'}>The background utility classes can be used on-the-fly to set the <span className={'c-code c-code--inline'}>background-color</span> property of an element by simply adding a class.</p>
                <p className={'u-mb--lg'}>These can be used to help identify change, intent and state - for instance if a user has entered incorrect values into a form field.</p>

                <p className={'u-h4 u-mt--xxl'}>Usage</p>

                <p className={'u-mb--lg'}>Add the background utility class to an element.</p>

                <div className={'c-code u-mb--lg'}>
                ... class="<span className={'u-color--error'}>u-bg--primary</span>" ...<br/>
                ... class="<span className={'u-color--error'}>u-bg--positive</span>" ...
                </div>


                <div className={'o-table o-table--rg u-mt--lg u-mb--xl'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>UI-based examples</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Modifier class</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bg--background</p>
                        </div>
                        <div className={'o-table__cell u-bg--background'}>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bg--background-accent</p>
                        </div>
                        <div className={'o-table__cell u-bg--background-accent'}>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bg--midground</p>
                        </div>
                        <div className={'o-table__cell u-bg--midground'}>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bg--foreground</p>
                        </div>
                        <div className={'o-table__cell u-bg--foreground'}>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bg--text</p>
                        </div>
                        <div className={'o-table__cell u-bg--text'}>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bg--text-accent</p>
                        </div>
                        <div className={'o-table__cell u-bg--text-accent'}>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                </div>


                <div className={'o-table o-table--rg u-mt--lg u-mb--xl'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Priority-based examples</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Modifier class</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bg--standard</p>
                        </div>
                        <div className={'o-table__cell u-bg--standard'}>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bg--contrast</p>
                        </div>
                        <div className={'o-table__cell u-bg--contrast'}>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bg--primary</p>
                        </div>
                        <div className={'o-table__cell u-bg--primary'}>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bg--secondary</p>
                        </div>
                        <div className={'o-table__cell u-bg--secondary'}>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bg--tertiary</p>
                        </div>
                        <div className={'o-table__cell u-bg--tertiary'}>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bg--quarternary</p>
                        </div>
                        <div className={'o-table__cell u-bg--quarternary'}>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                </div>


                <div className={'o-table o-table--rg u-mt--lg u-mb--xl'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>State-based examples</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Modifier class</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bg--success</p>
                        </div>
                        <div className={'o-table__cell u-bg--success'}>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bg--submit</p>
                        </div>
                        <div className={'o-table__cell u-bg--submit'}>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bg--warning</p>
                        </div>
                        <div className={'o-table__cell u-bg--warning'}>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bg--error</p>
                        </div>
                        <div className={'o-table__cell u-bg--error'}>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                </div>


                <div className={'o-table o-table--rg u-mt--lg u-mb--xl'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Directional examples</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Modifier class</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bg--positive</p>
                        </div>
                        <div className={'o-table__cell u-bg--positive'}>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bg--negative</p>
                        </div>
                        <div className={'o-table__cell u-bg--negative'}>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}