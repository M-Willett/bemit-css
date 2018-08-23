import React from "react";


export default class ComponentButton extends React.Component {
    render(){
        return (
            <div className={'id-component__wrapper o-block u-mb--xxl'} id={'component_button'}>
                <p className={'u-h2'}>Buttons</p>
                <p className={''}></p>
                <p className={'u-h4'}>Available settings</p>
                <p className={'u-mb--md'}>These settings are defined in a single place and allow easy customisation of some global variables.</p>
                <p className={'u-mb--md'}>Beware, these settings are applied for all themes.</p>

                <div className={'c-code u-mb--lg'}>
                .c-component &#123;<br/>
                &nbsp;&nbsp;height: var(--height-component);<br/>
                &#125;
                </div>

                <div className={'o-table u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Component</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Description</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Class</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>The default button utilizes the "standard" button styles.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--standard'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>The standard button class as a modifier.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--standard</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--contrast'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>The contrast button class as a modifier.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--contrast</p>
                        </div>
                    </div>

                    <div className={'o-table__row u-bt--sm'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--primary'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>The primary button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--primary</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--secondary'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>The secondary button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--secondary</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--tertiary'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>The tertiary button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--tertiary</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--quarternary'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>The quarternary button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--quarternary</p>
                        </div>
                    </div>

                    <div className={'o-table__row u-bt--sm'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--submit'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>The submit button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--submit</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--success'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>The success button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--success</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--error'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>The error button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--error</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--warning'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>The warning button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--warning</p>
                        </div>
                    </div>

                    <div className={'o-table__row u-bt--sm'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--positive'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>The positive button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--positive</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--negative'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>The negative button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--negative</p>
                        </div>
                    </div>
                </div>


                <p className={'u-h3 u-mt--xxl'}>Size modifiers</p>

                <div className={'o-table u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Component</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Description</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Modifer</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--xxs'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>Sets the size of the button to the xxs modifier class.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--xxs</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--xs'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>Sets the size of the button to the xs modifier class.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--xs</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--sm'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>Sets the size of the button to the sm modifier class.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--sm</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--rg'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>Sets the size of the button to the rg modifier class.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--rg</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--md'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>Sets the size of the button to the md modifier class.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--md</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--lg'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>Sets the size of the button to the lg modifier class.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--lg</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--xl'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>Sets the size of the button to the xl modifier class.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--xl</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--xxl'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>Sets the size of the button to the xxl modifier class.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--xxl</p>
                        </div>
                    </div>
                </div>

                <p className={'u-h3 u-mt--xxl'}>Combining with Font modifiers</p>

                <div className={'o-table u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Component</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Modifers</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--xxs u-font--md'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--xxs and u-font--md</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--xs u-text--uppercase'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--xs and u-text--uppercase</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--rg u-font--bold'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={''}>.c-btn--rg and u-font--bold</p>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}