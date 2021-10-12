export const findById = (arr, id) => arr.find(
  (item) => item.id == id
);

export const generateId = (arr) => {
  let newId;
  
  if (!arr.length) {
    newId = 0
  } else {
    const maxId = arr.reduce(
      (max, product) => (product.id > max ? product.id : max),
      arr[0].id
    );
    newId = maxId+1
  }

  return newId
}