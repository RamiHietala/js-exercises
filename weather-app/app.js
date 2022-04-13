let weather = {
    apiKey:"e5268df1b2d792ad2a9cd4378a1cad40",
    fetchWeather: () => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=vantaa&units=metric&appid=e5268df1b2d792ad2a9cd4378a1cad40")
            .then((response) => response.json())
            .then((data) => console.log(data))
    },
}