@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');

html, body{
	font-family: 'Comfortaa', cursive;
	height: 100%;
}
.logop{
	height: 57px;
	width: 145px;
}

header{
	border-bottom: 2px solid black;
	margin: 0 auto;
	align-items: center;
	display: flex;
	justify-content: space-around;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 441;
	width: 100%;
	background-color: white;
	margin-top: 0 !important;
}

footer{
	background-color: rgb(135, 255, 139);
	border-top: 2px solid black;
	width: 100vw;
	margin-top: 20px;
	position: absolute;
	left: 0;
}

.tg{
	margin-left: 5px;
	margin-bottom: 5px;
	width: 60px;
	height: 60px;
}

.logo{
	height: 50px;
	width: 50px;
	display: block;
}

.image{
	border-radius: 10px;
}

.katalog{
		display: flex;
	justify-content: center;
}

a{
	text-decoration: none;
	color: black;
}

a:hover{
	text-decoration: underline;
	color: rgb(158, 137, 50);
}

.slick-slider {
	display: flex !important;
	align-items: center;
}

.carousel__item{
	display: flex !important;
	flex-direction: column;
	margin-right: 20px;
}

.arrow{
	height: 30px;
	width: 43px;
}

.carousel{
	margin-top: 15px;
}

.f_txt{
	margin-left: 5px;
}

.nav-list {
    display: flex;
    justify-content: space-between;
    gap: 5vw;
}

.content-blocker {
			display: none;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(135, 237, 26, 0.5);
			opacity: 0,5;
			z-index: 442;
		}

.item{
	background-color: rgb(250, 240, 190);
	width: 220px;
	height: 326px;
	border-radius: 10px;
	margin-top: 30px;
}

.katalig{
	padding-top: 20px;
}

.up{
	width: 60px;
	height: 60px;
	border-radius: 100%;
	border: 1px solid black;
	background-color: green;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	bottom: 30px;
	right: 30px;
	z-index: 1000;
}

.arrowTop{
	width: 79px;
	height: 50px;
}

.imagei{
	border-radius: 10px;
	width: 200px;
	height: 200px;
	margin: 10px;
}

.ti{
	margin: 10px;
}

main{
	padding-top: 80px;
}



.buton1{
	width: 20px;
	height: 20px;
	margin: 10px;
}

.buton2{
	width: 20px;
	height: 20px;
	margin: 10px;
}

.buton3{
	width: 20px;
	height: 20px;
	margin: 10px;
}

.buton4{
	width: 20px;
	height: 20px;
	margin: 10px;
}

.buton5{
	width: 20px;
	height: 20px;
	margin: 10px;
}

.buton6{
	width: 20px;
	height: 20px;
	margin: 10px;
}

.buton7{
	width: 20px;
	height: 20px;
	margin: 10px;
}

.buton8{
	width: 20px;
	height: 20px;
	margin: 10px;
}

.buton9{
	width: 20px;
	height: 20px;
	margin: 10px;
}
.ops1{
	margin-left: 10px;
	display: none;
}

.ops1.active{
	display: block;
}

.ops2{
	margin-left: 10px;
	display: none;
}

.ops2.active{
	display: block;
}

.ops3{
	margin-left: 10px;
	display: none;
}

.ops3.active{
	display: block;
}

.ops4{
	margin-left: 10px;
	display: none;
}

.ops4.active{
	display: block;
}

.ops5{
	margin-left: 10px;
	display: none;
}

.ops5.active{
	display: block;
}

.ops6{
	margin-left: 10px;
	display: none;
}

.ops6.active{
	display: block;
}

.ops7{
	margin-left: 10px;
	display: none;
}

.ops7.active{
	display: block;
}

.ops8{
	margin-left: 10px;
	display: none;
}

.ops8.active{
	display: block;
}

.ops9{
	margin-left: 10px;
	display: none;
}

.ops9.active{
	display: block;
}

.ops{
	margin-left: 10px;
	display: none;
}

@media (min-width: 320px) and (max-width: 700px) {
    /*Бургер*/
    .burger-menu {
        display: block;
        position: relative;
        width: 30px;
        height: 20px;
        transition: 0.3s ease;
    }

    .burger-menu::before,
    .burger-menu::after {
        content: ''; /* пустой контент */
        background: black; /*цвет бургера*/
        position: absolute; /* позиция для общего блока*/
        width: 100%; /* ширина*/
        height: 3px; /* толщина полосок бургера */
        transition: 0.3s ease;
    }

    .burger-menu::before {
        top: 0; /* расположение верхней линии бургера */
    }

    .burger-menu span { /*средняя линия в виде span*/
        background: black;
        position: absolute; 
        width: 100%;
        top: 9px;
        height: 3px; 
    }
    .burger-menu::after {
        bottom: 0; /* расположение нижней линии бургера */
    }

    /*Меню*/
    .main-nav {
		  display: none;
		  z-index: 443;
        position: absolute;
        top: 0;
        right: 0;
        width: 50vw;
        height: 50vh;
        background: white;
        border: 1px solid black;
        padding: 20px 10px;
        transform: translateX(100%);
    }

    .nav-list {
        flex-direction: column;
        text-align: right;
    }

    /* active */

    .burger-menu.active {
        z-index: 444;
        transform: translateX(-30vw) translateY(-2vw);
        transition: 0.3s ease;
    }

    .burger-menu.active::before {
        transform: rotate(45deg);
        top: 9px;
        transition: 0.3s ease;
    }
    .burger-menu.active::after {
        transform: rotate(-45deg);
        bottom: 9px;
        transition: 0.3s ease;
    }

    .burger-menu.active span {
        transform: scale(0);
    }

    .main-nav.active {
		 display: block;
       transform: translate(0);
       transition: 0.3s ease;
    }
	 .content-blocker.active{
		display: block;
	}
	
	.katalog{
		display: grid; 
		grid-template-columns: 220px; 
		grid-template-rows: repeat(3, 1fr); 
		grid-column-gap: 20px;
		grid-row-gap: 10px; 
	}

}
ul{
	list-style: none;
}
@media (min-width: 700px) and (max-width: 1800px) {
	.image{
		width: 400px;
		height: 400px;
	}
	.katalog{
	display: grid; 
	grid-template-columns: repeat(3, 1fr); 
	grid-template-rows: repeat(3, 1fr); 
	grid-column-gap: 10px;
	grid-row-gap: 10px; 
}
}
