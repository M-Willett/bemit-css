import React from "react";


export default class ObjectFlex extends React.Component {
    render(){
        return (
            <div id={'object_flex'} className={'id-component__wrapper o-block u-pt--xxl u-mb--xxl'}>
                <p className={'u-h2 u-mb--xl o-flex o-flex--align-center u-bg--foreground u-color--background u-p--md u-radius'}>
                    <span>Flex</span>
                    <span className={'o-flex--1'}></span>
                    <span className={'u-font--mono u-font--md'}>_object.flex.less</span>
                </p>

                <p className={'u-mb--lg'}>The <span className={'c-code c-code--inline'}>display: flex;</span> property defines a container for flex items, it is a very powerful and extremely flexible way of structuring content on a web document.</p>
                <p className={'u-mb--lg'}>The <span className={'c-code c-code--inline'}>flex</span> CSS property specifies how a flex item will grow or shrink so as to fit the space available in its flex container. This is a shorthand property that sets flex-grow, flex-shrink, and flex-basis.</p>

                <p className={'u-font--bold u-mt--xl u-mb--md'}>Usage</p>
                <p className={'u-mb--lg'}>Flex items should always be children of the flex container.</p>

                <pre className={'c-code u-mb--lg'}>
                    &lt;div class="<span className={'u-color--error'}>o-flex</span>"&gt;<br/>
                    &nbsp;&nbsp;&lt;div class="<span className={'u-color--error'}>o-flex--1</span>"&gt;...&lt;/div&gt;<br/>
                    &nbsp;&nbsp;&lt;div class="<span className={'u-color--error'}>o-flex--2</span>"&gt;...&lt;/div&gt;<br/>
                    &nbsp;&nbsp;&lt;div&gt;...&lt;/div&gt;<br/>
                    &lt;/div&gt;
                </pre>

                <p className={'u-font--bold u-mt--xl u-mb--md'}>Flex container</p>

                <div className={'o-table o-table--rg u-mt--rg u-mb--lg'}>
                    <div className={'o-table__row o-table__row--header'}>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Object class</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Description</p>
                        </div>
                        <div className={'o-table__cell o-table__cell--header u-center u-p--sm'}>
                            <p className={'u-font--bold'}>Example</p>
                        </div>
                    </div>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Defines an element as a flex-container whose children abide by the flex rules.</p>
                            <p className={'u-mb--md'}>In the examples the numbers highlight the flex value given. If a value is not provided the flex item becomes the smallest size possible.</p>
                        </div>
                        <div className={'o-table__cell'}>
                        <div className={'o-flex u-bg--midground u-p--sm u-mb--md'}>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                            </div>
                            <div className={'o-flex u-bg--midground u-p--sm u-mb--md'}>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                            </div>
                            <div className={'o-flex u-bg--midground u-p--sm'}>
                                <div className={'u-bg--foreground u-p--sm u-m--sm'}>&nbsp;</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--3 u-bg--foreground u-color--background u-p--sm u-m--sm'}>3</div>
                            </div>
                        </div>
                    </div>

                    <p className={'u-font--bold u-mt--lg u-mb--md'}>Flex items</p>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--1</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--2</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--3</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--4</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--5</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--6</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--7</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--8</p><br/>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Defines an element as a flex-item with the value of <span className={'c-code c-code--inline'}>1</span>.</p>
                            <p className={'u-mb--md'}>All examples have padding and margin to help demonstrate the DOM.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-flex u-bg--midground u-p--sm u-mb--md'}>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--2 u-bg--foreground u-color--background u-p--sm u-m--sm'}>2</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                            </div>
                            <div className={'o-flex u-bg--midground u-p--sm'}>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--2 u-bg--foreground u-color--background u-p--sm u-m--sm'}>2</div>
                                <div className={'o-flex--5 u-bg--foreground u-color--background u-p--sm u-m--sm'}>5</div>
                            </div>
                        </div>
                    </div>


                    <p className={'u-font--bold u-mt--lg u-mb--md'}>Flex ordering modifiers</p>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--row</p><br/>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Set flex-items to flow horizontally.</p>
                            <p className={'u-mb--md u-font--italic'}>Default behaviour.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-flex o-flex--row u-bg--midground u-p--sm'}>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--2 u-bg--foreground u-color--background u-p--sm u-m--sm'}>2</div>
                            </div>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--row--reverse</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--reverse--row</p><br/>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>The same as o-flex--row but items flow in reverse.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-flex o-flex--row--reverse u-bg--midground u-p--sm'}>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--2 u-bg--foreground u-color--background u-p--sm u-m--sm'}>2</div>
                            </div>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--col</p><br/>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Set flex-items to flow vertically.</p>
                            <p className={'u-mb--md'}>Usually requires a height to be set on the flex-container.</p>
                        </div>
                        <div className={'o-table__cell'} style={{height: '150px'}}>
                            <div className={'o-flex o-flex--col u-height--full u-bg--midground u-p--sm u-mb--md'}>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--2 u-bg--foreground u-color--background u-p--sm u-m--sm'}>2</div>
                            </div>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--col--reverse</p><br/>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--reverse--col</p><br/>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>The same as o-flex--col but items flow in reverse.</p>
                        </div>
                        <div className={'o-table__cell'} style={{height: '150px'}}>
                            <div className={'o-flex o-flex--col--reverse u-height--full u-bg--midground u-p--sm u-mb--md'}>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--2 u-bg--foreground u-color--background u-p--sm u-m--sm'}>2</div>
                            </div>
                        </div>
                    </div>

                    <p className={'u-font--bold u-mt--lg u-mb--md'}>Flex alignment modifiers</p>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--align-start</p><br/>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Flex-items align to the start.</p>
                            <p className={'u-mb--md'}>Depending on the flex direction this can mean the left or the top.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-flex o-flex--align-start u-bg--midground u-p--sm u-mb--md'} style={{height: '80px'}}>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                            </div>
                            <div className={'o-flex o-flex--col o-flex--align-start u-height--full u-bg--midground u-p--sm'} style={{height: '80px'}}>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                            </div>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--align-center</p><br/>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Flex-items align to the center or middle.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-flex o-flex--align-center u-bg--midground u-p--sm u-mb--md'} style={{height: '80px'}}>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                            </div>
                            <div className={'o-flex o-flex--col o-flex--align-center u-bg--midground u-p--sm'} style={{height: '80px'}}>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                            </div>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--align-end</p><br/>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Flex-items align to the end.</p>
                            <p className={'u-mb--md'}>Depending on the flex direction this can mean the right or the bottom.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-flex o-flex--align-end u-bg--midground u-p--sm u-mb--md'} style={{height: '80px'}}>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                            </div>
                            <div className={'o-flex o-flex--col o-flex--align-end u-height--full u-bg--midground u-p--sm'} style={{height: '80px'}}>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}