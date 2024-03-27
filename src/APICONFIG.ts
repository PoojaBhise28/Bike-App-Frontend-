export const API_URL = "http://localhost:5255/api";
export const biketypesoptions = [
  
  {
    id: 1,
    type: " Road",
  },
  {
    id: 2,
    type: "Hybrid ",
  },
  {
    id: 3,
    type: "BMX",
  },
  {
  id: 4,
  type: "Mountain",
},
];


export function findbiketypeName(id: number) {
  var found = biketypesoptions.find((bike: any) => bike.id === id);
  return found?.type;
}

export function handelChangeGenric(e:any,setFunc:any) {
  var name = e.target.name;
  var newValue = e.target.value;
  setFunc((prev:any) => ({ ...prev, [name]: newValue }));
}

