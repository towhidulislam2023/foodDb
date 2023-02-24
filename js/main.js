const loadData = (name) => {
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
        .then(rep => rep.json())
    .then(data=>displayData(data.meals))
}

function displayData(allFood) {
    const targetSec = document.getElementById('foodContainer');
    targetSec.innerHTML = '';
    const newPost = allFood.slice(0, -1);
    // console.log(newPost);

    // console.log(allFood, typeof allFood);
    for (const food of newPost) {
        console.log(food.idMeal);
        const div = document.createElement('div');
        div.classList = 'card card-side bg-base-100 border-2 w-[80%] flex flex-col md:flex-row mx-auto';
        div.innerHTML = `
        <figure><img class="rounded-xl md:ml-1 w-full h-full md:h-max" src="${food.strMealThumb}" alt="Movie"/></figure>
        <div class="card-body">
          <h2 class="card-title font-bold">${food.strMeal}</h2>
          <p>There are many variations of passages of available, but the majority have suffered</p>
          <a href="${food.strYoutube}" class="text-yellow-400 underline hover:text-yellow-700" target="blank">Watch Video</a>
         
          <label for="my-modal-6" onClick="forModalBTN(${food.idMeal})" class="btn bg-yellow-500 border-none text-black w-32 hover:bg-yellow-400 ">View Details</label>
        </div>
        `
        targetSec.appendChild(div)
        // <button class="btn bg-yellow-500 border-none text-black w-32 hover:bg-yellow-400"></button>
    }
}

const forModalBTN = id => {
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(rep => rep.json())
    .then (data=>displayDataINModal(data.meals))
}
const displayDataINModal = data => {
    const targetdiv = document.getElementById('mymdl')
    targetdiv.innerHTML = ' ';
    for (const food of data) {
        console.log(food);
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="modal-box">
        <img src="${food.strMealThumb}" class="w-fit rounded-lg" alt="">
              <h3 class="font-bold my-6 text-lg">${food.strMeal}</h3>
              <p class="py-4">${food.strInstructions }</p>
              <a href="${food.strYoutube}" class=" my-6 text-yellow-400 underline hover:text-yellow-700" target="blank">Watch Video</a>
              <div class="modal-action">
                <label for="my-modal-6" class="btn bg-yellow-400 text-black border-none hover:bg-yellow-700">close</label>
              </div>
            </div>


        // `
    targetdiv.appendChild(div)
   }
    
}





document.getElementById('searchBtn').addEventListener('click', function () {
    const inputValue = document.getElementById('inputFeildValue')
    const inputFeildValue = inputValue.value;
    loadData(inputFeildValue);
    inputValue.value = '';

    
})
loadData('chicken');

// loadData('fish')




// show more btn

