import React from "react";


export default class ComponentSwitch extends React.Component {
    render(){
        return (
            <div id={'component_switch'} className={'id-component__wrapper o-block u-pt--xxl u-mb--xxl'}>
                <p className={'u-h2 u-mb--xl o-flex o-flex--center u-bg--foreground u-color--background u-p--md u-radius'}>
                    <span>Switch</span>
                    <span className={'o-flex--1'}></span>
                    <span className={'u-font--mono u-font--md'}>_component.switch.less</span>
                </p>
                <p className={'u-mb--lg'}>The switch is a popular UI element which represents a physical light-switch or mechanical toggle on an instrument.</p>
                <p className={'u-mb--lg'}>.</p>

                <p className={'u-h4 u-mt--xxl'}>Usage</p>
                <p className={'u-mb--lg'}>To add a switch component to the UI a specific format is required, see the example below.</p>
                <p className={'u-mb--lg'}>The switch uses the functionality of native checkbox input to control the state.</p>

                <pre className={'c-code u-mb--md'}>
                    &lt;label class="<span className={'u-color--error'}>c-switch</span>"&gt;<br/>
                    &nbsp;&nbsp;&lt;input class="<span className={'u-color--error'}>c-switch__input</span>" type="<span className={'u-color--error'}>checkbox</span>"/&gt;<br/>
                    &nbsp;&nbsp;&lt;span class="<span className={'u-color--error'}>c-switch__track</span>"&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="<span className={'u-color--error'}>c-switch__grip</span>"&gt;&lt;/span&gt;<br/>
                    &nbsp;&nbsp;&lt;/span&gt;<br/>
                    &nbsp;&nbsp;<span className={'u-font--italic'}>// optional but desirable</span><br/>
                    &nbsp;&nbsp;&lt;span class="<span className={'u-color--error'}>c-switch__label</span>"&gt;Switch label&lt;/span&gt;<br/>
                    &lt;/label&gt;<br/>
                </pre>

                <p className={'u-font--italic u-mb--lg'}>Info - Wrapping the elements in a label element allows the text to trigger the click event on the input.</p>

                <p className={'u-h3 u-mt--xxl'}>Switch examples</p>

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
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-switch</p>

                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--lg'}>Define a switch element.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <label className={'c-switch'}>
                                <input className={'c-switch__input'} type={'checkbox'}/>
                                <span className={'c-switch__track'}>
                                    <span className={'c-switch__grip'}></span>
                                </span>
                            </label>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-switch</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--lg'}>Add a label to the switch.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <label className={'c-switch'}>
                                <input className={'c-switch__input'} type={'checkbox'}/>
                                <span className={'c-switch__track'}>
                                    <span className={'c-switch__grip'}></span>
                                </span>
                                <span className={'c-switch__label'}>Heatmap</span>
                            </label>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}