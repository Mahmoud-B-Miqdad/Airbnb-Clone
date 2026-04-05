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