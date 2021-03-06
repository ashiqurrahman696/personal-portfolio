function toggleMenu(){
	var nav = document.querySelector('nav ul');
	var icon = document.querySelector('i');
	nav.classList.toggle('active');
	icon.classList.toggle('fa-times');
	icon.classList.toggle('fa-bars');
}

var myText = document.getElementById('myText');
var typewriter = new Typewriter(myText, {
	loop: true,
});
typewriter.typeString('I am Web Designer')
	.pauseFor(1000)
	.deleteChars(6)
	.typeString('veloper')
	.pauseFor(1000)
	.deleteChars(16)
	.typeString('know HTML')
	.pauseFor(1000)
	.deleteChars(4)
	.typeString('CSS')
	.pauseFor(1000)
	.deleteChars(3)
	.typeString('Bootstrap')
	.pauseFor(1000)
	.deleteChars(9)
	.typeString('JavaScript')
	.pauseFor(1000)
	.deleteChars(10)
	.typeString('jQuery')
	.pauseFor(1000)
	.deleteChars(6)
	.typeString('PHP')
	.pauseFor(1000)
	.deleteChars(3)
	.typeString('MySQL')
	.pauseFor(1000)
	.deleteChars(5)
	.typeString('Laravel')
	.pauseFor(1000)
	.start();

$(window).scroll(function(){
	var scrl = $(window).scrollTop();
	if (scrl > 700) {
		$('.top').css({'opacity':'1'});
	}
	else{
		$('.top').css({'opacity':'0'});
	}
});
$('.top').on('click', function(){
	$('html').animate({'scrollTop':'0'});
})