import React from "react";

export default class ElementHeading extends React.Component {
    render(){
        return (
            <div id={'element_heading'} className={'id-component__wrapper o-block u-pt--xxl u-mb--xxl'}>
                <p className={'u-h2 u-mb--xl o-flex o-flex--align-center u-bg--foreground u-color--background u-p--md u-radius'}>
                    <span>Heading</span>
                    <span className={'o-flex--1'}></span>
                    <span className={'u-font--mono u-font--md'}>_element.heading.less</span>
                </p>
                <p className={'u-mb--lg'}>Heading elements are used to semantically define typographic hierarchy within a web document. This CSS library usesand extends this hierarchy with CSS custom properties.</p>

                <p className={'u-font--bold u-mt--xl u-mb--md'}>Usage</p>
                <p className={'u-mb--lg'}>The h1 though h6 CSS selectors automatically assign the specified properties and values to the elment, there is no need to explicitly define these classes but they exist to be useful in other situations.</p>
                <p className={'u-mb--lg u-font--italic'}>Search Engine Oprtimisation practices advise the correct and semantic structure of a web document therefore assigning classes instead of using HTML elements can sometimes help.</p>

                <pre className={'c-code u-mb--lg'}>
                    &lt;h1&gt;...&lt;/h1&gt;<br/>
                    &lt;h2&gt;...&lt;/h2&gt;<br/>
                    &lt;h3&gt;...&lt;/h3&gt;<br/>
                    &lt;h4&gt;...&lt;/h4&gt;<br/>
                    &lt;h5&gt;...&lt;/h5&gt;<br/>
                    &lt;h6&gt;...&lt;/h6&gt;<br/>
                    <br/>
                    &lt;p class="<span className={'u-color--error'}>e-h1</span>&gt;...&lt;/p&gt;<br/>
                    &lt;p class="<span className={'u-color--error'}>e-h2</span>&gt;...&lt;/p&gt;<br/>
                    &lt;p class="<span className={'u-color--error'}>e-h3</span>&gt;...&lt;/p&gt;<br/>
                    &lt;p class="<span className={'u-color--error'}>e-h4</span>&gt;...&lt;/p&gt;<br/>
                    &lt;p class="<span className={'u-color--error'}>e-h5</span>&gt;...&lt;/p&gt;<br/>
                    &lt;p class="<span className={'u-color--error'}>e-h6</span>&gt;...&lt;/p&gt;<br/>
                </pre>

                <p className={'u-font--bold u-mt--xl u-mb--lg'}>Heading class definitions</p>

                <div className={'o-table u-mt--rg u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Element class</p>
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
                            <p className={'c-code c-code--inline u-mb--sm'}>e-h1</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>Assigns heading level 1 properties to an element.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'e-h1'}>Heading 1</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>e-h2</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>Assigns heading level 2 properties to an element.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'e-h2'}>Heading 2</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>e-h3</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>Assigns heading level 3 properties to an element.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'e-h3'}>Heading 3</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>e-h4</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>Assigns heading level 4 properties to an element.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'e-h4'}>Heading 4</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>e-h5</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>Assigns heading level 5 properties to an element.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'e-h5'}>Heading 5</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>e-h6</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'u-mb--md'}>Assigns heading level 6 properties to an element.</p>
                        </div>
                        <div className={'o-table__cell u-p--sm'}>
                            <p className={'e-h6'}>Heading 6</p>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}