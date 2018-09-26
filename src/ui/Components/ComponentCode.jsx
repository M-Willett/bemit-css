import React from "react";


export default class ComponentCode extends React.Component {
    render(){
        return (
            <div id={'component_code'} className={'id-component__wrapper o-block u-pt--xxl u-mb--xxl'}>
                <p className={'u-h2 u-mb--xl o-flex o-flex--align-center u-bg--foreground u-color--background u-p--md u-radius'}>
                    <span>Code snippets</span>
                    <span className={'o-flex--1'}></span>
                    <span className={'u-font--mono u-font--md'}>_component.switch.less</span>
                </p>
                <p className={'u-mb--lg'}>A code snippet or block can be represented with the <span className={'c-code c-code--inline'}>c-code</span> class.</p>

                <p className={'u-h3 u-mt--xxl'}>Usage</p>
                <p className={'u-mb--lg'}>Examples are shown below of how snippets can be added as blocks of code or parts of a sentence.</p>

                <pre className={'c-code u-mb--md u-scrollable'}>
                    &lt;div class="<span className={'u-color--error'}>c-code</span>"&gt;<br/>
                    &nbsp;&nbsp;...<br/>
                    &lt;/div&gt;
                    <br/><br/>
                    &lt;pre class="<span className={'u-color--error'}>c-code</span>"&gt;<br/>
                    &nbsp;&nbsp;...<br/>
                    &lt;/pre&gt;
                    <br/><br/>
                    &lt;p&gt;Some &lt;span class="<span className={'u-color--error'}>c-code c-code--inline</span>"&gt;code&lt;/span&gt; inside a paragraph&lt;/p&gt;
                </pre>

                <p className={'u-h3 u-mt--xxl'}>Code components</p>

                <div className={'o-table o-table--rg u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Class</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Description</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Example</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-code</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>Represent a block of code.</p>
                            <p className={'u-mb--lg u-font--italic'}>HTML entities must be used to represent elements.</p>
                        </div>
                        <div className={'o-table__cell u-align--top'}>
                            <pre className={'c-code'}>
                                A block of code
                            </pre>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm u-mr--sm'}>c-code--inline</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--lg'}>Represent code inline.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p>A sentence with <span className={'c-code c-code--inline'}>code</span> in the middle somewhere.</p>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}