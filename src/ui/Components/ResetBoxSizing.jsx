import React from "react";


export default class ResetBoxSizing extends React.Component {
    render(){
        return (
            <div id={'reset_box_sizing'} className={'id-component__wrapper o-block u-pt--xxl u-mb--xxl'}>
                <p className={'u-h2 u-mb--xl o-flex o-flex--align-center u-bg--foreground u-color--background u-p--md u-radius'}>
                    <span>Box Sizing</span>
                    <span className={'o-flex--1'}></span>
                    <span className={'u-font--mono u-font--md'}>_reset.box-sizing.less</span>
                </p>

                <p className={'u-mb--lg'}>The box-sizing reset applies a particular property to all elements within the <span className={'c-code c-code--inline'}>&lt;html&gt;</span> element, it applies the border box property to all elements which sets a more predictable behaviour. This is popular because the relationship of width and padding is awkward (<a href={'https://www.paulirish.com/2012/box-sizing-border-box-ftw/'}>read this post</a>)</p>

            </div>
        )
    }
}