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
                    <p className={'u-font--italic u-color--midground'}>&nbsp;&nbsp;// Header row</p>
                    &nbsp;&nbsp;&lt;div class='<span className={'u-color--error'}>o-table__row o-table__row--header u-align--center</span>'&gt;<br/>
                    <br/>
                    <p className={'u-font--italic u-color--midground'}>&nbsp;&nbsp;&nbsp;&nbsp;// Header columns</p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class='<span className={'u-color--error'}>o-table__cell o-table__cell--header</span>'&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p class='<span className={'u-color--error'}>u-font--bold</span>'&gt;Header text&lt;/p&gt;<br/>
                    &ensp;&ensp;&ensp;&ensp;&lt;/div&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class='<span className={'u-color--error'}>o-table__cell o-table__cell--header</span>'&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p class='<span className={'u-color--error'}>u-font--bold</span>'&gt;Header text&lt;/p&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                    &nbsp;&nbsp;&lt;/div&gt;<br/>
                    <br/>
                    <p className={'u-font--italic u-color--midground'}>&nbsp;&nbsp;// Body rows</p>
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
                    &lt;/div&gt;<br/>       
                </pre>

                <p className={'u-h4 u-mt--xxl'}>Table composition</p>
                <p className={'u-mb--lg'}>Tables should match a basic, nested structure. Table > Row > Cell. Adding modifiers allows you to control the appearance and properties of the tables, rows, columns and cells. For instance - making a header row, increasing the padding and font size of the contents and </p>
                <p className={'u-mb--lg u-font--italic'}>Attention - Some examples shown below have added colours to help highlight their nature.</p>

                <div className={'o-table o-table--rg u-mb--lg'}>
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
                            <p className={'c-code c-code--inline'}>o-table</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Define a table.</p>
                            <p className={'u-mb--md u-font--italic'}>This is required for the containing element.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-table u-bg--background-accent'}>&nbsp;</div>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>o-table__row</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Define a table row.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-table u-bg--background-accent'}>
                                <div className={'o-table__row'}>&nbsp;</div>
                            </div>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline'}>o-table__cell</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Define a table cell.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-table'}>
                                <div className={'o-table__row'}>
                                    <div className={'o-table__cell'}>&nbsp;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <p className={'u-h4 u-mt--xxl'}>Complete table examples</p>

                <div className={'o-table o-table--rg u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                            <p className={'u-font--bold'}>Description</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-align--center u-p--sm'}>
                        <p className={'u-font--bold'}>Example</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Multiple columns.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-table'}>
                                <div className={'o-table__row'}>
                                    <div className={'o-table__cell'}>Column 1</div>
                                    <div className={'o-table__cell'}>Column 2</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Add a header.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-table'}>
                                <div className={'o-table__row o-table__row--header'}>
                                    <div className={'o-table__cell'}>Header 1</div>
                                    <div className={'o-table__cell'}>Header 2</div>
                                </div>
                                <div className={'o-table__row'}>
                                    <div className={'o-table__cell'}>Column 1</div>
                                    <div className={'o-table__cell'}>Column 2</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Add a footer.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-table'}>
                                <div className={'o-table__row o-table__row--header'}>
                                    <div className={'o-table__cell'}>Header 1</div>
                                    <div className={'o-table__cell'}>Header 2</div>
                                </div>
                                <div className={'o-table__row'}>
                                    <div className={'o-table__cell'}>Column 1</div>
                                    <div className={'o-table__cell'}>Column 2</div>
                                </div>
                                <div className={'o-table__row'}>
                                    <div className={'o-table__cell'}>Column 1</div>
                                    <div className={'o-table__cell'}>Column 2</div>
                                </div>
                                <div className={'o-table__row o-table__row--header'}>
                                    <div className={'o-table__cell'}>Footer 1</div>
                                    <div className={'o-table__cell'}>Footer 2</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Use utility classes to customise the appearance.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-table o-table--sm'}>
                                <div className={'o-table__row o-table__row--header u-font--bold u-align--center'}>
                                    <div className={'o-table__cell'}>Header 1</div>
                                    <div className={'o-table__cell'}>Header 2</div>
                                    <div className={'o-table__cell'}>Header 3</div>
                                </div>
                                <div className={'o-table__row'}>
                                    <div className={'o-table__cell'}>Column 1</div>
                                    <div className={'o-table__cell'}>Column 2</div>
                                    <div className={'o-table__cell'}>Column 3</div>
                                </div>
                                <div className={'o-table__row'}>
                                    <div className={'o-table__cell'}>Column 1</div>
                                    <div className={'o-table__cell'}>Column 2</div>
                                    <div className={'o-table__cell'}>Column 3</div>
                                </div>
                                <div className={'o-table__row o-table__row--header u-align--right'}>
                                    <div className={'o-table__cell'}>Footer 1</div>
                                    <div className={'o-table__cell'}>Footer 2</div>
                                    <div className={'o-table__cell'}>Footer 3</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}