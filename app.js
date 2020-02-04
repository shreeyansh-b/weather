
const storage = new Storage;


const weather = new Weather(storage.getLocationData().city, storage.getLocationData().country);
const ui = new UI;

weather.getWeather()
    .then(data => ui.paintUI(data))
    .catch(err => console.log(err));



document.getElementById("w-change-btn").addEventListener("click", () => {
    this.city = document.getElementById("city").value;
    this.country = document.getElementById("state").value;
    storage.setLocationData(this.city, this.country);
    const weather = new Weather(city,country);


    weather.getWeather()
    .then(data => ui.paintUI(data))
    .catch(err => console.log(err));


    $('#locModal').modal('hide');
    });