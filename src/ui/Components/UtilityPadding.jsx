import React from "react";


export default class UtilityPadding extends React.Component {
    render(){
        return (
            <div className={'id-component__wrapper o-block u-pt--xxl u-mb--xxl'} id={'utility_padding'}>
                <p className={'u-h2 u-mb--xl o-flex o-flex--center u-bg--foreground u-color--background u-p--md u-radius'}>
                    <span>Padding</span>
                    <span className={'o-flex--1'}></span>
                    <span className={'u-font--mono u-font--md'}>_utility.background.less</span>
                </p>
                <p className={'u-mb--lg'}>The padding utility classes can be used to set the <span className={'c-code c-code--inline'}>padding</span> property of an element. Each of the modifiers directly correlate to the unit variables defined in UI Settings.</p>
                <p className={'u-mb--lg'}>It is possible to set the padding value for each side of the box individually. Simply define the side by appending <span className={'c-code c-code--inline'}>t</span> for padding-top, <span className={'c-code c-code--inline'}>r</span> for padding-right, <span className={'c-code c-code--inline'}>b</span> for padding-bottom and <span className={'c-code c-code--inline'}>l</span> for padding-left.</p>
                <p className={'u-mb--lg u-font--italic'}>Append the <span className={'c-code c-code--inline'}>--force</span> modifier to any of the classes to apply the <span className={'c-code c-code--inline'}>!important</span> declaration. This is not advised.</p>

                <p className={'u-h4 u-mt--xxl'}>Usage</p>
                <p className={'u-mb--lg'}>Add the padding class to an element.</p>

                <div className={'c-code u-mb--lg'}>
                    ... class="<span className={'u-color--error'}>u-p</span>" ...<br/>
                    ... class="<span className={'u-color--error'}>u-pr--md</span>" ...<br/>
                    ... class="<span className={'u-color--error'}>u-pt u-pb--md--force</span>" ...<br/>
                </div>

                <p className={'u-mb--md'}>In the examples below padding is shaded in <span className={'u-bg--secondary u-color--background'}>&nbsp;green&nbsp;</span> while the <span className={'u-bg--midground u-color--background'}>&nbsp;grey&nbsp;</span> area represents the box.</p>

                <p className={'u-h4 u-mt--xxl'}>Padding on all sides</p>

                <div className={'o-table u-mt--lg u-mb--xl'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Modifier classes</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Description</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Example</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-p--xxs</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>Applies the <span className={'c-code c-code--inline u-color--error'}>var(--unit-xxs)</span> value to the <b>padding</b> property.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-p--xxs u-bg--secondary'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-p--xs</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>Applies the <span className={'c-code c-code--inline u-color--error'}>var(--unit-xs)</span> value to the <b>padding</b> property.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-p--xs u-bg--secondary'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-p--sm</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>Applies the <span className={'c-code c-code--inline u-color--error'}>var(--unit-sm)</span> value to the <b>padding</b> property.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-p--sm u-bg--secondary'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-p--rg</p><p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-p</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>Applies the <span className={'c-code c-code--inline u-color--error'}>var(--unit-rg)</span> value to the <b>padding</b> property.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-p--rg u-bg--secondary'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-p--md</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>Applies the <span className={'c-code c-code--inline u-color--error'}>var(--unit-md)</span> value to the <b>padding</b> property.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-p--md u-bg--secondary'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-p--lg</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>Applies the <span className={'c-code c-code--inline u-color--error'}>var(--unit-lg)</span> value to the <b>padding</b> property.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-p--lg u-bg--secondary'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-p--xl</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>Applies the <span className={'c-code c-code--inline u-color--error'}>var(--unit-xl)</span> value to the <b>padding</b> property.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-p--xl u-bg--secondary'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-p--xxl</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>Applies the <span className={'c-code c-code--inline u-color--error'}>var(--unit-xxl)</span> value to the <b>padding</b> property.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-p--xxl u-bg--secondary'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                </div>

                <p className={'u-h4 u-mt--xxl'}>Padding on specific sides</p>


                <div className={'o-table u-mt--lg u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Modifier classes</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Example</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pt--xxs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pt--xs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pt--sm</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pt--rg</p><p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pt</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pt--md</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pt--lg</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pt--xl</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pt--xxl</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-pt--xxs u-bg--secondary u-mr--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-pt--xs u-bg--secondary u-mr--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-pt--sm u-bg--secondary u-mr--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-pt--rg u-bg--secondary u-mr--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-pt--md u-bg--secondary u-mr--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-pt--lg u-bg--secondary u-mr--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-pt--xl u-bg--secondary u-mr--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-pt--xxl u-bg--secondary u-mr--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pr--xxs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pr--xs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pr--sm</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pr--rg</p><p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pr</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pr--md</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pr--lg</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pr--xl</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pr--xxl</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-pr--xxs u-bg--secondary u-mb--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-pr--xs u-bg--secondary u-mb--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-pr--sm u-bg--secondary u-mb--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-pr--rg u-bg--secondary u-mb--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-pr--md u-bg--secondary u-mb--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-pr--lg u-bg--secondary u-mb--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-pr--xl u-bg--secondary u-mb--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-pr--xxl u-bg--secondary u-mb--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pb--xxs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pb--xs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pb--sm</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pb--rg</p><p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pb</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pb--md</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pb--lg</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pb--xl</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pb--xxl</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-pb--xxs u-bg--secondary u-mr--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-pb--xs u-bg--secondary u-mr--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-pb--sm u-bg--secondary u-mr--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-pb--rg u-bg--secondary u-mr--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-pb--md u-bg--secondary u-mr--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-pb--lg u-bg--secondary u-mr--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-pb--xl u-bg--secondary u-mr--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-pb--xxl u-bg--secondary u-mr--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pl--xxs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pl--xs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pl--sm</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pl--rg</p><p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pl</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pl--md</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pl--lg</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pl--xl</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-pl--xxl</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-pl--xxs u-bg--secondary u-mb--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-pl--xs u-bg--secondary u-mb--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-pl--sm u-bg--secondary u-mb--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-pl--rg u-bg--secondary u-mb--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-pl--md u-bg--secondary u-mb--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-pl--lg u-bg--secondary u-mb--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-pl--xl u-bg--secondary u-mb--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-pl--xxl u-bg--secondary u-mb--md'}>
                                <span className={'o-block--inline u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                        </div>
                    </div>
                    
                </div>

            </div>
        )
    }
}