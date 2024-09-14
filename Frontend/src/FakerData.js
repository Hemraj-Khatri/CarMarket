import { faker } from "@faker-js/faker";
function FakerData() {
  return {
    name: faker.vehicle.vehicle(),
    fueType: faker.vehicle.fuel(),
    type: faker.vehicle.type(),
    model: faker.vehicle.model(),
    image:
      "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?cs=srgb&dl=pexels-mikebirdy-3729464.jpg&fm=jpg",
    miles: 4000,
    gearType: "Automatic",
    price: faker.finance.amount({ min: 3000, max: 80000 }),
  };
}
const carList = faker.helpers.multiple(FakerData, {
  count: 8,
});
export default { carList };
