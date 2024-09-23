// Use fetch method for calling an api https://fakestoreapi.com/products 

function fetchProducts() {
  fetch('https://fakestoreapi.com/products')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Products:', data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    })
    .finally(() => {
      console.log('Fetch operation complete.');
    });
}

fetchProducts();
