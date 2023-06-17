$('.carousel').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	autoplay: true,
 	autoplaySpeed: 2000,
 	prevArrow: '<img src="фотки/leftA.png" width="30px" height="30px" class="arrow">',
  	nextArrow: '<img src="фотки/rightA.png" width="30px" height="30px" class="arrow">',
});


let item1 = document.querySelector('.item1')
let item2 = document.querySelector('.item2')
let item3 = document.querySelector('.item3')
let item4 = document.querySelector('.item4')
let item5 = document.querySelector('.item5')
let item6 = document.querySelector('.item6')
let item7 = document.querySelector('.item7')
let item8 = document.querySelector('.item8')
let item9 = document.querySelector('.item9')

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
		item1.style.height = '361px';
	} else {
		buton1.src = "фотки/arrowDwn.png"
		ops1.classList.remove('active')
		opsp1 = true;
		item1.style.height = '326px';
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
		item2.style.height = '361px';
	} else {
		buton2.src = "фотки/arrowDwn.png"
		ops2.classList.remove('active')
		opsp2 = true;
		item2.style.height = '326px';
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
		item3.style.height = '361px';
	} else {
		buton3.src = "фотки/arrowDwn.png"
		ops3.classList.remove('active')
		opsp3 = true;
		item3.style.height = '326px';
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
		item4.style.height = '361px';
	} else {
		buton4.src = "фотки/arrowDwn.png"
		ops4.classList.remove('active')
		opsp4 = true;
		item4.style.height = '326px';
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
		item5.style.height = '361px';
	} else {
		buton5.src = "фотки/arrowDwn.png"
		ops5.classList.remove('active')
		opsp5 = true;
		item5.style.height = '326px';
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
		item6.style.height = '361px';
	} else {
		buton6.src = "фотки/arrowDwn.png"
		ops6.classList.remove('active')
		opsp6 = true;
		item6.style.height = '326px';
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
		item7.style.height = '361px';
	} else {
		buton7.src = "фотки/arrowDwn.png"
		ops7.classList.remove('active')
		opsp7 = true;
		item7.style.height = '326px';
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
		item8.style.height = '361px';
	} else {
		buton8.src = "фотки/arrowDwn.png"
		ops8.classList.remove('active')
		opsp8 = true;
		item8.style.height = '326px';
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
		item9.style.height = '361px';
	} else {
		buton9.src = "фотки/arrowDwn.png"
		ops9.classList.remove('active')
		opsp9 = true;
		item9.style.height = '326px';
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
