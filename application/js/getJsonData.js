// JavaScript Document
$(document).ready(function(){

	 //AJAX service request to get the main text data from the json data store
	 $.getJSON('../application/model/model.php', function(jsonObj) {
		console.log(jsonObj);
		
		let brands = ['costa','sprite','coca']

		for (let i = 0; i < brands.length; i++) {
			let brand = brands[i];
			let data = jsonObj[i];
			$(`#title_${brand}`).html('<h2>' + data.brand + '<h2>');
			$(`#subTitle_${brand}`).html('<h3>' + data.homeSubtitle + '</h3>');
			$(`#description_${brand}`).html('<p>' + data.homeDescription + '</p>');	

			console.log(data)
			$(`#x3dModelTitle_${brand}`).html('<h2>' + data.x3dModelTitle + '<h2>');
			$(`#x3dCreationMethod_${brand}`).html('<p>' + data.x3dCreationMethod + '<p>');
			$(`#model_title_${brand}`).html('<h2>' + data.modelTitle + '<h2>');
			$(`#model_subTitle_${brand}`).html('<h3>' + data.modelSubtitle + '</h3>');
			$(`#model_description_${brand}`).html('<p>' + data.modelDescription + '</p>');
		}	
	 });
});








