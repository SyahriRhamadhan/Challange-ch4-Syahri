class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.searchButton = document.getElementById("search-btn");
    this.carContainerElement = document.getElementById("cars-container");
    //this.searchButton = document.getElementById("search-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.tanggal = document.getElementById("Input-tgl");
    this.inputPenumpang = document.getElementById("Input-Penumpang");
    this.waktuJemput = document.getElementById("waktu-jemput");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.searchButton.onclick = this.run;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}

// class App {
//   constructor() {
//     this.searchButton = document.getElementById("search-btn");
//     this.carContainerElement = document.getElementById("cars-container");
//     this.tanggal = document.getElementById("Input-tgl");
//     this.inputPenumpang = document.getElementById("Input-Penumpang");
//     this.waktuJemput = document.getElementById("waktu-jemput");
//   }

//   async init() {
//     await this.load();
//     this.searchButton.onclick = this.run;
//   }

//   run = () => {
//     let dateTime = new Date(`${this.tanggal.value} ${this.waktuJemput.value}`);
//     onsole.log(dateTime);
//     let cards = "";

//     Car.list
//     .filter((car) => car.capacity > this.inputPenumpang.value && new Date(car.availableAt) > dateTime)
//     .forEach((car) =>{
//       cards += car.render();
//       this.carContainerElement.innerHTML = cards;
//     });
//   };

//   async load() {
//     const cars = await Binar.listCars();
//     Car.init(cars);
//   }
// }






