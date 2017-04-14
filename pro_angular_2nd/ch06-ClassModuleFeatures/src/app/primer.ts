class MyClass {
  private name: string;
  private _weather: string;

  constructor(name, weather) {
    this.name = name;
    this._weather = weather;
  }

  set weather(value) {
    this._weather = value;
  }

  get weather() {
    return `Today is ${this._weather}`;
  }

  printMessages() {
    console.log("Hello " + this.name + ". ");
    console.log(this.weather);
  }
}

class MySubClass extends MyClass {
  private city: string;

  constructor(name, weather, city) {
    super(name, weather);
    this.city = city;
  }

  printMessages() {
    super.printMessages();
    console.log(`You are in ${this.city}`);
  }
}
let myData = new MySubClass("Adam", "sunny", "London");
myData.printMessages();


import { TempConverter } from "./tempConverter";

let cities: { [index: string]: [string, string] } = {};

cities["London"] = ["raining", TempConverter.convertFtoC("38")];
cities["Paris"] = ["sunny", TempConverter.convertFtoC("52")];
cities["Berlin"] = ["snowing", TempConverter.convertFtoC("23")];

for (let key in cities) {
  console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
}
