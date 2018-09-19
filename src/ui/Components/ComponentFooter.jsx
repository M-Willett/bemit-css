import React from "react";


export default class ComponentFooter extends React.Component {
    render(){
        return (
            <div id={'component_footer'} className={'id-component__wrapper o-block u-pt--xxl u-mb--xxl'}>
                <p className={'u-h2 u-mb--xl o-flex o-flex--center u-bg--foreground u-color--background u-p--md u-radius'}>
                    <span>Footer</span>
                    <span className={'o-flex--1'}></span>
                    <span className={'u-font--mono u-font--md'}>_component.footer.less</span>
                </p>
                
                <p className={'u-mb--lg'}>Use the footer component for section and application footers. It is advisable to use the <span className={'c-code c-code--inline'}>&lt;footer&gt;</span> element for .</p>

                <p className={'u-h4 u-mt--xxl'}>Usage</p>
                <p className={'u-mb--lg'}>Please note that the <span className={'c-code c-code--inline'}>c-footer</span> base class is always required. Modifiers should be appended to customise or redefine the base footer component.</p>

                <pre className={'c-code u-mb--lg'}>
                    &lt;footer class="<span className={'u-color--error'}>c-footer c-footer--app</span>"&gt;<br/>
                    &nbsp;&nbsp;...<br/>
                    &lt;footer&gt;<br/>
                    <br/>
                    &lt;div class="<span className={'u-color--error'}>c-footer</span>"&gt;<br/>
                    &nbsp;&nbsp;...<br/>
                    &lt;div&gt;<br/>
                </pre>

            </div>
        )
    }
}