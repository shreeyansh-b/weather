class Storage{
    constructor(){
        this.city;
        this.country;
        this.defaultCity = "delhi";
        this.defaultCountry = "in";
    }

    getLocationData(){
        if(localStorage.getItem("city") === null){
            this.city = this.defaultCity;
        }else{
            this.city = localStorage.getItem("city");
        }
        if(localStorage.getItem("country") === null){
            this.country = this.defaultCountry;
        }else{
            this.country = localStorage.getItem("country");
        }

        return{
            city: this.city,
            country: this.country
        }
    }

    setLocationData(city, country){
        localStorage.setItem("city", city); //no json stringify cause they're already string
        localStorage.setItem("country", country);
    }
}