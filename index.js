let city;
let count = 0;

const searchedData = []


function setCity(val){
    city = `${val}`;
}

let contentDivEl = document.querySelector('.final-details');

function displayData(data) {
    const {dt,description,humidity_in_percent,pressure_in_hPa,temp_in_celsius} = data;
    const arr = [city,description,temp_in_celsius,pressure_in_hPa,dt]
    count = count + 1
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
    data.uid = count;
    searchedData.push(data);
    console.log(searchedData);
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

