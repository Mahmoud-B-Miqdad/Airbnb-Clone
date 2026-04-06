const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const sliders = document.querySelectorAll('.slider');
const toggleFav = document.querySelector('.togglefav');
const pins = document.querySelectorAll('.pin');
const currency = document.querySelectorAll('.value')
const searchInput = document.querySelector('.search-input');
const links = document.querySelectorAll('.link');
const cards = document.querySelectorAll('.card');
const map = document.querySelector('.map');

function sliderInit() {
    for (let i = 0; i < sliders.length; i++) {
        let slides = sliders[i].querySelectorAll('.slide');
        for (let j = 0; j < slides.length; j++) {
            slides[j].style.display = 'none';
        }
        slides[0].style.display = 'block'
    }

}
sliderInit()

function changeSlide(btn, step) {
    let slides = btn.parentElement.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].style.display === 'block') {
            slides[i].style.display = 'none';
            let newIndex = i + step;
            if (newIndex >= slides.length) {
                newIndex = 0;
            }
            if (newIndex < 0) {
                newIndex = slides.length - 1;
            }
            slides[newIndex].style.display = 'block';
            break;
        }
    }
}

function addToFav(btn) {
    const isFav = btn.classList.toggle('active');
    if (isFav) {
        btn.style.color = 'red';
        toggleFav.textContent = 'Added to favorites';
    } else {
        btn.style.color = 'white';
        toggleFav.textContent = 'Removed from favorites';
    }
    toggleFav.style.display = 'block';
    setTimeout(() => {
        toggleFav.style.display = 'none';
    }, 2000);

}

function highlight(pin) {
    const cardId = pin.getAttribute('data-card');
    const card = document.getElementById(cardId);
    card.classList.add('highlight');
}

function removeHighlight(pin) {
    const cardId = pin.getAttribute('data-card');
    const card = document.getElementById(cardId);
    card.classList.remove('highlight');
}
let isUSD = true;
function USDToIls(elm) {
    for (let i = 0; i < currency.length; i++) {
        let usd = parseInt(currency[i].getAttribute('data-usd'));
        if (isUSD) {
            elm.innerText = '₪ ILS'
            currency[i].innerText = Math.round(usd * 3.5) + '₪'

        } else {
            elm.innerText = '$ USD'
            currency[i].innerText = '$' + usd
        }
    }
    isUSD = !isUSD;


}

function searchToggle() {
    for (let i = 0; i < links.length; i++) {
        links[i].style.display = 'none';
    }
    searchInput.style.display = 'block';
    searchInput.focus();
}
function search(elm) {
    const value = elm.value.toLowerCase();
    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].querySelector('.title h3').innerText.toLowerCase();
        if (title.includes(value)) {
            cards[i].style.display = 'block';
        } else {
            cards[i].style.display = 'none';
        }
    }
    map.style.display = 'none';
}

function resetSearch() {
    for (let i = 0; i < links.length; i++) {
        links[i].style.display = 'block';
    }
    searchInput.style.display = 'none';
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'block';
    }
    map.style.display = 'block';
    searchInput.value = '';
}