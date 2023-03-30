const allImages = document.querySelectorAll('img[data-src]')

const lazyLoadImage = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    console.log(entry)
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', () => {
      entry.target.classList.remove('lazy-load')
    })
    observer.unobserve(entry.target)
  });
}

const lazyLoadObserver = new IntersectionObserver(lazyLoadImage, { threshold: .9 })

allImages.forEach(image => {
  lazyLoadObserver.observe(image)
})