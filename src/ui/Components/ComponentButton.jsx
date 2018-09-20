import React from "react";


export default class ComponentButton extends React.Component {
    render(){
        return (
            <div id={'component_button'} className={'id-component__wrapper o-block u-pt--xxl u-mb--xxl'}>
                <p className={'u-h2 u-mb--xl o-flex o-flex--align-center u-bg--foreground u-color--background u-p--md u-radius'}>
                    <span>Button</span>
                    <span className={'o-flex--1'}></span>
                    <span className={'u-font--mono u-font--md'}>_component.button.less</span>
                </p>
                
                <p className={'u-mb--lg'}>The button component is a commonly used design pattern and much of the world wide web would be useless without it. This component class provides a great base to work from if you're after some customisation, if not it's great to use as-is.</p>

                <p className={'u-h3 u-mt--xxl'}>Usage</p>
                <p className={'u-mb--lg'}>Please note that the <span className={'c-code c-code--inline'}>c-btn</span> class is always required. Modifiers should be appended to customise the base button class.</p>

                <pre className={'c-code u-mb--lg'}>
                    &lt;button class="<span className={'u-color--error'}>c-btn</span>"&gt;...&lt;button&gt; &nbsp;&nbsp;<span className={'u-font--italic'}>// preferred element</span><br/>
                    &lt;span class="<span className={'u-color--error'}>c-btn</span>"&gt;...&lt;span&gt;<br/>
                    &lt;span class="<span className={'u-color--error'}>c-btn c-btn--error c-btn--disabled</span>"&gt;...&lt;span&gt;<br/>
                </pre>

                <p className={'u-h3 u-mt--xxl'}>Base button variations</p>

                <div className={'o-table o-table--rg u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Class</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Description</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Component</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>The default button utilizes the "standard" button styles.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn'}>Button</button>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--standard</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>The standard button class as a modifier.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--standard'}>Button</button>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--contrast</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>The contrast button class as a modifier.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--contrast'}>Button</button>
                        </div>
                    </div>

                    <div className={'o-table__row u-bt--sm'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--primary</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>The primary button state.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--primary'}>Button</button>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--secondary</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>The secondary button state.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--secondary'}>Button</button>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--tertiary</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>The tertiary button state.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--tertiary'}>Button</button>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--quarternary</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>The quarternary button state.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--quarternary'}>Button</button>
                        </div>
                    </div>

                    <div className={'o-table__row u-bt--sm'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--submit</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>The submit button state.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--submit'}>Button</button>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--success</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>The success button state.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--success'}>Button</button>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--error</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>The error button state.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--error'}>Button</button>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--warning</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>The warning button state.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--warning'}>Button</button>
                        </div>
                    </div>

                    <div className={'o-table__row u-bt--sm'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--positive</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>The positive button state.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--positive'}>Button</button>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--negative</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>The negative button state.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--negative'}>Button</button>
                        </div>
                    </div>
                </div>


                <p className={'u-h3 u-mt--xxl'}>Size modifiers</p>

                <div className={'o-table o-table--rg u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Component</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Description</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Modifer</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--xxs</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>Sets the size of the button to the xxs modifier class.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--xxs'}>Button</button>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--xs</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>Sets the size of the button to the xs modifier class.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--xs'}>Button</button>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--sm</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>Sets the size of the button to the sm modifier class.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--sm'}>Button</button>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--rg</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>Sets the size of the button to the rg modifier class.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--rg'}>Button</button>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--md</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>Sets the size of the button to the md modifier class.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--md'}>Button</button>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--lg</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>Sets the size of the button to the lg modifier class.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--lg'}>Button</button>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--xl</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>Sets the size of the button to the xl modifier class.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--xl'}>Button</button>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--xxl</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>Sets the size of the button to the xxl modifier class.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--xxl'}>Button</button>
                        </div>
                    </div>
                </div>

                <p className={'u-h3 u-mt--xxl'}>Combining with Font modifiers</p>

                <div className={'o-table o-table--rg u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Component</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Modifers</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--xxs and u-font--md</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--xxs u-font--md'}>Button</button>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--xs and u-text--uppercase</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--xs u-text--uppercase'}>Button</button>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--rg and u-font--bold</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--rg u-font--bold'}>Button</button>
                        </div>
                    </div>
                </div>

                <p className={'u-h3 u-mt--xxl'}>Stateful modifiers</p>
                <p className={'u-mb--lg'}>Extremely useful when altering the interaction state of a button.</p>

                <div className={'o-table o-table--rg u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Component</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Description</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Class</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>is-disabled</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>Visually disable a button.</p>
                            <p className={'u-mb--lg'}>Additional properties can be added to prevent click, this can be achieved with the pointer-events property but a javascript solution may be better suited.</p>
                            <p className={'u-mb--lg u-font--italic'}>Attention: <span className={'c-code c-code--inline'}>c-btn</span> class required.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <button className={'c-btn c-btn--rg is-disabled'}>Button</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}