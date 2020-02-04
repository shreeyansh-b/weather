class Weather{
    constructor(city, country = "IN"){
        this.key = "3840ac97c792f8e4ccefe818031d86cd";
        this.city = city;
        this.country = country;
    }
    async getWeather(){
        const responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.key}&units=metric`);

        const weatherData = await responseWeather.json();

        return weatherData;
    }
}