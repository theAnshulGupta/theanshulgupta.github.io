(function() {
    document.addEventListener('DOMContentLoaded', function() {
      const productContainer = document.querySelector('.product-form__buttons');
      if (productContainer) {
        const button = document.createElement('button');
        button.innerText = 'Show Hello World';
        button.onclick = function() {
          alert('Hello World');
        };
        productContainer.appendChild(button);
    }
});
})();
