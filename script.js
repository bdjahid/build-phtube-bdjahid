const handleLoadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json();
    const dataCategories = data.data;
    // console.log(dataCategories)
    const container = document.getElementById('container');

    dataCategories.forEach((data) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <button onclick="btnHandle('${data.category_id}')" class="btn btn-outline btn-gray">${data?.category}</button>
    `;
        container.appendChild(div);
    })

}

const btnHandle = async (categoryId) => {
    // console.log(categoryId)
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    console.log(res)
    const data = await res.json();
    const loadData = data.data;
    console.log(loadData)
    const cardContainer = document.getElementById('card-container')

    cardContainer.innerHTML = '';
    if (loadData.length === 0) {
        cardContainer.innerHTML = ` 
        <div class="bg-fuchsia-900 w-96 text-white text-center">
       <div class="flex justify-center"> <img src="Icon.png"/></div>
        <h1 class="">Oops!! Sorry, There is no content here</h1>
        </div>
        `;
    }

    loadData.forEach((data) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card bg-base-100 shadow-xl w-full h-96">
        <figure><img class="h-56 rounded-lg"  src="${data?.thumbnail}" alt="Shoes" /></figure>
        <div class="absolute bg-black text-white right-0 top-48 rounded px-5 right-2">
        <p>${secondsToMinutesAndHours(data?.others?.posted_date)}</p>
        </div >
    <div class="flex gap-5 my-5 ps-2">
        <img class="w-16 h-16 rounded-full" src="${data?.authors[0]?.profile_picture}" alt="Shoes" alt="">
            <div>
                <p>${data.title}</p>
                <p>${data?.authors[0]?.profile_name} ${data?.authors[0]?.verified ? ' <i class="fa-regular fa-circle-check bg-blue-500 rounded-full text-white"></i>' : ''}</p>
                <p>${data?.others?.views}</p>
            </div>
    </div>
    </div >
    `;
        cardContainer.appendChild(div);
    })
}

function secondsToMinutesAndHours(posted_date) {
    const hours = Math.floor(posted_date / (60 * 60));
    const divisor_for_minutes = posted_date % (60 * 60);
    const minutes = Math.floor(divisor_for_minutes / 60);
    const object = {
        hours,
        minutes,
    }; return ` ${object.hours}hrs ${object.minutes}mins ago`;
}
console.log(secondsToMinutesAndHours(16278))

const handleBtn = () => {
    const sort = document.getElementById('sort')
    const div = document.createElement('div');
    div.innerHTML = `<button onclick="handleBtnSort()" class="btn btn-ghost normal-case text-xl">Sort by
    view</button > `
    sort.appendChild(div)
}
handleBtn()

const handleBtnSort = (categoryId) => {
    console.log(categoryId)
}
handleBtnSort()
handleLoadData()