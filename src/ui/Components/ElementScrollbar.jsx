import React from "react";

export default class ElementScrollbar extends React.Component {
    render(){
        return (
            <div id={'element_scrollbar'} className={'id-component__wrapper o-block u-mt--xxl u-mb--xxl'}>
                <p className={'u-h2 u-mb--xl o-flex o-flex--align-center u-bg--foreground u-color--background u-p--md u-radius'}>
                    <span>Scrollbar</span>
                    <span className={'o-flex--1'}></span>
                    <span className={'u-font--mono u-font--md'}>_element.scrollbar.less</span>
                </p>
                <p className={'u-mb--lg'}>The scrollbar element is a native, intuitive web component used across all browsers and mediums. The element in this library makes use of the native scrollbar and applies some very basic styling alterations to it</p>

                <p className={'u-font--bold u-mt--xl u-mb--md'}>Usage</p>
                <p className={'u-mb--lg'}>The scrollbar alterations in this file are applied to all scrollbar elements automatically. However not all elements will exhibit a scrollbar so you can use the classes in <a href={'#utility_scroll'}>The Scroll Utility</a> to apply CSS properties to show a scrollbar.</p>

                <pre className={'c-code u-mb u-scrollable u-width--half u-radius'} style={{height: '100px'}}>
                    <br/>
                    Scroll me
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                    The end<br/>
                </pre>
            </div>
        )
    }
}