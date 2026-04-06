function sharePlace(event) {
    event.preventDefault();
    let title = document.querySelector('.place_title').innerText;
    let url = window.location.href;
    let message = encodeURIComponent("Check out this amazing place: " + title + " " + url);
    document.getElementById('whatsappLink').href = "https://wa.me/?text=" + message;
    document.getElementById('facebookLink').href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
    document.getElementById('shareModal').style.display = "block";
}
function closeShare() {
    document.getElementById('shareModal').style.display = "none";
}
function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
    closeShare();
}
window.onclick = function(event) {
    var modal = document.getElementById('shareModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function savePlace(event) {
    event.preventDefault();

    const heart = document.getElementById('heart-icon');

    if (heart.style.color === 'red') {
        heart.style.color = ''; 
    } else {
        heart.style.color = 'red'; 
        const allImages = document.querySelectorAll('.picture_list img');

        allImages.forEach((img, index) => {
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = img.src;
                link.download = `Apartment_Image_${index + 1}.jpg`; 
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }, index * 250);  
        });
    }
}

let small_image = document.querySelectorAll('.small-img');
let mainImg = document.querySelector('.big_picture');
let originalSrc = mainImg.src;
// small_image.forEach(img => {
//     img.onclick = () => {
//         if (mainImg.src === img.src) {
//             mainImg.src = originalSrc;
//         } else {
//             mainImg.src = img.src;
//         }
//     };
// });
small_image.forEach(img => {
    img.onclick = () => {
        mainImg.src = img.src;  
    };
});
mainImg.onclick = () => {
    mainImg.src = originalSrc;
};

let reserveBtn = document.querySelector('.reserve');
let isReserved = false; 
reserveBtn.onclick = () => {
    if (!isReserved) {
        reserveBtn.innerText = "Checking...";
        reserveBtn.style.cursor = "not-allowed";

        setTimeout(() => {
            reserveBtn.innerText = "Cancel Reservation ?";     
            reserveBtn.style.cursor = "pointer"; 
            isReserved = true;  
            alert("Reserved! Click again if you want to cancel.");
        }, 1500);

    } else {
        reserveBtn.innerText = "Cancelling...";
        setTimeout(() => {
            reserveBtn.innerText = "Reserve"; 
            isReserved = false; 
            alert("Reservation cancelled.");
        }, 1000);
    }
};
let reviewsLink = document.querySelector('.total_review');
reviewsLink.style.cursor = 'pointer';
reviewsLink.onclick = () => {
    let section = document.querySelector('.comments');
    if(section) {
        section.scrollIntoView({ 
            behavior: 'smooth' 
        });
    } else {
        alert("Section not found, but scroll event triggered!");
    }
};

let leafBox = document.querySelector('.leaf');
leafBox.onmouseenter = () => {
    let tooltip = document.createElement('div');
    tooltip.className = 'custom-tooltip';
    tooltip.innerText = "Top 5% of homes based on ratings and reliability";
    tooltip.style.cssText = `
        position: absolute;
        background: #222;
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        top: -40px;
        z-index: 100;
        white-space: nowrap;
    `;
    leafBox.style.position = 'relative';
    leafBox.appendChild(tooltip);
};
leafBox.onmouseleave = () => {
    let tooltip = document.querySelector('.custom-tooltip');
    if (tooltip) tooltip.remove();
};


let allStars = document.querySelectorAll('.star i');
allStars.forEach(star => {
    star.onmouseenter = () => {
        star.style.transform = 'scale(1.1)';
        star.style.transition = '0.2s ease';
        star.style.cursor = 'pointer';
    };
    star.onmouseleave = () => {
        star.style.color = '#FFD700';
        star.style.transform = 'scale(1)';
    };
});