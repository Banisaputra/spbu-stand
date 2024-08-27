document.addEventListener("DOMContentLoaded", function() {
    
   if (window.location.pathname+window.location.hash == '/index.html') {
      sessionStorage.clear();
      
      const form = document.getElementById('receiptForm');
      form.addEventListener('submit', function (e) {
         e.preventDefault();
         // calculate if cash/change is active
         const cashChange = document.getElementById('cash').value!= '' && document.getElementById('change').value!= '';
         
         // Get form values
         const formData = {
            spbuNumber : document.getElementById('spbuNumber').value,
            address : document.getElementById('address').value,
            telp : document.getElementById('telp').value,
            shift : document.getElementById('shift').value,
            transactionNumber : document.getElementById('transactionNumber').value,
            dateTime : document.getElementById('datetime').value,
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
            volume : document.getElementById('totalPrice').value / document.getElementById('price').value,
            isVehicleInfo : document.getElementById('infoVehicle').checked,
            isPaymentInfo : document.getElementById('infoPayment').checked,
            
         };
         
         // Simpan data di sessionStorage
         sessionStorage.setItem("formData", JSON.stringify(formData));
         // move to struck page
         window.location.href = "struck.html";
       
      });

      const infoVehicle = document.getElementById("infoVehicle");
      const infoPayment = document.getElementById("infoPayment");
      
      // Display vehicle info
      infoVehicle.addEventListener("change", function (e) {
         if (e.target.checked) {
            document.getElementById('vehicleInfo').style.display = 'block';
         } else {
            document.getElementById('vehicleInfo').style.display = 'none';
         }
      });
      infoPayment.addEventListener("change", function (e) {
         if (e.target.checked) {
            document.getElementById('paymentInfo').style.display = 'block';
         } else {
            document.getElementById('paymentInfo').style.display = 'none';
         }
      });
      
   }

   if (window.location.pathname+window.location.hash == '/struck.html') {
      const formData = JSON.parse(sessionStorage.getItem("formData"));

      // Display values in the receipt
      console.log(formData);
      // Generate time
      const timeTransaction = formData['dateTime'].replace(/T/, " ");
      // Generate liter 
      const volume = formData['totalPrice'] / formData['price'];
      // Generate payment


      // Display values in the receipt
      document.getElementById('noSpbu').innerText = formData['spbuNumber'];
      document.getElementById('address').innerText = formData['noSpbu'];
      document.getElementById('telp').innerText = formData['telp'];
      document.getElementById('shift').innerText = formData['shift'];
      document.getElementById('transactionNumber').innerText = formData['transactionNumber'];
      document.getElementById('datetime').innerText = timeTransaction;
      document.getElementById('hosePump').innerText = formData['pump']+" / "+ formData['hose'];
      document.getElementById('fuelType').innerText = formData['fuelType'];
      document.getElementById('volume').innerText = volume.toFixed(2);
      document.getElementById('price').innerText = formData['price'];
      document.getElementById('totalPrice').innerText = formData['totalPrice'];
      document.getElementById('operator').innerText = formData['operator'];

      document.getElementById('noPolisi').innerText = formData['noPolisi'];
      document.getElementById('odoKM').innerText = formData['odoKM'];
      document.getElementById('cash').innerText = formData['cash'];
      document.getElementById('change').innerText = formData['change'];
      document.getElementById('footer').innerText = formData['footer'];
      if (formData['isVehicleInfo']) {
         document.getElementById('receipt-idVehicle').style.display = 'block';
      }
      if (formData['isPaymentInfo']) {
         document.getElementById('receipt-payment').style.display = 'block';
      }
   }

});
 