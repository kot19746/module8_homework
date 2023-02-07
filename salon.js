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

  let dots = document.querySelectorAll('.dot');
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
    dots[currentIndex].classList.add("active");
    dots[currentIndex + 1].classList.remove("active")
  })
 
  next.addEventListener('click', () => {
    if (currentIndex === 3) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    setSalon(currentIndex);
    dots[currentIndex].classList.add("active");
    dots[currentIndex - 1].classList.remove("active")
  })




 



 






    
