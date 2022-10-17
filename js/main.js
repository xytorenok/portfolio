const body = document.querySelector('body')
const btnChangeTheme = document.querySelector('.btn-toggle-theme')
const myPhoto = document.querySelector('.hero-img')
const myName = document.querySelector('.hero__title')
const iAm = document.querySelector('.hero-title-hello')
const heroTopBlock = document.querySelector('.hero__top-block')
const myProfession = document.querySelector('.hero-profession')
const myDescription = document.querySelector('.hero-description')
const myProfessionSecond = document.getElementById("hero-profession-2")
const myDescriptionSecond = document.getElementById("hero-description-2")



const interactiveScale = document.querySelectorAll(".interactive-block")

//кнопка смены темы
btnChangeTheme.addEventListener('click', function () {
  //Логика кнопки такова: 
  // 1.Если body НЕ содержит классы bg-green bg-blue, мы добавляем класс bg-green и white-text для нужных элементов
  // 2.Если body содержит класс bg-green, мы добавляем класс bg-blue и удаляем класс bg-green
  // 3.Если body содержит класс bg-blue, мы удаляем класс bg-blue и тема возвращается в первое цветовое решение
  if (!body.classList.contains('bg-green') && !body.classList.contains('bg-blue')) {
    body.classList.add('bg-green')
    document.documentElement.style.setProperty('--color-main', '#FFFFFF');
    document.documentElement.style.setProperty('--color-title', '#F79C00');
  } else if (body.classList.contains('bg-green')) {
    body.classList.add('bg-blue')
    body.classList.remove('bg-green')
    document.documentElement.style.setProperty('--color-title', '#FEEC48');
  } else if (body.classList.contains('bg-blue')) {
    body.classList.remove('bg-blue')
    myName.classList.remove('white-text')
    document.documentElement.style.setProperty('--color-main', '#EBE3CE');
    document.documentElement.style.setProperty('--color-title', '#EAC566');
    console.log('remove body classes');
  }


})

// --------------------------оптимизировать этот код в будующем. ---------------
myProfession.addEventListener('click', function () {
  console.log('ssss');
  myProfession.classList.toggle('active')
  myProfessionSecond.classList.toggle('active')
  myDescription.classList.toggle('active')
  myDescriptionSecond.classList.toggle('active')
})

myProfessionSecond.addEventListener('click', function () {
  console.log('ssss');
  myProfession.classList.toggle('active')
  myProfessionSecond.classList.toggle('active')
  myDescription.classList.toggle('active')
  myDescriptionSecond.classList.toggle('active')
})

// --------------------------оптимизировать этот код в будующем. ---------------

const addClass = setTimeout(() => {
  myPhoto.classList.add('moved')
  myName.classList.add('moved')
  iAm.classList.add('disappeared')
  heroTopBlock.classList.add('centered')
  myDescription.classList.add('disappeared')

}, 1000)


const removeCLass = setTimeout(() => {
  myPhoto.classList.remove('moved')
  myName.classList.remove('moved')
  iAm.classList.remove('disappeared')
  heroTopBlock.classList.remove('centered')

}, 3500)

const removeCLassDescription = setTimeout(() => {
  myDescription.classList.remove('disappeared')

}, 3750)


const changeCLassActive = setTimeout(() => {
  if (myProfession.classList.contains('active')) {
    myProfession.classList.toggle('active')
    myProfessionSecond.classList.toggle('active')
    myDescription.classList.toggle('active')
    myDescriptionSecond.classList.toggle('active')
  }

}, 5500)

$(document).ready(function () {
  $(".photoshoper-slider").slick({
    infinity: true,
    autoplay: true,
    autoplaySpeed: 1100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });

  $(".my-benefits-slider").slick({
    infinity: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });

  $('.super-team-slider').slick({
    infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  })
});

// интерактивный блок
interactiveScale.forEach(element => {
  element.addEventListener("click", function () {
    element.classList.remove("scale")
    this.classList.add("scale")
    

  })
});



// for(let i = 1; i < 100; ){
//     console.log(i);
//     continue;
//   }
//   for(let i = 1; ; i++){
//     console.log(i);
//     continue;
//   }