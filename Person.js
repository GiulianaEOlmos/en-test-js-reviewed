//Needs Correcting: This class is not being used as a component. For this class to be used as a component, it should extend the Component class and implement the template getter. This ensures that the class can be used to create elements that can be rendered on the page. Another option is create another class to extend Person.
class Person extends Component {
  constructor(name) {
    super();
    this.name = name;
    this._happiness = 0;
    this._valueElement = document.querySelector(`.column__value-name`);
    this._iconElement = document.querySelector(`.column__value-icon`);
  }

  hasCat() {
    return this._happiness++;
  }

  hasRest() {
    return this._happiness++;
  }

  hasMoney() {
    return this._happiness++;
  }

  isSunny() {
    // Needs correcting: The API key should be stored in a separate file and imported into the file where it is used. This is a good practice to prevent the API key from being exposed in the codebase. A package that you can use is dotenv. You can read more about env variables in  https://www.freecodecamp.org/news/how-to-use-node-environment-variables-with-a-dotenv-file-for-node-js-and-npm/ */
    const APIKey = "28c7d687accc7c75aabbc7fb71173feb";
    // Needs correcting: The city should be passed as an argument to the function, rather than being hardcoded. This makes the function more flexible and reusable. */
    const city = "Moscow";
    const url =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      APIKey;

    return (
      fetch(url)
        // Needs improvement: The first .then statement is converting the response to JSON, but it doesn’t seem to be adding much to the logic here. To keep the code neat and easy to follow, you might want to remove this extra step if it’s not needed.
        .then((res) => res.json())
        .then((res) => {
          console.log(this._happiness);
          // Needs correcting: The temperature should be converted to Celsius before being compared. The temperature is returned in Kelvin by default. Also if a constant variable is necessary you could declare by apart to reuse it. This will make it easy to update in the future */
          if (res.main.temp - 273 > 15) {
            return this._happiness++;
          }
        })
    );
    //Needs correcting: The catch block should be added to handle any errors that occur during the fetch request. This ensures that the application does not break if an error occurs. */
  }
}
