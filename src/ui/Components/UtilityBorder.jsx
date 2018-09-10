import React from "react";


export default class UtilityBorder extends React.Component {
    render(){
        return (
            <div className={'id-component__wrapper o-block u-pt--xxl u-mb--xxl'} id={'utility_border'}>
                <p className={'u-h2 u-mb--lg o-flex'}>
                    Border
                    <span className={'o-flex--1'}></span>
                    <span className={'c-code c-code--inline u-bg--midground u-color--background'}>Utility</span>
                </p>
                <p className={'u-mb--lg'}>The border utility classes can be used to set the <span className={'c-code c-code--inline'}>border</span> property of an element. Each of the size modifiers directly correlate to the unit variables defined in UI Settings.</p>
                <p className={'u-mb--lg'}>It is possible to set the border value for each side of the box individually. Simply define the side by appending <span className={'c-code c-code--inline'}>t</span> for border-top, <span className={'c-code c-code--inline'}>r</span> for border-right, <span className={'c-code c-code--inline'}>b</span> for border-bottom and <span className={'c-code c-code--inline'}>l</span> for border-left.</p>
                <p className={'u-mb--lg u-font--italic'}>Append the <span className={'c-code c-code--inline'}>--force</span> modifier to any of the classes to apply the <span className={'c-code c-code--inline'}>!important</span> declaration. This is not advised.</p>

                <p className={'u-h4 u-mt--xxl'}>Usage</p>
                <p className={'u-mb--lg'}>Add the padding class to an element.</p>

                <div className={'c-code u-mb--lg'}>
                ... class="u-b" ...<br/>
                ... class="u-br--md" ...<br/>
                ... class="u-bt u-b--major--force" ...<br/>
                </div>

                <p className={'u-mb--md'}>In the examples below borders are shaded in <span className={'u-bg--primary u-color--background'}>&nbsp;blue&nbsp;</span> while the <span className={'u-bg--tertiary'}>&nbsp;yellow&nbsp;</span> area represents the box.</p>

                <p className={'u-h4 u-mt--xxl'}>Border on all sides</p>

                <div className={'o-table u-mt--lg u-mb--xl'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Example</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Modifier classes</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--tertiary'}>
                                <span className={'o-block--inline u-b--xxs u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-b--xxs</p>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-b</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--tertiary'}>
                                <span className={'o-block--inline u-b--xs u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-b--xs</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--tertiary'}>
                                <span className={'o-block--inline u-b--sm u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-b--sm</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--tertiary'}>
                                <span className={'o-block--inline u-b--rg u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-b--rg</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--tertiary'}>
                                <span className={'o-block--inline u-b--md u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-b--md</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--tertiary'}>
                                <span className={'o-block--inline u-b--lg u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-b--lg</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--tertiary'}>
                                <span className={'o-block--inline u-b--xl u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-b--xl</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--tertiary'}>
                                <span className={'o-block--inline u-b--xxl u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-b--xxl</p>
                        </div>
                    </div>
                </div>

                <p className={'u-h4 u-mt--xxl'}>Border on specific sides</p>


                <div className={'o-table u-mt--lg u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Example</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Modifier classes</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--tertiary u-mr--md'}>
                                <span className={'o-block--inline u-bt--xxs u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--tertiary u-mr--md'}>
                                <span className={'o-block--inline u-bt--xs u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--tertiary u-mr--md'}>
                                <span className={'o-block--inline u-bt--sm u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--tertiary u-mr--md'}>
                                <span className={'o-block--inline u-bt--rg u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--tertiary u-mr--md'}>
                                <span className={'o-block--inline u-bt--md u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--tertiary u-mr--md'}>
                                <span className={'o-block--inline u-bt--lg u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--tertiary u-mr--md'}>
                                <span className={'o-block--inline u-bt--xl u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--tertiary u-mr--md'}>
                                <span className={'o-block--inline u-bt--xxl u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bt--xxs</p><p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bt</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bt--xs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bt--sm</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bt--rg</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bt--md</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bt--lg</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bt--xl</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bt--xxl</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--tertiary u-mb--md'}>
                                <span className={'o-block--inline u-br--xxs u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--tertiary u-mb--md'}>
                                <span className={'o-block--inline u-br--xs u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--tertiary u-mb--md'}>
                                <span className={'o-block--inline u-br--sm u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--tertiary u-mb--md'}>
                                <span className={'o-block--inline u-br--rg u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--tertiary u-mb--md'}>
                                <span className={'o-block--inline u-br--md u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--tertiary u-mb--md'}>
                                <span className={'o-block--inline u-br--lg u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--tertiary u-mb--md'}>
                                <span className={'o-block--inline u-br--xl u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--tertiary u-mb--md'}>
                                <span className={'o-block--inline u-br--xxl u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-br--xxs</p><p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-br</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-br--xs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-br--sm</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-br--rg</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-br--md</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-br--lg</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-br--xl</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-br--xxl</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--tertiary u-mr--md'}>
                                <span className={'o-block--inline u-bb--xxs u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--tertiary u-mr--md'}>
                                <span className={'o-block--inline u-bb--xs u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--tertiary u-mr--md'}>
                                <span className={'o-block--inline u-bb--sm u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--tertiary u-mr--md'}>
                                <span className={'o-block--inline u-bb--rg u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--tertiary u-mr--md'}>
                                <span className={'o-block--inline u-bb--md u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--tertiary u-mr--md'}>
                                <span className={'o-block--inline u-bb--lg u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--tertiary u-mr--md'}>
                                <span className={'o-block--inline u-bb--xl u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span className={'o-block--inline u-bg--tertiary u-mr--md'}>
                                <span className={'o-block--inline u-bb--xxl u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bb--xxs</p><p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bb</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bb--xs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bb--sm</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bb--rg</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bb--md</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bb--lg</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bb--xl</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bb--xxl</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <span className={'o-block--inline u-bg--tertiary u-mb--md'}>
                                <span className={'o-block--inline u-bl--xxs u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--tertiary u-mb--md'}>
                                <span className={'o-block--inline u-bl--xs u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--tertiary u-mb--md'}>
                                <span className={'o-block--inline u-bl--sm u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--tertiary u-mb--md'}>
                                <span className={'o-block--inline u-bl--rg u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--tertiary u-mb--md'}>
                                <span className={'o-block--inline u-bl--md u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--tertiary u-mb--md'}>
                                <span className={'o-block--inline u-bl--lg u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--tertiary u-mb--md'}>
                                <span className={'o-block--inline u-bl--xl u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                            <span className={'o-block--inline u-bg--tertiary u-mb--md'}>
                                <span className={'o-block--inline u-bl--xxl u-b--primary'}>&nbsp;&nbsp;&nbsp;</span>
                            </span><br/>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bl--xxs</p><p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bl</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bl--xs</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bl--sm</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bl--rg</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bl--md</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bl--lg</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bl--xl</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>u-bl--xxl</p>
                        </div>
                    </div>
                    
                </div>

            </div>
        )
    }
}