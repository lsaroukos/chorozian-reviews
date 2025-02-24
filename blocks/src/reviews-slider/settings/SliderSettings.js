import { TextControl, PanelBody, PanelRow } from "@wordpress/components"

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
      </PanelBody>
  )
}
    