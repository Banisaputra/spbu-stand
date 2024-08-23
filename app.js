document.addEventListener("DOMContentLoaded", function() {
    
   if (window.location.pathname+window.location.hash == '/index.html') {
      const form = document.getElementById('receiptForm')
      form.addEventListener('submit', function (e) {
         e.preventDefault();
         // Get form values
         const formData = {
            spbuNumber : document.getElementById('spbuNumber').value,
            address : document.getElementById('address').value,
            telp : document.getElementById('telp').value,
            shift : document.getElementById('shift').value,
            transactionNumber : document.getElementById('transactionNumber').value,
            date : document.getElementById('date').value,
            time : document.getElementById('time').value,
            pump : document.getElementById('pump').value,
            hose : document.getElementById('hose').value,
            fuelType : document.getElementById('fuelType').value,
            price : document.getElementById('price').value,
            totalPrice : document.getElementById('totalPrice').value,
            operator : document.getElementById('operator').value,
            noPolisi : document.getElementById('noPolisi').value,
            odoKM : document.getElementById('odoKM').value,
            cash : document.getElementById('cash').value,
            change : document.getElementById('change').value,
            footer : document.getElementById('footer').value,
            volume : document.getElementById('totalPrice').value / document.getElementById('price').value
      
         };
         
         // Simpan data di sessionStorage
         sessionStorage.setItem("formData", JSON.stringify(formData));
         // move to struck page
         window.location.href = "struck.html";
       
      });
   }

   if (window.location.pathname+window.location.hash == '/struck.html') {
      const formData = JSON.parse(sessionStorage.getItem("formData"));
      
      // Display values in the receipt
      console.log(formData);
      // Display values in the receipt
      // document.getElementById('displayNotaNumber').innerText = notaNumber;
      // document.getElementById('displayDate').innerText = date;
      // document.getElementById('displayCustomerName').innerText = customerName;
      // document.getElementById('displayFuelType').innerText = fuelType;
      // document.getElementById('displayLiters').innerText = liters;
      // document.getElementById('displayPricePerLiter').innerText = pricePerLiter;
      // document.getElementById('displayTotalPrice').innerText = `${totalPrice.toLocaleString()} IDR`;
   
      // Show the receipt
      //  document.getElementById('receipt').style.display = 'block';
   }

});
 