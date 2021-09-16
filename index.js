let city;
let count = 0;

const searchedData = []


function setCity(val){
    city = `${val}`;
}

let contentDivEl = document.querySelector('.final-details');




function renderData(){
    contentDivEl.innerHTML = ''
    searchedData.map( cityData => {
        const {city,dt,description,humidity_in_percent,pressure_in_hPa,temp_in_celsius,uid} = cityData;
        const arr = [city,description,temp_in_celsius,pressure_in_hPa,dt];
        const ulEl = document.createElement('ul');
        contentDivEl.appendChild(ulEl);
        ulEl.classList.add("content")
        arr.map((item,index) => {
            let liEl = document.createElement('li');
            if(index === 1) {
                const ipEl = document.createElement('input');
                ipEl.value = item;
                liEl.appendChild(ipEl);
                ipEl.classList.add("content-input");
            }
            else{
                liEl.textContent = item;
            }
            ulEl.appendChild(liEl);
            liEl.classList.add("city-content-data");
        })
        const delEl = document.createElement("li");
        delEl.textContent ="delete";
        ulEl.appendChild(delEl);
        delEl.classList.add("del-item");
        delEl.style.cursor = "pointer";
    })
}




function displayData(data) {
    count = count + 1
    data.uid = count;
    data.city = city;
    searchedData.push(data);
    renderData();
}

const fetchData = async () => {
    const options = {
        method: "GET",
    }
    const url = `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city}`;
    const response = await fetch(url,options)
    const responseData = await response.json()
    const data = {
        dt: responseData.date_and_time,
        description: responseData.description,
        humidity_in_percent: responseData.humidity_in_percent,
        pressure_in_hPa: responseData.pressure_in_hPa,
        temp_in_celsius: responseData.temp_in_celsius
    }
    displayData(data)
}

