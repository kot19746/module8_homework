const salons = [
    {
      text: 'President style',
      img: src="./images/President.jpg"
    },
    {
      text: 'Barocco style',
      img: src="./images/Barocco.jpg"
    },
    {
      text: 'Modern style',
      img: src="./images/Modern.jpg"
    },
    {
        text: 'Province style',
        img: src="./images/Provance.jpg"  
    }
  ]
  
  const text = document.querySelector('.text')
  const img = document.querySelector('.image')
 
  const setSalon = (index) => {
    text.innerText = salons[index].text
    img.style.backgroundImage = `url(${salons[index].img})`
  }
  
  const prev = document.querySelector('.prev')
  const next = document.querySelector('.next')
  let currentIndex = 0;
  
  prev.addEventListener('click', () => {
    if (currentIndex === 0) {
      currentIndex = 3;
    } else {
      currentIndex -= 1;
    }
    setSalon(currentIndex);
  })
  
  next.addEventListener('click', () => {
    if (currentIndex === 3) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    setSalon(currentIndex);
  })

  /*Addiction of points*/
   const dots = document.querySelectorAll('.dot');
   
   const activDot = (currentIndex) => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[currentIndex].classList.add('active');
  }
   activDot(currentIndex);

    dot.addEventListener('click', () => {
    if (currentIndex === 3) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    } 
    activDot(currentIndex);
  })
 




 



 






    