window.onload = function () {
    
    var slider1 = new Slider({
        images: '.gallery-1 img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: false
    });

    var slider2 = new Slider({
        images: '.gallery-2 img',
        auto: true
    });
    
}

function Slider(obj) {
    this.images = document.querySelectorAll(obj.images);
    this.btnPrev = document.querySelector(obj.btnPrev) || null;
    this.btnNext = document.querySelector(obj.btnNext) || null;
    this.auto = obj.auto || null;
    
    this.prev;
    this.next;
    this.carusel;
    
    var i = 0;
    var images = this.images;

    this.prev = function () {
            images[i].classList.remove('showed');
            i--;

            if (i < 0) {
                i = images.length - 1;
            }

            images[i].classList.add('showed');

    }

    this.next = function () {
        images[i].classList.remove('showed');
        i++;

        if (i >= images.length) {
            i = 0;
        }

        images[i].classList.add('showed');
    }

    if (this.btnPrev) {
        this.btnPrev.addEventListener('click', this.prev);
    }

    if (this.btnNext) {
        this.btnNext.addEventListener('click', this.next);
    }

    if (this.auto) {
        setInterval(this.next, 5000);
    }
}

