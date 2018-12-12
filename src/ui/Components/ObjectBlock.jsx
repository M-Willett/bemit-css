import React from "react";


export default class ObjectBlock extends React.Component {
    render(){
        return (
            <div id={'object_block'} className={'id-component__wrapper o-block u-mt--xxl u-mb--xxl'}>
                <p className={'u-h2 u-mb--xl o-flex o-flex--align-center u-bg--foreground u-color--background u-p--md u-radius'}>
                    <span>Block</span>
                    <span className={'o-flex--1'}></span>
                    <span className={'u-font--mono u-font--md'}>_object.block.less</span>
                </p>

                <p className={'u-mb--lg'}>The <span className={'c-code c-code--inline'}>display: block;</span> property defines a simple block-level element. For more information read the <a href={'https://developer.mozilla.org/en-US/docs/Web/CSS/display'}>MDN Display property documentation</a>.</p>
                <p className={'u-mb--lg'}>This is seldom used as we rely on user agent styling to define block-level elements for us - for example we use the <span className={'c-code c-code--inline'}>div</span> element to create a web block.</p>

                <p className={'u-font--bold u-mt--xl u-mb--md'}>Usage</p>
                <p className={'u-mb--lg'}>Simply add the block object class to an element.</p>

                <pre className={'c-code u-mb--lg'}>
                    &lt;div class="<span className={'u-color--error'}>o-block</span>"&gt;...&lt;/div&gt;<br/>
                    &lt;p class="<span className={'u-color--error'}>o-block</span>"&gt;...&lt;/p&gt;
                </pre>

                <div className={'o-table o-table--rg u-mt--rg u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Object class</p>
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
                            <p className={'c-code c-code--inline u-mb--sm'}>o-block</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Defines an element as a block-level element.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-block u-resize u-bg--midground u-p--sm u-mb--md'}>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}