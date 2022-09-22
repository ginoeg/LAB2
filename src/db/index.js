import { get } from "express/lib/response";
import { product } from "../components";

/* METODOS PARA USUARIO*/
const data = [
  {
    id:1,
    name: "Pepe",
    last_name: "Perez",
  },
  {
    id:2,
    name:"Gino",
    last_name:"Eguia"
  }
];


// Lista todo
export const findAll = () => {
  return data;
};

// Buscar por id
export const findOne = (id) => {
  return data.find((u) => u.id === Number(id));
};

// crear
export const store = (user) => {
  const [ultimo]= data.slice(-1)
  const contador=Number(ultimo.id);
  user.id = contador+1;
  data.push(user);
};

// update
export const update = (id, user) => {
  const index = data.findIndex((u) => u.id === Number(id));

  data[index] = {
    ...data[index],
    ...user,
  };
};

export const remove = (id) => {
  const users = data.filter((u) => u.id !== Number(id));
  data.length = 0;
  data.push(...users);
};



/* METODOS PARA PRODUCTOS */

const pro = [
  {
    id:1,
    name: "Iphone",
    price: 3900,
  },
];

// Listar productos
export const findAllPro = () => {
  return pro;
};

// Buscar producto por id
export const findOnePro = (id) => {
  return pro.find((u) => u.id === Number(id));
};

// Registrar producto
export const storePro = (product) => {
  const [ultimo]= pro.slice(-1)
  const contador=Number(ultimo.id);
  pro.id = contador+1;
  pro.push(product);
};

// UPDATE
export const updatePro = (id, product) => {
  const index = pro.findIndex((u) => u.id === Number(id));

  pro[index] = {
    ...pro[index],
    ...product,
  };
};

export const removePro = (id) => {
  const products = pro.filter((u) => u.id !== Number(id));
  pro.length = 0;
  pro.push(...products);
};



