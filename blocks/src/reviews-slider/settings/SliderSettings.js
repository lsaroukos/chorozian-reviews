import { TextControl, PanelBody, PanelRow, RangeControl, ToggleControl } from "@wordpress/components"


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
        
        {/* Autoplay toggle switch  */}
        <PanelRow>
          <ToggleControl
            label="Autoplay"
            checked={attributes.autoplay}
            onChange={(new_value)=>setAttributes({autoplay:new_value})}
          />    
        </PanelRow>

        {/* Autoplay speed */

          attributes.autoplay &&
          (
            <PanelRow>
              <RangeControl 
                __nextHasNoMarginBottom
                __next40pxDefaultSize
                help="Adjust maximum autoplay speed"
                initialPosition={50}
                label="Autoplay Speed"
                max={6000}
                min={100}
                value={attributes.autoplaySpeed}
                onChange={(speed) => setAttributes({autoplaySpeed: speed}) }
              />
            </PanelRow>
          )

        }

      </PanelBody>
  )
}
    