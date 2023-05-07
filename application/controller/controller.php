<?php
// Create the controller class for the MVC design pattern
class Controller {

	// Declare public variables for the controller class
	public $load;
	
	// Create functions for the controller class
	function __construct($pageMethod = null)
	{
		// echo $pageURI;
		$this->load = new Load();
		$this->$pageMethod();
	}

    function home()
	{
		$this->load->view('viewCocaCola');
	}
	
}
?>    