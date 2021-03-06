import React from "react";

export default class ElementTypography extends React.Component {
    render(){
        return (
            <div id={'element_typography'} className={'id-component__wrapper o-block u-mt--xxl u-mb--xxl'}>
                <p className={'u-h2 u-mb--xl o-flex o-flex--align-center u-bg--foreground u-color--background u-p--md u-radius'}>
                    <span>Typography</span>
                    <span className={'o-flex--1'}></span>
                    <span className={'u-font--mono u-font--md'}>_element.typography.less</span>
                </p>

                <p className={'u-h2 u-mb--lg'}>Paragraphing</p>
                <p className={'u-mb--lg'}>The <span className={'c-code c-code--inline'}>&lt;p&gt;</span> element represents a paragraph.</p>
                <p className={'u-h4 u-mt--xl u-mb--md'}>Usage</p>
                <p className={'u-mb--lg'}>The paragraph element is arguable the most common on the web. Classes can be added to control the and apply style changes to the paragraph. See examples below.</p>
                <pre className={'c-code u-mb--lg'}>
                    &lt;p&gt;...&lt;/p&gt;<br/>
                    &lt;p class="<span className={'u-color--error'}>u-font--lg</span>&gt;...&lt;/p&gt;<br/>
                    &lt;p class="<span className={'u-color--error'}>u-p--rg u-bg--midground</span>"&gt;...&lt;/p&gt;<br/>
                </pre>

                <p className={'u-h2 u-mt--xxl u-mb--lg'}>Text variations</p>
                <p className={'u-mb--lg'}>Text can be easily styled through the addition of HTML elements or classes. You can wrap a word or sentence with an element or you can add chainable classes to the element (preferred method).</p>
                <p className={'u-h4 u-mt--xl u-mb--md'}>Usage</p>
                <p className={'u-mb--lg'}>See the examples below on how to alter the typography style using only HTML elements.</p>
                <p className={'u-mb--lg u-font--italic'}>Information - Please see the <a href={'#utility_typography'}>typography utilities</a> for the preferred method of applying or modifying typographic styles.</p>
                <pre className={'c-code u-mb--lg'}>
                    <p className={'u-font--roman u-color--foreground'}>// Make text bold with the &lt;b&gt; tag</p>
                    &lt;p&gt;Wrap text with a "b" tag to is <span className={'u-color--error'}>&lt;b&gt;</span>apply bold properties<span className={'u-color--error'}>&lt;/b&gt;</span> to text in a sentence.&lt;/p&gt;<br/><br/>

                    <p className={'u-font--roman u-color--foreground'}>// Or with the &lt;strong&gt; tag</p>
                    &lt;p&gt;Wrap text with a "strong" tag to is <span className={'u-color--error'}>&lt;strong&gt;</span>apply bold properties<span className={'u-color--error'}>&lt;/strong&gt;</span> to text in a sentence.&lt;/p&gt;<br/><br></br>

                    <p className={'u-font--roman u-color--foreground'}>// Make text italic with the &lt;i&gt; tag</p>
                    &lt;p&gt;Wrap text with an "i" tag to is <span className={'u-color--error'}>&lt;i&gt;</span>apply italic properties<span className={'u-color--error'}>&lt;/i&gt;</span> to text in a sentence.&lt;/p&gt;<br/><br/>

                    <p className={'u-font--roman u-color--foreground'}>// Or with the &lt;em&gt; tag</p>
                    &lt;p&gt;Wrap text with an "em" tag to is <span className={'u-color--error'}>&lt;em&gt;</span>apply italic properties<span className={'u-color--error'}>&lt;/em&gt;</span> to text in a sentence.&lt;/p&gt;<br/>

                </pre>

                <p className={'u-h2 u-mt--xxl u-mb--lg'}>Headings</p>
                <p className={'u-mb--lg'}>Heading elements are used to semantically define typographic hierarchy within a web document. This CSS library uses and extends this hierarchy with CSS custom properties.</p>

                <p className={'u-h4 u-mt--xl u-mb--md'}>Usage</p>
                <p className={'u-mb--lg'}>The h1 though h6 CSS selectors automatically assign the specified properties and values to the element, there is no need to explicitly define these classes but they exist to be useful in other situations.</p>
                <p className={'u-mb--lg u-font--italic'}>Search Engine Optimisation practices advise the correct and semantic structure of a web document therefore assigning classes instead of using HTML elements can sometimes help.</p>

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

                <p className={'u-h4 u-mt--xl u-mb--lg'}>Heading class definitions</p>

                <div className={'o-table o-table--rg u-mt--rg u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Element class</p>
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
                            <p className={'c-code c-code--inline u-mb--sm'}>e-h1</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Assigns heading level 1 properties to an element.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'e-h1'}>Heading 1</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>e-h2</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Assigns heading level 2 properties to an element.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'e-h2'}>Heading 2</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>e-h3</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Assigns heading level 3 properties to an element.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'e-h3'}>Heading 3</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>e-h4</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Assigns heading level 4 properties to an element.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'e-h4'}>Heading 4</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>e-h5</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Assigns heading level 5 properties to an element.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'e-h5'}>Heading 5</p>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>e-h6</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Assigns heading level 6 properties to an element.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'e-h6'}>Heading 6</p>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}