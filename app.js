function validate() {
  return true;
}

function getData() {
  let products = [];
  if (localStorage.getItem("products")) {
    products = JSON.parse(localStorage.getItem("products"));
  }
  return products;
}

function createRow(product,index) {
  return `
           <tr>
            <td>${index}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.count}</td>
            <td>
                <button class="delete" data-id = "${product.id}">delete</button>
                <button class="edit" data-id = "${product.id}">edit</button>
            </td>
        </tr>
    `;
}

export {validate, getData, createRow}
