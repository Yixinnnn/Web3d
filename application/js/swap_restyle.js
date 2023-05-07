// JavaScript Document
var counter = 0;
$(document).ready(function() {
	
	selectPage();
	
});

function selectPage() {

	$('#home').show();
	$('#about').hide();
	$('#models').hide();
	$('#interaction').hide();
	$('#costaDescription').hide();
	$('#spriteDescription').hide(); 
	$('#cocaDescription').hide(); 


	$('#navHome').click(function(){
		$('#home').show();
		$('#about').hide();
		$('#models').hide();
		$('#interaction').hide();
		$('#costaDescription').hide();
		$('#spriteDescription').hide(); 
		$('#cocaDescription').hide(); 
		$(".nav-link").removeClass("active");
		$('#navHome').addClass("active")
	});

	$('#navAbout').click(function(){
		$('#home').hide();
		$('#about').show();
		$('#models').hide();
		$('#interaction').hide();
		$('#costaDescription').hide();
		$('#spriteDescription').hide(); 
		$('#cocaDescription').hide(); 	 
		$(".nav-link").removeClass("active");
		$('#navAbout').addClass("active")
	});

	$('#navModels').click(function(){
		$('#home').hide();
		$('#about').hide();
		$('#models').show();
		$('#interaction').show(); 
		$('#costaDescription').show();
		$('#spriteDescription').hide(); 
		$('#cocaDescription').hide();
		$("#x3dModelTitle_costa").show();
		$("#x3dModelTitle_sprite").hide();
		$("#x3dModelTitle_coca").hide();
		$("#x3dCreationMethod_costa").show();
		$("#x3dCreationMethod_sprite").hide();
		$("#x3dCreationMethod_coca").hide(); 
		$(".nav-link").removeClass("active");
		$('#navModels').addClass("active")
	});
}


function costaDescription() {
	$("button").click(function(){
		
		$("#costaDescription").show();
        $("#spriteDescription").hide();
		$("#cocaDescription").hide();
		
		$("#x3dModelTitle_costa").show();
		$("#x3dModelTitle_sprite").hide();
		$("#x3dModelTitle_coca").hide();

		$("#x3dCreationMethod_costa").show();
		$("#x3dCreationMethod_sprite").hide();
		$("#x3dCreationMethod_coca").hide();

    }); 
}

function spriteDescription() {
    $("button").click(function(){

        $("#costaDescription").hide();
        $("#spriteDescription").show();
		$("#cocaDescription").hide();
		
		$("#x3dModelTitle_costa").hide();
		$("#x3dModelTitle_sprite").show();
		$("#x3dModelTitle_coca").hide();

		$("#x3dCreationMethod_costa").hide();
		$("#x3dCreationMethod_sprite").show();
		$("#x3dCreationMethod_coca").hide();
    }); 
}

function cocaDescription() {
    $("button").click(function(){

        $("#costaDescription").hide();
        $("#spriteDescription").hide();
		$("#cocaDescription").show();
		
		$("#x3dModelTitle_costa").hide();
		$("#x3dModelTitle_sprite").hide();
		$("#x3dModelTitle_coca").show();

		$("#x3dCreationMethod_costa").hide();
		$("#x3dCreationMethod_sprite").hide();
		$("#x3dCreationMethod_coca").show();
    }); 
}

function changeLook() {
	counter += 1;
	switch (counter) {
		case 1:
			document.getElementById('bodyColor').style.backgroundColor = 'lightblue';
			document.getElementById('headerColor').style.backgroundColor = '#FF0000';
			document.getElementById('footerColor').style.backgroundColor = '#FF9900';
			break;
		case 2:
			document.getElementById('bodyColor').style.backgroundColor = '#FF6600';
			document.getElementById('headerClor').style.backgroundColor = '#FF9999';
			document.getElementById('footerColor').style.backgroundColor = '#996699';
			break;
		case 3:
			document.getElementById('bodyColor').style.backgroundColor = 'coral';
			document.getElementById('headerColor').style.backgroundColor = 'darkcyan';
			document.getElementById('footerColor').style.backgroundColor = 'darksalmom';
			break;
		case 4:
			counter = 0;
			document.getElementById('bodyColor').style.backgroundColor = 'lightgrey';
			document.getElementById('headerColor').style.backgroundColor = 'chocolate';
			document.getElementById('footerColor').style.backgroundColor = 'dimgrey';
			break;
	}
}

function changeBack() {
	document.getElementById('bodyColor').style.backgroundColor = '#FFFFFF';
	document.getElementById('headerColor').style.backgroundColor = 'rgba(175,0,0,1)';
	document.getElementById('footerColor').style.backgroundColor = 'rgba(175,0,0,1)';
}

