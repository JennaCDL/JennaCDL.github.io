$(document).ready(function () {
    console.log("hello");
    // When the user scrolls the page, execute myFunction 
    window.onscroll = function () {
        myFunction()
    };
    // Get the header
    var header = document.getElementById("main-nav");
    var activate = document.getElementById("home");
    var nav = document.getElementById("nav-items")
    var main = document.getElementById("content")
    var open = document.getElementById("open-menu");
    var close = document.getElementById("close-menu");
    var chevron = document.getElementById("dropdown-chevron")
    var chevronImage = document.getElementById("chevron")
        // Get the offset position of the navbar
    var sticky = header.offsetTop;
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > 50 || window.scrollY > 50) {
            header.classList.add("sticky");
            document.getElementById('logo').setAttribute('aria-hidden', 'false');
            main.classList.add("stuck");
        }
        else {
            header.classList.remove("sticky");
            document.getElementById('logo').setAttribute('aria-hidden', 'true');
            main.classList.remove("stuck");
        }
    }
    $(function () {
        $("#logo").on('click', function () {
            var position = $("#top").offset().top;
            $("HTML, BODY").animate({
                scrollTop: position
            }, 350);
        });
    });
    $(function () {
        $("#open-menu").on('click', function () {
            open.classList.add("hide");
            close.classList.remove("hide");
            activate.style.zIndex = "-1";
            nav.classList.remove("away")
        });
    });
    const closeMenu = () => {
        $("#close-menu").on('click', function () {
            close.classList.add("hide");
            open.classList.remove("hide");
            activate.style.zIndex = "999";
            nav.classList.add("away");
        });
    };
    closeMenu()
    $(".nav-link").on("click", () => {
        close.classList.add("hide");
        open.classList.remove("hide");
        activate.style.zIndex = "999";
        nav.classList.add("away");
    })
    $("#dropdown-chevron").click(function () {
        $("#chevron").toggleClass('chevron-open');
        $('.question-content').addClass('collapse');
    })
    
  
    
    document.querySelectorAll(".fas").forEach(item => {
        item.addEventListener("click", (e) => {

            document.querySelectorAll(".fas").forEach(items => {
                items.classList.remove("fa-minus");
                items.classList.add("fa-plus");
                
            })
            
            const button = e.target
            console.log(button.classList.contains("fa-minus"))
            if(button.getAttribute("data-button")){
                console.log(button)
                button.classList.remove("fa-minus")
                button.removeAttribute("data-button")
                button.classList.add("fa-plus")
            } else {
                button.classList.remove("fa-plus")
                button.classList.add("fa-minus")
                button.setAttribute("data-button", "a")
            }
          
            document.querySelectorAll(".fas").forEach(items => {
                if(items.classList.contains("fa-plus")) {
                    items.removeAttribute("data-button")
                }
            })
        })
    })
    
    
    $(document).ready(function () {
        $('.slider').slick({
            autoplay: true
            , arrows: false
            , dots: true
            , pauseOnFocus: false
            , autoplaySpeed: 4000
            , responsive: [
                {
                    breakpoint: 1024
                    , settings: {
                        slidesToShow: 1
                        , slidesToScroll: 1
                    , }
    }
  ]
        });
    });
    myFunction()
    console.log("goodbye");
});