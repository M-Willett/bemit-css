import React from "react";
// TODO convert everything to React templates
// import {
//     ComponentWrapper, 
//     ComponentTitle,
//     ComponentBody
// } from 'ComponentUtilities';


export default class ElementBody extends React.Component {
    render(){
        return (
            <div className={'id-component__wrapper o-block u-mb--xxl'}>
                <p className={'u-h3'}>Body Element</p>
                <p className={'u-h4 u-font--italic u-text--uppercase'}>Code example</p>
                <p className={'u-font--italic u-mb--md'}>It is not advised to use this class anywhere but the <span className={'c-code c-code--inline'}>body</span> element.</p>

                <div className={'c-code u-mb'}>
                &lt;body&gt;<br/>
                &nbsp;&nbsp;...<br/>
                &lt;/body&gt;
                </div>

                <div className={'c-code'}>
                &lt;div class="e-body"&gt;<br/>
                &nbsp;&nbsp;...<br/>
                &lt;/div&gt;
                </div>
            </div>



            // TODO convert everything to React templates

            // <ComponentWrapper key={'element_body'}>
            //     <ComponentTitle 
            //         value={'Body'} 
            //         category={'Element'}/>

            //     <ComponentBody>
            //         <p>Body Component</p>
            //     </ComponentBody>
            // </ComponentWrapper>
        )
    }
}