import { TextControl, PanelBody, PanelRow, RangeControl } from "@wordpress/components"

export default function SliderSettings( {attributes, setAttributes} ) {
  
   return (
      <PanelBody title="Slider Settings" initialOpen={true}>
        <PanelRow>
          <TextControl 
            label={'Slider Title'}
            value={ attributes.title }
            onChange={(new_value)=>setAttributes({title:new_value})}
          />
        </PanelRow>

          {/* slider heigh */}
          <PanelRow>
            <RangeControl
              __nextHasNoMarginBottom
              __next40pxDefaultSize
              help="Please adjust maximum image height"
              initialPosition={30}
              label="Image Height"
              max={600}
              min={10}
              value={attributes.sliderHeight}
              onChange={(height) => setAttributes({sliderHeight: height}) }
            />
        </PanelRow>   
      </PanelBody>
  )
}
    