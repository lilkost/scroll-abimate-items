const items = document.querySelectorAll('.item');

const showCard = () => {
    const viewportHeigth = (window.innerHeight / 5) * 4;

    items.forEach(item=> {
        const topItem = item.getBoundingClientRect();
        
        if(topItem.top < viewportHeigth ) {
            item.classList.add('show-item');
        }
        else {
            item.classList.remove('show-item')
        }
    })
}
showCard()

window.addEventListener('scroll', showCard);