document.querySelectorAll('.emoji').forEach(emoji => {
    emoji.addEventListener('click', function () {
        alert(`Спасибо за отзыв: ${emoji.alt}`)
    })
})