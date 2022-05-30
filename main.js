const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll ('.slide');
const dots = document.querySelectorAll ('.dot');

let index = 0;

let timerId = setInterval(() =>{
  nextSlider();
  
  
},2000);

console.log( timerId);

const prepsreCurrentSlide = ind =>{
  activeDot(index)
  activeSlide(index);
}

const activeSlide = n => {
  for(slide of slides){
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

const activeDot = n => {
  for(dot of dots){
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
}

const nextSlider = () =>{
  if(index == slides.length - 1){
    index = 0;
    prepsreCurrentSlide();
  }else{
    index++;
    prepsreCurrentSlide();;
  }
}

const prevSlider = () =>{
  if(index == 0){
    index = slides.length - 1;
    prepsreCurrentSlide();
  }else{
    index--;
    prepsreCurrentSlide();
  }
}

dots.forEach ((item, indexDot) =>{
  item.addEventListener('click', () =>{
    index = indexDot;
    prepsreCurrentSlide();
  })
})



next.addEventListener('click', nextSlider);
prev.addEventListener('click', prevSlider);
