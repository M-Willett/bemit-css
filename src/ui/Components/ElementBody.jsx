import React from "react";

export default class ElementBody extends React.Component {
    render(){
        return (
            <div id={'element_body'} className={'id-component__wrapper o-block u-pt--xxl u-mb--xxl'}>
                <p className={'u-h2 u-mb--xl o-flex o-flex--align-center u-bg--foreground u-color--background u-p--md u-radius'}>
                    <span>Body</span>
                    <span className={'o-flex--1'}></span>
                    <span className={'u-font--mono u-font--md'}>_element.body.less</span>
                </p>
                <p className={'u-mb--lg'}>The HTML &lt;body&gt; element represents the content of an HTML document. There can only be one element per document and all content is placed inside this element.</p>

                <p className={'u-font--bold u-mt--xl u-mb--md'}>Usage</p>
                <p className={'u-mb--lg'}>The CSS body selector automatically assigns the specified properties and values to the element, there is no need to explicitly define the e-body class but it exists to be useful in other situations.</p>

                <pre className={'c-code u-mb'}>
                    &lt;body&gt;<br/>
                    &nbsp;&nbsp;...<br/>
                    &lt;/body&gt;<br/>
                    <br/>
                    &lt;iframe class="<span className={'u-color--error'}>e-body</span>"&gt;<br/>
                    &nbsp;&nbsp;...<br/>
                    &lt;/iframe&gt;
                </pre>
            </div>
        )
    }
}