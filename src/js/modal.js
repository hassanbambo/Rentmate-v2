document.addEventListener('DOMContentLoaded', function () {

    const gallery = document.querySelectorAll('.listing-gallery img');
    const modal = document.getElementById('modal');

    const closeBtn = document.querySelector('span.close');
    // const displayed = document.querySelectorAll('div.shown>img');
    const display = document.querySelectorAll('div.shown');
    const nextBtn= document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    




    let slideIndex = 0;

    display.forEach((img, index) => {
        img.addEventListener('click', ()=> {
            modal.style.display = 'block';
            slideIndex = index;
            showSlides();

        });
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    nextBtn.onclick = function() {
        if (slideIndex < gallery.length - 1) {
            slideIndex++;
            showSlides();
        }
    }

    prevBtn.onclick = function() {
        if (slideIndex > 0) {
            slideIndex--;
            showSlides();
        }
    }

    function showSlides() {
        const viewImage = document.querySelector('.slides img');

        viewImage.src = gallery[slideIndex].src;
    }
    


});