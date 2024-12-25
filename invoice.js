function generateInvoice() {
    // Fetch form values
    const customerName = document.getElementById("customerName").value;
    const customerAddress = document.getElementById("customerAddress").value;
    const itemDescription = document.getElementById("itemDescription").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const pricePerUnit = parseFloat(document.getElementById("pricePerUnit").value);
    const taxRate = parseFloat(document.getElementById("taxRate").value);

    // Calculate totals
    const subtotal = quantity * pricePerUnit;
    const tax = (subtotal * taxRate) / 100;
    const total = subtotal + tax;

    // Display results
    document.getElementById("outputCustomerName").textContent = customerName;
    document.getElementById("outputCustomerAddress").textContent = customerAddress;
    document.getElementById("outputItemDescription").textContent = itemDescription;
    document.getElementById("outputQuantity").textContent = quantity;
    document.getElementById("outputPricePerUnit").textContent = `${pricePerUnit.toFixed(2)}`;
    document.getElementById("outputSubtotal").textContent = `${subtotal.toFixed(2)}`;
    document.getElementById("outputTax").textContent = `${tax.toFixed(2)}`;
    document.getElementById("outputTotal").textContent = `${total.toFixed(2)}`;

    // Show invoice
    document.getElementById("invoice").style.display = "block";
    document.getElementById('download-invoice').addEventListener('click', function() {
        link.href= URL.createObjectURL(Blob);
        link.download = 'invoice.html';
        link.click();
});
document.getElementById('print-invoice').addEventListener('click', function() {
    window.print();})

}