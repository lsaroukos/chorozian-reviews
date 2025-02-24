    import { PanelBody, PanelRow } from "@wordpress/components";
    import { TextControl, TextareaControl } from '@wordpress/components';
    import { __experimentalNumberControl as NumberControl } from '@wordpress/components';

    export default function DetailSettings( {attributes, setAttributes} ){

        return (
            <PanelBody title="Detail Settings" initialOpen={true}>
                <PanelRow>
                    <TextControl
                        __nextHasNoMarginBottom
                        __next40pxDefaultSize
                        label="Reviewer Name"
                        value={ attributes.clientName }
                        onChange={ ( newName ) => setAttributes( { clientName: newName } ) }
                    />
                </PanelRow>
                <PanelRow>
                    <TextareaControl
                        __nextHasNoMarginBottom
                        label="Review Text"
                        help="Paste review text"
                        value={ attributes.reviewText }
                        onChange={ ( new_review ) => setAttributes( { reviewText: new_review } ) }
                    />
                </PanelRow>
                <PanelRow>
                    <NumberControl
                        __next40pxDefaultSize
                        isShiftStepEnabled={ true }
                        onChange={ 
                            (new_rating)=> {
                                let ra = parseFloat(new_rating) < 0 ? 0 : parseFloat(new_rating);
                                ra = new_rating > 5 ? 5 : ra;
                                setAttributes( { rating: ra }) ;
                            } 
                        }
                        shiftStep={ 0.5 }
                        step={ 0.5 }
                        min={0}
                        max={5}
                        label={'Rating'}
                        value={ attributes.rating }
                    />
                </PanelRow>
                <PanelRow>
                    <TextControl
                        __nextHasNoMarginBottom
                        __next40pxDefaultSize
                        label="Linkt to External Review"
                        value={ attributes.link }
                        onChange={ ( new_value ) => setAttributes( { link: new_value } ) }
                    />
                </PanelRow>
            </PanelBody>
        )   
    }