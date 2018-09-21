import React from "react";


export default class ObjectTable extends React.Component {
    render(){
        return (
            <div id={'object_table'} className={'id-component__wrapper o-block u-pt--xxl u-mb--xxl'}>
                <p className={'u-h2 u-mb--xl o-flex o-flex--align-center u-bg--foreground u-color--background u-p--md u-radius'}>
                    <span>Table</span>
                    <span className={'o-flex--1'}></span>
                    <span className={'u-font--mono u-font--md'}>_object.table.less</span>
                </p>
                <p className={'u-mb--lg'}>The table object is used to represent a standard HTML table without being restriced and having to fight the quirks of semantic tables.</p>

                <p className={'u-h4 u-mt--xxl'}>Basic Usage</p>
                <p className={'u-mb--lg'}>The table object is very flexible, with simple size modifiers, bolt-on components and it's responsive out-of-the-box.</p>
                <p className={'u-mb--lg'}>Use the base <span className={'c-code c-code--inline'}>o-table</span> class with a size modifer to add padding to the cells, the default modifier <span className={'c-code c-code--inline'}>o-table--rg</span> applies the regular unit value as padding around the cells.</p>
                <p className={'u-mb--lg'}>The example below is a good starting point with a header row and body rows each with 2 columns.</p>

                <pre className={'c-code u-mb--lg'}>
                    &lt;div class='<span className={'u-color--error'}>o-table o-table--rg</span>'&gt;<br/>
                    <br/>
                    <br/><p className={'u-font--italic u-color--midground'}>&nbsp;&nbsp;// Header row</p>
                    &nbsp;&nbsp;&lt;div class='<span className={'u-color--error'}>o-table__row o-table__row--header u-align--center</span>'&gt;<br/>
                    <br/><p className={'u-font--italic u-color--midground'}>&nbsp;&nbsp;&nbsp;&nbsp;// Header columns</p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class='<span className={'u-color--error'}>o-table__cell o-table__cell--header</span>'&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p class='<span className={'u-color--error'}>u-font--bold</span>'&gt;Header text&lt;/p&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class='<span className={'u-color--error'}>o-table__cell o-table__cell--header</span>'&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p class='<span className={'u-color--error'}>u-font--bold</span>'&gt;Header text&lt;/p&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                    &nbsp;&nbsp;&lt;/div&gt;<br/>
                    <br/>
                    <br/><p className={'u-font--italic u-color--midground'}>&nbsp;&nbsp;// Body rows</p>
                    &nbsp;&nbsp;&lt;div class='<span className={'u-color--error'}>o-table__row</span>'&gt;<br/>
                    <br/><p className={'u-font--italic u-color--midground'}>&nbsp;&nbsp;&nbsp;&nbsp;// Body columns</p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class='<span className={'u-color--error'}>o-table__cell</span>'&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Body text&lt;/p&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class='<span className={'u-color--error'}>o-table__cell</span>'&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Body text&lt;/p&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                    &nbsp;&nbsp;&lt;/div&gt;<br/>
                    <br/>
                    &nbsp;&nbsp;&lt;div class='<span className={'u-color--error'}>o-table__row</span>'&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class='<span className={'u-color--error'}>o-table__cell</span>'&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Body text&lt;/p&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class='<span className={'u-color--error'}>o-table__cell</span>'&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Body text&lt;/p&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                    &nbsp;&nbsp;&lt;/div&gt;<br/>
                    <br/>
                    &lt;/div&gt;<br/>       
                </pre>

                <p className={'u-h4 u-mt--xxl'}>Theme composition</p>
                <p className={'u-mb--lg'}>Themes are composed of between 10 and 12 core colours (6 UI colours and 4 accent colours). These colours form the foundation or palatte of the theme and are then applied to other variables to specify component styles.</p>
                <p className={'u-mb--lg'}>For example, the app header component of this library applies a background color using the variable <span className={'c-code c-code--inline'}>var(--background-header-app)</span> whose value is defined as <span className={'c-code c-code--inline'}>var(--text)</span>. This method allows complete customisation of theme colours without affecting other components.</p>

                <p className={'u-h4 u-mt--xxl'}>Theme variable examples</p>

                <div className={'o-table o-table--rg u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Variable name</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Value</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                        <p className={'u-font--bold'}>Example</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}></p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>#FFFFFF</p>
                        </div>
                        <div className={'o-table__cell'}>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}