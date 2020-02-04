class UI{

    paintUI(data){
        const temp = data.main.temp;
        const feels_like = data.main.feels_like;
        const wind = data.wind.speed;
        const humidity = data.main.humidity;
        const location = data.name;
        const desc = data.weather[0].main;
        const press = data.main.pressure;

        //document constants
        
        const locat = document.getElementById("w-location");
        const des = document.getElementById("w-desc");
        const humid = document.getElementById("w-humidity");
        const dew = document.getElementById("w-dewpoint");
        const string = document.getElementById("w-string");
        const feels = document.getElementById("w-feels-like");
        const windd = document.getElementById("w-wind");
        //const location = document.getElementById("w-location");

        locat.textContent = location;
        des.textContent = desc;
        humid.textContent = `Humidity: ${humidity}%`;
        feels.textContent = `Feels like ${feels_like.toFixed(1)}°C`;
        windd.textContent = `Wind: ${wind}kmph`;
        dew.textContent = `Pressure: ${press} Pa`;
        string.textContent = `Temperature: ${temp.toFixed(0)}°C`;
    }

    updateLocation(){
        this.city = document.getElementById("city").value;
        this.country = document.getElementById("state");
        const weather = new Weather(this.city, this.country);
    }
}