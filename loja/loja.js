class Product {
    constructor(title, price, description, category, image, count) {
        this.title = title
        this.price = price
        this.description = description
        this.category = category
        this.image = image
        this.count = count
    }
}





const products = [];
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
        json.forEach(item => {
            const product = new Product(
                item.title,
                item.price,
                item.description,
                item.category,
                item.image,
                item.count
            )
            products.push(product);
        });
        attHtml()
        

    });
function attHtml() {
    const productCard = document.querySelector('.products')
    products.forEach(product => {
        const card = document.createElement('div')  
        card.classList.add('card')
        
        const title = document.createElement('h2')
        title.classList.add('title')
        title.textContent = product.title
        
        const price = document.createElement('p')
        price.classList.add('price')
        price.textContent = product.price
        
        const description = document.createElement('p')
        description.classList.add('description')
        description.textContent = product.description
        
        const category = document.createElement('p')
        category.classList.add('category')
        category.textContent = product.category
        
        const box = document.createElement('div')
        box.classList.add('box__image')

        const image = document.createElement('img')
        image.classList.add('image')
        image.setAttribute('src', product.image)
        
        const count = document.createElement('p')
        count.classList.add('count')
        count.textContent = product.count

        card.appendChild(title)
        card.appendChild(price)
        card.appendChild(description)
        card.appendChild(category)
        card.appendChild(box)
        box.appendChild(image)
        card.appendChild(count)
        productCard.appendChild(card)

    });


}



