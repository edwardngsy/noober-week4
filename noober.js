window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  // 🔥 select element to modify
  let pagemodifyelement = document.querySelector (`.rides`)

  // 🔥 Empty rides div element
  pagemodifyelement.innerHTML = ``

  // 🔥 looping data through the template to print to html
for (let i=0; i < json.length; i++) {
  // 🔥 using conditionals to check service level
    if (json[i].purpleRequested == 1) {
      servicelevel = `Noober Purple`
    } else if (json[i].purpleRequested ==0 && json[i].numberOfPassengers > 3) {
    servicelevel = `Noober XL` 
    } else if (json[i].purpleRequested ==0 && json[i].numberOfPassengers <= 3) {
    servicelevel = `Noober X`
    }

  // 🔥 use insert adjacent html to insert riders data


    pagemodifyelement.insertAdjacentHTML(
      `afterbegin`,
      `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span> ${servicelevel} </span>
      </h1>
  
       <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${json[i].passengerDetails.first} ${json[i].passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">(312) 555-1212</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
              ${json[i].numberOfPassengers}
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p> ${json[i].pickupLocation.address}</p>
              <p>${json[i].pickupLocation.city} ${json[i].pickupLocation.state} ${json[i].pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${json[i].dropoffLocation.address}</p>
              <p>${json[i].dropoffLocation.city} ${json[i].dropoffLocation.state} ${json[i].dropoffLocation.zip} </p>
            </div>
          </div>
        </div>
    `
    );}
  })