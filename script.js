document.querySelectorAll('.emoji').forEach(emoji => {
    emoji.addEventListener('click', function () {
        alert(`Спасибо за отзыв: ${emoji.alt}`)
    })
})

document.getElementById('email-form').addEventListener('submit', function (event) {
    event.preventDefault();
    this.reset();
})