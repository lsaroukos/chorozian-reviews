<?php 

namespace CRZN_REVIEW\Src;

class Template{
    
    //directory of public folder that hosts template files
    public $templates_dir = implode( DIRECTORY_SEPARATOR, [ROOT_DIR, 'templates' ] );

    protected $file = null; //holds the full filename and path

    private $suffix = '.tmpl.php'; 

    /**
     * @param string $fname
     * 
     */
    public function __construct( $fname='default' ){
        
        $filepath = $this->get_file_path($fname);
        //check if file exists
        if( file_exists( $filepath ) ){
            $this->file = $filepath;
        }
    }

    /**
     * @param $fname
     * 
     */
    private function get_file_path( $fname ){
        return $this->templates_dir . $fname . $this->suffix;
    }


    /**
     * @return string the code contained in the file template
     */
    public function get( ){
        ob_start();
        include $this->file;
        return ob_get_clean();
    }

    /**
     * prints the code contained in the file template
     */
    public function render(){
        echo $this->get();
    }
}