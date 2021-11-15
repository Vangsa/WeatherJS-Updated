class Weather {
    constructor(city, state){
        this.city = city;
        this.state = state;
    }

    async getWeather(){
        
        const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=$3a33f5d30b5f140cca2d9ef9e0062b11`);
        const responseData = await response.json();

        return responseData;
    }

    changeLocation(city, state){
        this.city = city;
        this.state = state;
        
    }
}