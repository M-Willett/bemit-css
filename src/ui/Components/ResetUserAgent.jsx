import React from "react";


export default class ResetUserAgent extends React.Component {
    render(){
        return (
            <div id={'reset_user_agent'} className={'id-component__wrapper o-block u-mt--xxl u-mb--xxl'}>
                <p className={'u-h2 u-mb--xl o-flex o-flex--align-center u-bg--foreground u-color--background u-p--md u-radius'}>
                    <span>User Agent</span>
                    <span className={'o-flex--1'}></span>
                    <span className={'u-font--mono u-font--md'}>_reset.user-agent.less</span>
                </p>

                <p className={'u-mb--lg'}>User-agent resets are used to reset and "normalize" the browser we use to view websites. They are useful for creating a consistent and blank-slate so that cross-browser compatibility is maximised.</p>
                <p className={'u-mb--lg u-font--italic'}>These CSS selectors are very specific and should not be altered unless the editor is aware of the impact and consequences.</p>
                <p className={'u-mb--lg u-font--italic'}>This user-agent stylesheet is taken from the <a href={'//github.com/necolas/normalize.css/blob/master/normalize.css'}>Normalize project</a>.</p>

            </div>
        )
    }
}