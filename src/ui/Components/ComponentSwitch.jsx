import React from "react";


export default class ComponentSwitch extends React.Component {
    render(){
        return (
            <div className={'id-component__wrapper o-block u-mb--xxl'} id={'component_switch'}>
                <p className={'u-h2 u-mb--xl o-flex o-flex--center u-bg--foreground u-color--background u-p--md u-radius'}>
                    <span>Switch</span>
                    <span className={'o-flex--1'}></span>
                    <span className={'u-font--mono u-font--md'}>_component.button.less</span>
                </p>
                
                <p className={'u-mb--lg'}>The button component is a commonly used design pattern and much of the world wide web would be useless without it. This component class provides a great base to work from if you're after some customisation, if not it's great to use as-is.</p>

                <p className={'u-h4 u-mt--xxl'}>Usage</p>
                <p className={'u-mb--lg'}>Please note that the <span className={'c-code c-code--inline'}>c-btn</span> class is always required. Modifiers should be appended to customise the base button class.</p>

                <div className={'c-code u-mb--lg'}>
                &lt;button class="c-btn"&gt;Submit&lt;button&gt; // preferred element<br/>
                &lt;span class="c-btn"&gt;Submit&lt;span&gt;<br/>
                &lt;span class="c-btn c-btn--error c-btn--disabled"&gt;Error&lt;span&gt;<br/>
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
                            <p className={'u-mb--lg'}>The default button utilizes the "standard" button styles.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--standard'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--lg'}>The standard button class as a modifier.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--standard</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--contrast'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--lg'}>The contrast button class as a modifier.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--contrast</p>
                        </div>
                    </div>

                    <div className={'o-table__row u-bt--sm'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--primary'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--lg'}>The primary button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--primary</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--secondary'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--lg'}>The secondary button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--secondary</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--tertiary'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--lg'}>The tertiary button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--tertiary</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--quarternary'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--lg'}>The quarternary button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--quarternary</p>
                        </div>
                    </div>

                    <div className={'o-table__row u-bt--sm'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--submit'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--lg'}>The submit button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--submit</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--success'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--lg'}>The success button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--success</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--error'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--lg'}>The error button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--error</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--warning'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--lg'}>The warning button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--warning</p>
                        </div>
                    </div>

                    <div className={'o-table__row u-bt--sm'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--positive'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--lg'}>The positive button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--positive</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <button className={'c-btn c-btn--negative'}>Button</button>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--lg'}>The negative button state.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-btn--negative</p>
                        </div>
                    </div>
                </div>


                <p className={'u-h3 u-mt--xxl'}>Size modifiers</p>

            </div>
        )
    }
}