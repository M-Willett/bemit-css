import React from "react";


export default class UtilityMargin extends React.Component {
    render(){
        return (
            <div className={'id-component__wrapper o-block u-pt--xxl u-mb--xxl'} id={'utility_margin'}>
                <p className={'u-h2 u-mb--lg o-flex'}>
                    Margin
                    <span className={'o-flex--1'}></span>
                    <span className={'c-code c-code--inline u-bg--midground u-color--background'}>Utility</span>
                </p>
                <p className={'u-mb--lg'}>The margin utility classes can be used to set the <span className={'c-code c-code--inline'}>margin</span> property of an element. Each of the modifiers directly correlate to the unit variables defined in UI Settings.</p>
                <p className={'u-mb--lg'}>It is possible to set the margin value for each side of the box individually. Simply define the side by appending <span className={'c-code c-code--inline'}>t</span> for margin-top, <span className={'c-code c-code--inline'}>r</span> for margin-right, <span className={'c-code c-code--inline'}>b</span> for margin-bottom and <span className={'c-code c-code--inline'}>l</span> for margin-left.</p>
                <p className={'u-mb--lg u-font--italic'}>Append the <span className={'c-code c-code--inline'}>--force</span> modifier to any of the classes to apply the <span className={'c-code c-code--inline'}>!important</span> declaration. This is not advised.</p>

                <p className={'u-h4 u-mt--xxl'}>Usage</p>
                <p className={'u-mb--lg'}>To make use of these utilities simply add the margin class to an element.</p>

                <div className={'c-code u-mb--lg'}>
                ... class="u-m" ...<br/>
                ... class="u-mr--md" ...<br/>
                ... class="u-mt u-mb--md--force" ...<br/>
                </div>

                <p className={'u-mb--md'}>In the examples below margin is shaded in <span className={'u-bg--quarternary u-color--background'}>&nbsp;red&nbsp;</span> while the <span className={'u-bg--midground u-color--background'}>&nbsp;grey&nbsp;</span> area represents the box.</p>

                <p className={'u-h4 u-mt--xxl'}>Margin around all sides</p>

                <div className={'o-table u-mt--lg u-mb--xl'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Modifier classes</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Description</p>
                        </div>                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Example</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-m--xxs</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>Applies the <span className={'c-code c-code--inline u-color--error'}>var(--unit-xxs)</span> value to the <b>margin</b> property.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--quarternary'}>
                                <span className={'o-block--inline u-m--xxs u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-m--xs</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>Applies the <span className={'c-code c-code--inline u-color--error'}>var(--unit-xs)</span> value to the <b>margin</b> property.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--quarternary'}>
                                <span className={'o-block--inline u-m--xs u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-m--sm</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>Applies the <span className={'c-code c-code--inline u-color--error'}>var(--unit-sm)</span> value to the <b>margin</b> property.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--quarternary'}>
                                <span className={'o-block--inline u-m--sm u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-m--rg</p><p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-m</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>Applies the <span className={'c-code c-code--inline u-color--error'}>var(--unit-rg)</span> value to the <b>margin</b> property.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--quarternary'}>
                                <span className={'o-block--inline u-m--rg u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-m--md</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>Applies the <span className={'c-code c-code--inline u-color--error'}>var(--unit-md)</span> value to the <b>margin</b> property.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--quarternary'}>
                                <span className={'o-block--inline u-m--md u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-m--lg</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>Applies the <span className={'c-code c-code--inline u-color--error'}>var(--unit-lg)</span> value to the <b>margin</b> property.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--quarternary'}>
                                <span className={'o-block--inline u-m--lg u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-m--xl</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>Applies the <span className={'c-code c-code--inline u-color--error'}>var(--unit-xl)</span> value to the <b>margin</b> property.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--quarternary'}>
                                <span className={'o-block--inline u-m--xl u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-m--xxl</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>Applies the <span className={'c-code c-code--inline u-color--error'}>var(--unit-xxl)</span> value to the <b>margin</b> property.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--quarternary'}>
                                <span className={'o-block--inline u-m--xxl u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                </div>

                <p className={'u-h4 u-mt--xxl'}>Margin around specific sides</p>

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
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mt--xxs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mt--xs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mt--sm</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mt--rg</p><p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mt</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mt--md</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mt--lg</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mt--xl</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mt--xxl</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--quarternary u-mr--md'}>
                                <span className={'o-block--inline u-mt--xxs u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--quarternary u-mr--md'}>
                                <span className={'o-block--inline u-mt--xs u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--quarternary u-mr--md'}>
                                <span className={'o-block--inline u-mt--sm u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--quarternary u-mr--md'}>
                                <span className={'o-block--inline u-mt--rg u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--quarternary u-mr--md'}>
                                <span className={'o-block--inline u-mt--md u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--quarternary u-mr--md'}>
                                <span className={'o-block--inline u-mt--lg u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--quarternary u-mr--md'}>
                                <span className={'o-block--inline u-mt--xl u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--quarternary u-mr--md'}>
                                <span className={'o-block--inline u-mt--xxl u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mr--xxs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mr--xs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mr--sm</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mr--rg</p><p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mr</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mr--md</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mr--lg</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mr--xl</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mr--xxl</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--quarternary u-mb--md'}>
                                <span className={'o-block--inline u-mr--xxs u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--quarternary u-mb--md'}>
                                <span className={'o-block--inline u-mr--xs u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--quarternary u-mb--md'}>
                                <span className={'o-block--inline u-mr--sm u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--quarternary u-mb--md'}>
                                <span className={'o-block--inline u-mr--rg u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--quarternary u-mb--md'}>
                                <span className={'o-block--inline u-mr--md u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--quarternary u-mb--md'}>
                                <span className={'o-block--inline u-mr--lg u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--quarternary u-mb--md'}>
                                <span className={'o-block--inline u-mr--xl u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--quarternary u-mb--md'}>
                                <span className={'o-block--inline u-mr--xxl u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mb--xxs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mb--xs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mb--sm</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mb--rg</p><p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mb</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mb--md</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mb--lg</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mb--xl</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-mb--xxl</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--quarternary u-mr--md'}>
                                <span className={'o-block--inline u-mb--xxs u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--quarternary u-mr--md'}>
                                <span className={'o-block--inline u-mb--xs u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--quarternary u-mr--md'}>
                                <span className={'o-block--inline u-mb--sm u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--quarternary u-mr--md'}>
                                <span className={'o-block--inline u-mb--rg u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--quarternary u-mr--md'}>
                                <span className={'o-block--inline u-mb--md u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--quarternary u-mr--md'}>
                                <span className={'o-block--inline u-mb--lg u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--quarternary u-mr--md'}>
                                <span className={'o-block--inline u-mb--xl u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--quarternary u-mr--md'}>
                                <span className={'o-block--inline u-mb--xxl u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-ml--xxs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-ml--xs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-ml--sm</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-ml--rg</p><p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-ml</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-ml--md</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-ml--lg</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-ml--xl</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-ml--xxl</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--quarternary u-mb--md'}>
                                <span className={'o-block--inline u-ml--xxs u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--quarternary u-mb--md'}>
                                <span className={'o-block--inline u-ml--xs u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--quarternary u-mb--md'}>
                                <span className={'o-block--inline u-ml--sm u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--quarternary u-mb--md'}>
                                <span className={'o-block--inline u-ml--rg u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--quarternary u-mb--md'}>
                                <span className={'o-block--inline u-ml--md u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--quarternary u-mb--md'}>
                                <span className={'o-block--inline u-ml--lg u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--quarternary u-mb--md'}>
                                <span className={'o-block--inline u-ml--xl u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--quarternary u-mb--md'}>
                                <span className={'o-block--inline u-ml--xxl u-bg--midground'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                        </div>
                    </div>
                    
                </div>

            </div>
        )
    }
}