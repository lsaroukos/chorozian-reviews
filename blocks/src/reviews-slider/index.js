import "./index.scss"
import metadata from './block.json';
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import SliderLayout from "./lib/SliderLayout";
import { useInnerBlocksProps, Inserter, InnerBlocks } from '@wordpress/block-editor';
import { Button } from "@wordpress/components";
import { useEffect, useState } from 'react';
import { useDispatch } from '@wordpress/data';
import SliderSettings from "./settings/SliderSettings";


wp.blocks.registerBlockType( metadata.name, {
    ...metadata,
    edit: EditComponent,
    save: SaveComponent,
})

function EditComponent( props ) {
    const blockProps = useBlockProps({ className: "reviews-slider-block"});

    const [tick, setTick] = useState(0); // Ignore the current state value
    
    const innerBlocksProps = useInnerBlocksProps(
        { className: 'reviews-slider' }, // Wrapper div
        { allowedBlocks: ['chorozian/reviews-slider-item'], orientation: 'horizontal' }
    );

    /**
     * define custom appender button
     */
    function SlideAppender( { rootClientId } ) {
        return (
            <Inserter
                rootClientId={ rootClientId }
                renderToggle={ ( { onToggle, disabled } ) => (
                    <div className="button-appender" >
                        <Button
                            className="slide-appender-button is-primary"
                            onClick={ ()=>{
                                onToggle();
                                setTick(tick => tick + 1); // Update the state to force a re-render
                            } }
                            label="Add Review"
                        >+ Add Review</Button>
                    </div>
                ) }
                isAppender
            />
        );
    }

    useEffect(() => {
        // This will force a re-render of SliderLayout when inner blocks change
    }, [props.clientId]); // You can also add other dependencies if needed

    const { selectBlock } = useDispatch( 'core/block-editor' );

    return (
        <div key={ `${props.clientId}__${tick}` } {...blockProps} onClick={(e)=>{ e.stopPropagation(); selectBlock( props.clientId );}}>
            <InspectorControls>
                <SliderSettings attributes={props.attributes} setAttributes={props.setAttributes} />
            </InspectorControls>
            <h2>{ props.attributes?.title || "Client Reviews" }</h2>  
            <SliderLayout innerBlocksProps={innerBlocksProps} atts={props.attributes}></SliderLayout>
            { props.isSelected && 
                <SlideAppender rootClientId={ props.clientId } />
            }
        </div>
    );
}


function SaveComponent( ){
    return <InnerBlocks.Content />
}