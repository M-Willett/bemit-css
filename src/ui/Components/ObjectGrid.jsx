import React from "react";


export default class ObjectGrid extends React.Component {
    render(){
        return (
            <div id={'object_grid'} className={'id-component__wrapper o-block u-mt--xxl u-mb--xxl'}>
                <p className={'u-h2 u-mb--xl o-flex o-flex--align-center u-bg--foreground u-color--background u-p--md u-radius'}>
                    <span>Grid</span>
                    <span className={'o-flex--1'}></span>
                    <span className={'u-font--mono u-font--md'}>_object.grid.less</span>
                </p>

                <p className={'u-mb--lg'}>The <span className={'c-code c-code--inline'}>display: grid;</span> property defines an elemnet as a grid container.</p>

                <p className={'u-font--bold u-mt--xl u-mb--md'}>Usage</p>
                <p className={'u-mb--lg'}>To use the grid object you must add the grid object class to a containing element with its direct child elements accepting optional modifier class .</p>

                <pre className={'c-code u-mb--lg'}>
                    &lt;div class="<span className={'u-color--error'}>o-grid</span>"&gt;<br/>
                    &nbsp;&nbsp;...<br/>
                    &lt;/div&gt;<br/>
                </pre>

                <div className={'o-table o-table--rg u-mt--rg u-mb--xxl'}>
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
                            <p className={'c-code c-code--inline u-mb--sm'}>o-grid</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Defines an element as a grid.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-grid u-bg--background-accent u-p--sm u-mb--md'}>
                                <div className={'u-bg--midground o-grid--col--1 o-grid--row--1'}>Col: one<br/>Row: one</div>
                                <div className={'u-bg--midground o-grid--col--2 o-grid--row--2'}>Col: two<br/>Row: two</div>
                                <div className={'u-bg--midground o-grid--col--3 o-grid--row--3'}>Col: three<br/>Row: three</div>
                                <div className={'u-bg--midground o-grid--col--4 o-grid--row--4'}>Col: four<br/>Row: four</div>
                                <div className={'u-bg--midground o-grid--col--5 o-grid--row--5'}>Col: five<br/>Row: five</div>
                                <div className={'u-bg--midground o-grid--col--6 o-grid--row--6'}>Col: six<br/>Row: six</div>
                            </div>
                            <div className={'o-grid-example u-bg--background-accent u-p--sm u-mb--md'}>
                                <div className={'u-bg--midground o-grid--col--2 o-grid--row--2'}>Col: 2<br/>Row: 2</div>
                                <div className={'u-bg--midground o-grid--col--2 o-grid--row--4'}>Col: 2<br/>Row: 4</div>
                                <div className={'u-bg--midground o-grid--col--2 o-grid--row--5'}>Col: 2<br/>Row: 5</div>
                                <div className={'u-bg--midground o-grid--col--2 o-grid--row--6'}>Col: 2<br/>Row: 6</div>
                                <div className={'u-bg--midground o-grid--col--2 o-grid--row--17'}>Col: 2<br/>Row: 17</div>
                                <div className={'u-bg--midground o-grid--col--2 o-grid--row--8'}>Col: 2<br/>Row: 8</div>
                                <div className={'u-bg--midground o-grid--col--2 o-grid--row--9'}>Col: 2<br/>Row: 9</div>
                                <div className={'u-bg--midground o-grid--col--2 o-grid--row--10'}>Col: 2<br/>Row: 10</div>
                                <div className={'u-bg--midground o-grid--col--2 o-grid--row--11'}>Col: 2<br/>Row: 11</div>
                                <div className={'u-bg--midground o-grid--col--2 o-grid--row--12'}>Col: 2<br/>Row: 12</div>
                                <div className={'u-bg--midground o-grid--col--6 o-grid--row--12'}>Col: 6<br/>Row: 12</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Using CSS Grid */}
                <p className={'u-mb--lg'}>A grid built using <span className={'c-code c-code--inline'}>CSS Grid</span> layout engine. Notice that the full width footer with a single column is possible with minimal additional markup or controversial/partially-suported attirbutes.</p>

                <div className={'o-grid-table o-grid-table--rg u-mt--xxl u-mb--xxl'}>
                    <div className={'o-grid__row o-grid__row--header u-font--bold'}>
                        <div className={'o-grid__cell u-align--center'}>Asset</div>
                        <div className={'o-grid__cell u-align--center'}>Spot:Mid</div>
                        <div className={'o-grid__cell u-align--center'}>ATM</div>
                        <div className={'o-grid__cell u-align--center'}>ATMf</div>
                        <div className={'o-grid__cell u-align--center'}>ATMp</div>
                        <div className={'o-grid__cell u-align--center'}>RV</div>
                    </div>
                    <div className={'o-grid__body'}>
                        <div className={'o-grid__cell'}>USD/JPY</div>
                        <div className={'o-grid__cell u-align--right'}>123.456</div>
                        <div className={'o-grid__cell u-align--right'}>123.456</div>
                        <div className={'o-grid__cell u-align--right'}>123.456</div>
                        <div className={'o-grid__cell u-align--right'}>123.456</div>
                        <div className={'o-grid__cell u-align--right'}>123.456</div>
                        <div className={'o-grid__cell'}>CAD/AUD</div>
                        <div className={'o-grid__cell u-align--right'}>456.789</div>
                        <div className={'o-grid__cell u-align--right'}>456.789</div>
                        <div className={'o-grid__cell u-align--right'}>456.789</div>
                        <div className={'o-grid__cell u-align--right'}>456.789</div>
                        <div className={'o-grid__cell u-align--right'}>456.789</div>
                    </div>
                    <div className={'o-grid__row--footer u-align--right u-bt'}>
                        <div className={'o-grid__cell'}>Full width footer, single column</div>
                    </div>
                </div>

                {/* Using <table> */}
                <p className={'u-mb--lg'}>A Grid built using traditional <span className={'c-code c-code--inline'}>&lt;table&gt;</span> elements. Notice that the full width footer using only 1 column is possible through the use of the <span className={'c-code c-code--inline'}>colspan</span> attribute</p>

                <table className={'o-table o-table--rg u-mb--xxl u-b'}>
                    <thead className={'o-table__row o-table__row--header u-align-center'}>
                        <th className={'o-table__cell u-b'}>Asset</th>
                        <th className={'o-table__cell u-b'}>Spot:Mid</th>
                        <th className={'o-table__cell u-b'}>ATM</th>
                        <th className={'o-table__cell u-b'}>ATMf</th>
                        <th className={'o-table__cell u-b'}>ATMp</th>
                        <th className={'o-table__cell u-b'}>RV</th>
                    </thead>
                    {/* <tbody> */}
                        <tr className={'o-table__row'}>
                            <td className={'o-table__cell u-b'}>USD/JPY</td>
                            <td className={'o-table__cell u-b u-align--right'}>123.456</td>
                            <td className={'o-table__cell u-b u-align--right'}>123.456</td>
                            <td className={'o-table__cell u-b u-align--right'}>123.456</td>
                            <td className={'o-table__cell u-b u-align--right'}>123.456</td>
                            <td className={'o-table__cell u-b u-align--right'}>123.456</td>
                        </tr>
                        <tr className={'o-table__row'}>
                            <td className={'o-table__cell u-b'}>CAD/AUD</td>
                            <td className={'o-table__cell u-b u-align--right'}>456.789</td>
                            <td className={'o-table__cell u-b u-align--right'}>456.789</td>
                            <td className={'o-table__cell u-b u-align--right'}>456.789</td>
                            <td className={'o-table__cell u-b u-align--right'}>456.789</td>
                            <td className={'o-table__cell u-b u-align--right'}>456.789</td>
                        </tr>
                    {/* </tbody> */}
                    <tr className={'o-table__row o-table__row--footer u-align--right'}>
                        <td colSpan={'6'} className={'o-table__cell'}>
                            <p>Full width footer, single column</p>
                        </td>
                    </tr>
                </table>


                {/* Using <div> with table classes */}
                <p className={'u-mb--lg'}>A Grid built using <span className={'c-code c-code--inline'}>&lt;div&gt;</span> elements. The full width footer using a single column is not possible without considerable additional markup.</p>

                <div className={'o-table u-width--full o-table--rg u-mb--xxl'}>
                    <div className={'o-table__row o-table__row--header u-font--bold u-align--center'}>
                        <div className={'o-table__cell o-table__cell--header'}>Asset</div>
                        <div className={'o-table__cell o-table__cell--header'}>Spot:Mid</div>
                        <div className={'o-table__cell o-table__cell--header'}>ATM</div>
                        <div className={'o-table__cell o-table__cell--header'}>ATMf</div>
                        <div className={'o-table__cell o-table__cell--header'}>ATMp</div>
                        <div className={'o-table__cell o-table__cell--header'}>RV</div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>USD/JPY</div>
                        <div className={'o-table__cell u-align--right'}>123.456</div>
                        <div className={'o-table__cell u-align--right'}>123.456</div>
                        <div className={'o-table__cell u-align--right'}>123.456</div>
                        <div className={'o-table__cell u-align--right'}>123.456</div>
                        <div className={'o-table__cell u-align--right'}>123.456</div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>CAD/AUD</div>
                        <div className={'o-table__cell u-align--right'}>456.789</div>
                        <div className={'o-table__cell u-align--right'}>456.789</div>
                        <div className={'o-table__cell u-align--right'}>456.789</div>
                        <div className={'o-table__cell u-align--right'}>456.789</div>
                        <div className={'o-table__cell u-align--right'}>456.789</div>
                    </div>
                    <div className={'o-table__row o-table__row--footer u-align--right'}>
                        <div className={'o-table__cell u-width--full'}>
                            <p>Full width footer, single column</p>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}