const cards = document.querySelectorAll('.card')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        if (entry.isIntersecting) return;
    })
}, {
    threshold: .5
})

const lastCardObserver = new IntersectionObserver(entries => {
    const lastCard = entries[0]
    if (!lastCard.isIntersecting) return;
    loadCards()
    lastCardObserver.unobserve(lastCard.target)
    lastCardObserver.observe(document.querySelector('.card:last-child'))
}, {})

lastCardObserver.observe(document.querySelector('.card:last-child'))

cards.forEach(card => {
    observer.observe(card)
})

const cardContainer = document.querySelector('.card-container')

function loadCards() {
    for (let i = 1; i <= 10; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        card.textContent = 'New Card'
        observer.observe(card)
        cardContainer.append(card)
    }
}