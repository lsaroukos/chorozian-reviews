import "./index.scss"
import metadata from './block.json';
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { SwiperSlide } from "swiper/react";
import StarRating from "./libs/StarRating";
import ImageSettings from "./settings/ImageSettings";
import DetailSettings from "./settings/DetailSettings";
import { useDispatch } from '@wordpress/data';


wp.blocks.registerBlockType( metadata.name, {
    ...metadata,
    edit: EditComponent,
    save: SaveComponent,
})


function EditComponent( {attributes, setAttributes, key, clientId} ) {
    
    const blockProps = useBlockProps();
    const { selectBlock } = useDispatch( 'core/block-editor' );
    
    return (
        <SwiperSlide className="reviews-slider-item" key={key} onClick={(e)=>{ e.stopPropagation(); selectBlock( clientId );}}>
            <InspectorControls>
                <ImageSettings attributes={attributes} setAttributes={setAttributes} />
                <DetailSettings attributes={attributes} setAttributes={setAttributes} />
			</InspectorControls>	
            {
                attributes.img?.id !== "" && 
                (
                    <img className="review-image" src={ attributes.img?.medium || ''  } />
                )
            }
            <div className="review-details" >
                <h3 className="reviewer-name">{attributes.clientName}</h3>
                <p className="review-text">{attributes.reviewText}</p>
                <div className="review-footer">
                    <StarRating rating={attributes.rating} />
                    { attributes.link!=="" && (
                        <a className="review-link" href={attributes.link} target="_blank">(see review)</a>
                    ) }
                </div>
            </div>
        </SwiperSlide>
    )
}


function SaveComponent(  ){
    return null;
}