const handleLoadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json();
    const dataCategories = data.data;
    console.log(dataCategories)
    const container = document.getElementById('container');

    dataCategories.forEach((data) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <button class="btn btn-outline btn-gray">${data.category}</button>
    `
        container.appendChild(div)
    })

}
handleLoadData()