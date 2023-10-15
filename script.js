const handleLoadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json();
    const dataCategories = data.data;
    console.log(dataCategories)
    const container = document.getElementById('container');

    dataCategories.forEach((data) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <button onclick="btnHandle('${data.category_id}')" class="btn btn-outline btn-gray">${data?.category || 'no data'}</button>
    `;
        container.appendChild(div);
    })

}

const btnHandle = async (categoryId) => {
    console.log(categoryId)
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json();
    const loadData = data.data;
    console.log(loadData)
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = '';
    loadData.forEach((data) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card bg-base-100 shadow-xl h-96">
        <figure><img class="h-56 rounded-lg"  src="${data?.thumbnail}" alt="Shoes" /></figure>
        <div class="absolute bg-black text-white right-0 top-48 rounded px-5 right-2">
        <p>${data?.others?.posted_date / 60 || ''}</p >
        </div >
    <div class="flex gap-5 my-5 ps-2">
        <img class="w-16 h-16 rounded-full" src="${data?.authors[0]?.profile_picture}" alt="Shoes" alt="">
            <div>
                <p>${data.title}</p>
                <p>${data?.authors[0]?.profile_name} ${data?.authors[0]?.verified || ''}</p>
                <p>${data?.others?.views}</p>
            </div>
    </div>
    </div >
    `;
        cardContainer.appendChild(div);
    })
}
handleLoadData()