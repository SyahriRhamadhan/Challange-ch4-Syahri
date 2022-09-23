class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="car-card card">
        <img src="${this.image}" alt="${this.manufacture}" style="max-height: 160px"></br>
        <p class="fw-bold mt-1"><b>${this.manufacture}/${this.model}</b></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p><i class="bi bi-people"></i> ${this.capacity} Orang</p>
        <p><i class="bi bi-gear"></i> ${this.transmission}</p>
        <p><i class="bi bi-calendar2"></i> Tahun ${this.year}</p>
        <button class="btn-green border-0 mb-4">Pilih Mobil</button>
      </div>
    `;
  }
}
