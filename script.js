$('.carousel').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	autoplay: true,
 	autoplaySpeed: 2000,
 	prevArrow: '<img src="фотки/leftA.png" width="30px" height="30px" class="arrow">',
  	nextArrow: '<img src="фотки/rightA.png" width="30px" height="30px" class="arrow">',
});

let opsp1 = true;
let ops1 = document.querySelector('.ops1')
let buton1 = document.querySelector('.buton1')
let cb = document.querySelector('.content-blocker')
let burger = document.querySelector('.burger-menu')
let nav = document.querySelector('.main-nav')
burger.addEventListener('click', function() {
	 cb.classList.toggle('active')
    burger.classList.toggle('active')
    nav.classList.toggle('active') 
})

buton1.addEventListener('click', function(){
	if(opsp1 == true){
		ops1.classList.toggle('active')
		buton1.src = "фотки/arrowUp.png"
		opsp1 = false;
	} else {
		buton1.src = "фотки/arrowDwn.png"
		ops1.classList.remove('active')
		opsp1 = true;
	}
})

let opsp2 = true;
let ops2 = document.querySelector('.ops2')
let buton2 = document.querySelector('.buton2')

buton2.addEventListener('click', function(){
	if(opsp2 == true){
		ops2.classList.toggle('active')
		buton2.src = "фотки/arrowUp.png"
		opsp2 = false;
	} else {
		buton2.src = "фотки/arrowDwn.png"
		ops2.classList.remove('active')
		opsp2 = true;
	}
})

let opsp3 = true;
let ops3 = document.querySelector('.ops3')
let buton3 = document.querySelector('.buton3')

buton3.addEventListener('click', function(){
	if(opsp3 == true){
		ops3.classList.toggle('active')
		buton3.src = "фотки/arrowUp.png"
		opsp3 = false;
	} else {
		buton3.src = "фотки/arrowDwn.png"
		ops3.classList.remove('active')
		opsp3 = true;
	}
})

let opsp4 = true;
let ops4 = document.querySelector('.ops4')
let buton4 = document.querySelector('.buton4')

buton4.addEventListener('click', function(){
	if(opsp4 == true){
		ops4.classList.toggle('active')
		buton4.src = "фотки/arrowUp.png"
		opsp4 = false;
	} else {
		buton4.src = "фотки/arrowDwn.png"
		ops4.classList.remove('active')
		opsp4 = true;
	}
})

let opsp5 = true;
let ops5 = document.querySelector('.ops5')
let buton5 = document.querySelector('.buton5')

buton5.addEventListener('click', function(){
	if(opsp5 == true){
		ops5.classList.toggle('active')
		buton5.src = "фотки/arrowUp.png"
		opsp5 = false;
	} else {
		buton5.src = "фотки/arrowDwn.png"
		ops5.classList.remove('active')
		opsp5 = true;
	}
})

let opsp6 = true;
let ops6 = document.querySelector('.ops6')
let buton6 = document.querySelector('.buton6')

buton6.addEventListener('click', function(){
	if(opsp6 == true){
		ops6.classList.toggle('active')
		buton6.src = "фотки/arrowUp.png"
		opsp6 = false;
	} else {
		buton6.src = "фотки/arrowDwn.png"
		ops6.classList.remove('active')
		opsp6 = true;
	}
})

let opsp7 = true;
let ops7 = document.querySelector('.ops7')
let buton7 = document.querySelector('.buton7')

buton7.addEventListener('click', function(){
	if(opsp7 == true){
		ops7.classList.toggle('active')
		buton7.src = "фотки/arrowUp.png"
		opsp7 = false;
	} else {
		buton7.src = "фотки/arrowDwn.png"
		ops7.classList.remove('active')
		opsp7 = true;
	}
})

let opsp8 = true;
let ops8 = document.querySelector('.ops8')
let buton8 = document.querySelector('.buton8')

buton8.addEventListener('click', function(){
	if(opsp8 == true){
		ops8.classList.toggle('active')
		buton8.src = "фотки/arrowUp.png"
		opsp8 = false;
	} else {
		buton8.src = "фотки/arrowDwn.png"
		ops8.classList.remove('active')
		opsp8 = true;
	}
})

let opsp9 = true;
let ops9 = document.querySelector('.ops9')
let buton9 = document.querySelector('.buton9')

buton9.addEventListener('click', function(){
	if(opsp9 == true){
		ops9.classList.toggle('active')
		buton9.src = "фотки/arrowUp.png"
		opsp9 = false;
	} else {
		buton9.src = "фотки/arrowDwn.png"
		ops9.classList.remove('active')
		opsp9 = true;
	}
})

// Найти все ссылки начинающиеся на # 
const anchors = document.querySelectorAll('a[href^="#"]') 
 
// Цикл по всем ссылкам 
for(let anchor of anchors) { 
  anchor.addEventListener("click", function(e) { 
    e.preventDefault() // Предотвратить стандартное поведение ссылок 
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно) 
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body' 
    // Плавная прокрутка до элемента с id = href у ссылки 
    document.querySelector(goto).scrollIntoView({ 
      behavior: "smooth", 
      block: "start" 
    }) 
  }) 
}