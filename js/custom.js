
  /* ------------------------------------------------------------------
  ------------ Menu button slide animation and collapse menu ------------
  --------------------------------------------------------------------- */
  
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.collapsible-menu');
    const menuItem = menu.querySelectorAll('li');

    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            menu.style.display = "flex";
            menu.classList.add('collapsed');
            let time = 500;
            for(let i = 0; i < menuItem.length; i++) {
                setTimeout(function(){menuItem[i].classList.add('visible'); }, time);
                time += 100;
            }     
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            menu.style.display = "none";
            for(let i = 0; i < menuItem.length; i++) {
                menuItem[i].classList.remove('visible');
             }  
            menu.classList.remove('collapsed');
            menuOpen = false;
        }
    });


    /* ------------------------------------------------------------------
    ----------------------- Initialize hero slick carousel -------------------
    --------------------------------------------------------------------- */
  
  
    $(document).ready(function(){
        $('.hero-slider').slick( {
            slidesToShow: 1,
            dots: true,
            arrows: true,
            appendDots: $('.dots-container-bottom'),
            prevArrow: $('.left-side-arrow'),
            nextArrow: $('.right-side-arrow')
        });
    });
  


    /* ------------------------------------------------------------------
    --------------- Initialize featured products slick carousel ---------
    --------------------------------------------------------------------- */
  
  
    $(document).ready(function(){
        $('.featured-products-slider').slick( {
            slidesToShow: 1,
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 3,
            appendDots: $('.dots'),
            prevArrow: $('.left'),
            nextArrow: $('.right'),
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 775,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                    breakpoint: 450,
                    settings: {
                      slidesToShow: 1
                    }
                  }
              ]
        });
    });


     /* ------------------------------------------------------------------
    -------------------------- Initialize active class -------------------
    --------------------------------------------------------------------- */
  
  
    const navBar = document.querySelector('nav');
    const listItems = navBar.querySelectorAll('li');

    for(let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', () => {
            for(let j = 0; j < listItems.length; j++)
            listItems[j].classList.remove('active');
        listItems[i].classList.add('active');
        });
    }


    /* ------------------------------------------------------------------
    -------------------------- Language menu -------------------
    --------------------------------------------------------------------- */

    let langMenuOpened = false;

    openLangMenu = () => {
        const langMenu = document.querySelector('.lang-menu');

        if(!langMenuOpened) {
            langMenu.style.display = "block";
            langMenuOpened = true;
        } else {
            langMenu.style.display = "none";
            langMenuOpened = false;
        }    
    }

    replaceLang = (lang) => {
        let currentLang = document.querySelector('.current');

        if(lang == 1) {
            currentLang.innerHTML = `
                <img src="./flaticon/images/uk.png" alt="English" onclick="replaceLang(1)"> 
                <p class="ml-2">English</p>`;
        } else if(lang == 2) {
            currentLang.innerHTML = `
                <img src="./flaticon/images/france.png" alt="Francais" onclick="replaceLang(2)">
                <p class="ml-2">Francais</p>`;
        } else if(lang == 3) {
            currentLang.innerHTML = `
                <img src="./flaticon/images/germany.png" alt="Deutsch" onclick="replaceLang(3)">
                <p class="ml-2">Deutsch</p>`;
        } else if(lang == 4) {
            currentLang.innerHTML = `
                <img src="./flaticon/images/italy.png" alt="Italian" onclick="replaceLang(4)">
                <p class="ml-2">Italian</p>`;
        }
    }


     /* ------------------------------------------------------------------
    ------------------------------- WOW Initiate -------------------------
    --------------------------------------------------------------------- */


    new WOW().init();

    