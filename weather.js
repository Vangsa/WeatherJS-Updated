class Weather {
    constructor(city, state){
        this.apiKey = '3a33f5d30b5f140cca2d9ef9e0062b11';
        this.city = city;
        this.state = state;
    }

    // Fetch Weather from API. Using OpenWeatherMap instead of Brad's Weather Underground,
    // as Weather Underground no longer give out free API keys for personal use.

    async getWeather(){
        
        const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);
        const responseData = await response.json();

        return responseData;
    }

    changeLocation(city, state){
        this.city = city;
        this.state = state;
        
    }
}