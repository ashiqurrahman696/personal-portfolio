function toggleMenu(){
	let nav = document.querySelector('nav ul');
	let icon = document.querySelector('i');
	nav.classList.toggle('active');
	icon.classList.toggle('fa-times');
	icon.classList.toggle('fa-bars');
}

let myText = document.getElementById('myText');
let typewriter = new Typewriter(myText, {
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

let ageEl = document.getElementById('age');

let dateOfBirth = new Date(1999, 8, 2);
let currDate = new Date();
let age = currDate.getFullYear() - dateOfBirth.getFullYear();

ageEl.innerHTML = age;

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