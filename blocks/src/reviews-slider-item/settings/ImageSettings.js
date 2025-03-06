import { Button, PanelBody, PanelRow, RangeControl } from "@wordpress/components"
import {  MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"


export default function ImageSettings( {attributes, setAttributes} ) {
  
  const ALLOWED_MEDIA_TYPES = [ 'image' ]

  /**
   * 
   * @param {array} imgs array of media objects 
   * @returns 
   */
  function selectImage( media ){
    //save review image
    setAttributes({
      img : {
              id: media.id,
              full: media.url,
              large: media.sizes['large']!=null ? media.sizes['large'].url : media.url,
              medium: media.sizes['medium']!=null ? media.sizes['medium'].url : media.url
            }
    })
  }

  return (
      <PanelBody title="Review Image" initialOpen={true}>
        <PanelRow>
          { attributes.img.id==="" ?
            (
              <p>no image selected</p>
            ) : (
              <img src={attributes.img.medium} />
            )
          }
        </PanelRow>
        <PanelRow>
          <MediaUploadCheck>
            <MediaUpload
              allowedTypes={ALLOWED_MEDIA_TYPES} 
              onSelect={(media)=>{selectImage(media)} }
              value={attributes.img.id}
              multiple={false}
              render={({ open }) => {
                return (
                  <>
                    <Button onClick={open} variant="primary" >Select Review Image</Button>
                  </>
                )
              }}
            />
          </MediaUploadCheck>
        </PanelRow>         
        <PanelRow>
          <Button className="button" onClick={()=>setAttributes({img:{id:""}})}>clear</Button>
        </PanelRow>

      </PanelBody>
  )
}
    