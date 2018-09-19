import React from "react";


export default class ComponentHeader extends React.Component {
    render(){
        return (
            <div id={'component_header'} className={'id-component__wrapper o-block u-pt--xxl u-mb--xxl'}>
                <p className={'u-h2 u-mb--lg o-flex'}>
                    Header
                    <span className={'o-flex--1'}></span>
                    <span className={'c-code c-code--inline u-bg--midground u-color--background'}>Component</span>
                </p>
                
                <p className={'u-mb--lg'}>Use the header component for section and application headers. It is advisable to use the <span className={'c-code c-code--inline'}>&lt;header&gt;</span> element for .</p>

                <p className={'u-h4 u-mt--xxl'}>Usage</p>
                <p className={'u-mb--lg'}>Please note that the <span className={'c-code c-code--inline'}>c-header</span> class is always required. Modifiers should be appended to customise or redefine the base header component.</p>

                <pre className={'c-code u-mb--lg'}>
                    &lt;header class="<span className={'u-color--error'}>c-header c-header--app</span>"&gt;<br/>
                    &nbsp;&nbsp;...<br/>
                    &lt;header&gt;<br/>
                    <br/>
                    &lt;div class="<span className={'u-color--error'}>c-header</span>"&gt;<br/>
                    &nbsp;&nbsp;...<br/>
                    &lt;div&gt;<br/>
                </pre>

            </div>
        )
    }
}