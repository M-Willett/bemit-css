import React from "react";


export default class ObjectFlex extends React.Component {
    render(){
        return (
            <div id={'object_flex'} className={'id-component__wrapper o-block u-mt--xxl u-mb--xxl'}>
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
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Defines an element as a flex-container whose children abide by the flex rules.</p>
                            <p className={'u-mb--md'}>In the examples the numbers highlight the flex value given. If a value is not provided the flex item becomes the smallest size possible.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-flex u-resize u-bg--midground u-p--sm u-mb--md'}>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                            </div>
                            <div className={'o-flex u-resize u-bg--midground u-p--sm u-mb--md'}>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                            </div>
                            <div className={'o-flex u-resize u-bg--midground u-p--sm'}>
                                <div className={'u-bg--foreground u-p--sm u-m--sm'}>&nbsp;</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--3 u-bg--foreground u-color--background u-p--sm u-m--sm'}>3</div>
                            </div>
                        </div>
                    </div>

                    <p className={'u-font--bold u-mt--lg u-mb--md'}>Flex items</p>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--auto</p><br/>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>The item is sized according to its width and height properties, but grows to absorb any extra free space in the flex container, and shrinks to its minimum size to fit the container.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-flex u-resize u-bg--midground u-p--sm u-mb--md'}>
                                <div className={'o-flex--auto u-bg--foreground u-color--background u-p--sm u-m--sm'}>Auto</div>
                                <div className={'o-flex--auto u-bg--foreground u-color--background u-p--sm u-m--sm'}>Auto</div>
                                <div className={'o-flex--auto u-bg--foreground u-color--background u-p--sm u-m--sm'}>Auto</div>
                            </div>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--initial</p><br/>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>This is the default value. The item is sized according to its width and height properties. It shrinks to its minimum size to fit the container, but does not grow to absorb any extra free space in the flex container.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-flex u-resize u-bg--midground u-p--sm u-mb--md'}>
                                <div className={'o-flex--initial u-bg--foreground u-color--background u-p--sm u-m--sm'}>Initial</div>
                                <div className={'o-flex--initial u-bg--foreground u-color--background u-p--sm u-m--sm'}>Initial</div>
                                <div className={'o-flex--initial u-bg--foreground u-color--background u-p--sm u-m--sm'}>Initial</div>
                            </div>
                        </div>
                    </div>
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
                            <div className={'o-flex u-resize u-bg--midground u-p--sm u-mb--md'}>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                                <div className={'o-flex--2 u-bg--foreground u-color--background u-p--sm u-m--sm'}>2</div>
                                <div className={'o-flex--1 u-bg--foreground u-color--background u-p--sm u-m--sm'}>1</div>
                            </div>
                            <div className={'o-flex u-resize u-bg--midground u-p--sm'}>
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
                            <div className={'o-flex o-flex--row u-resize u-bg--midground u-p--sm'}>
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
                            <div className={'o-flex o-flex--row--reverse u-resize u-bg--midground u-p--sm'}>
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
                        <div className={'o-table__cell'}>
                            <div className={'o-flex o-flex--col u-resize u-height--full u-bg--midground u-p--sm u-mb--md'} style={{minHeight: '150px'}}>
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
                        <div className={'o-table__cell'}>
                            <div className={'o-flex o-flex--col--reverse u-resize u-height--full u-bg--midground u-p--sm u-mb--md'} style={{minHeight: '150px'}}>
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
                            <div className={'o-flex o-flex--align-start u-resize u-bg--midground u-p--sm u-mb--md'} style={{minHeight: '80px'}}>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                            </div>
                            <div className={'o-flex o-flex--col o-flex--align-start u-resize u-height--full u-bg--midground u-p--sm'} style={{minHeight: '80px'}}>
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
                            <div className={'o-flex o-flex--align-center u-resize u-bg--midground u-p--sm u-mb--md'} style={{minHeight: '80px'}}>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                            </div>
                            <div className={'o-flex o-flex--col o-flex--align-center u-resize u-bg--midground u-p--sm'} style={{minHeight: '80px'}}>
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
                            <div className={'o-flex o-flex--align-end u-resize u-bg--midground u-p--sm u-mb--md'} style={{minHeight: '80px'}}>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                            </div>
                            <div className={'o-flex o-flex--col o-flex--align-end u-resize u-height--full u-bg--midground u-p--sm'} style={{minHeight: '80px'}}>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--sm u-m--sm'}></div>
                            </div>
                        </div>
                    </div>
                    
                    <p className={'u-font--bold u-mt--lg u-mb--md'}>Flex justification modifiers</p>

                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--justify-start</p><br/>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Justify flex-items to the start of the flex container.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-flex o-flex--justify-start u-resize u-bg--midground u-pt--rg u-pb--rg u-mb--md'}>
                                <div className={'u-bg--foreground u-color--background u-p--rg'}></div>
                                <div className={'u-bg--text-accent u-color--background u-p--rg'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--rg'}></div>
                                <div className={'u-bg--text-accent u-color--background u-p--rg'}></div>
                            </div>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--justify-center</p><br/>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Justify items to the center of the flex container.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-flex o-flex--justify-center u-resize u-bg--midground u-pt--rg u-pb--rg u-mb--md'}>
                                <div className={'u-bg--foreground u-color--background u-p--rg'}></div>
                                <div className={'u-bg--text-accent u-color--background u-p--rg'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--rg'}></div>
                                <div className={'u-bg--text-accent u-color--background u-p--rg'}></div>
                            </div>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--justify-end</p><br/>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Justify flex-items to the end of the flex container.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-flex o-flex--justify-end u-resize u-bg--midground u-pt--rg u-pb--rg u-mb--md'}>
                                <div className={'u-bg--foreground u-color--background u-p--rg'}></div>
                                <div className={'u-bg--text-accent u-color--background u-p--rg'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--rg'}></div>
                                <div className={'u-bg--text-accent u-color--background u-p--rg'}></div>
                            </div>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--space-between</p><br/>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Justify items with even space between them.</p>
                            <p className={'u-mb--md'}>Items are aligned to the very edges of the flex container.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-flex o-flex--space-between u-resize u-bg--midground u-pt--rg u-pb--rg u-mb--md'}>
                                <div className={'u-bg--foreground u-color--background u-p--rg'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--rg'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--rg'}></div>
                            </div>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--space-around</p><br/>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Justify items with even space around them.</p>
                            <p className={'u-mb--md'}>This has a similar outcome of defining equal horizontal margins.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-flex o-flex--space-around u-resize u-bg--midground u-pt--rg u-pb--rg u-mb--md'}>
                                <div className={'u-bg--foreground u-color--background u-p--rg'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--rg'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--rg'}></div>
                            </div>
                        </div>
                    </div>
                    <div className={'o-table__row'}>
                        <div className={'o-table__cell'}>
                            <p className={'c-code c-code--inline u-mb--sm'}>o-flex--space-evenly</p><br/>
                        </div>
                        <div className={'o-table__cell'}>
                            <p className={'u-mb--md'}>Justify items evenly.</p>
                            <p className={'u-mb--md'}>Spaces between the items are equal giving a very satisfying appearance.</p>
                        </div>
                        <div className={'o-table__cell'}>
                            <div className={'o-flex o-flex--space-evenly u-resize u-bg--midground u-pt--rg u-pb--rg u-mb--md'}>
                                <div className={'u-bg--foreground u-color--background u-p--rg'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--rg'}></div>
                                <div className={'u-bg--foreground u-color--background u-p--rg'}></div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}