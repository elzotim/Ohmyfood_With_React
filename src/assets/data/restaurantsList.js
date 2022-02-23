import { v4 as uuidv4 } from 'uuid';

const restaurantList = [
  {
    name: "La palette du goût",
    city: "Ménilmontant",
    id: 1,
    img: "./imgs/la_palette_du_gout.jpg",
    isNew: true,
  },
  {
    name: "La note enchantée",
    city: "Charonne",
    id: 2,
    img: "./imgs/la_note_enchantee.jpg",
    isNew: true,
  },
  {
    name: "À la française",
    city: "Cité Rouge",
    id: 3,
    img: "./imgs/a_la_francaise.jpg",
    isNew: false,
  },
  {
    name: "Le délice des sens",
    city: "Folie-Méricourt",
    id: 4,
    img: "./imgs/le_delice_des_sens.jpg",
    isNew: false,
  },
];

export default restaurantList
