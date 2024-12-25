document.getElementById('add-item').addEventListener('click', function() {
    const itemContainer = document.getElementById('item-container');
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
        <label for="item-description">Item Description:</label>
        <input type="text" class="item-description" required>
        <label for="item-quantity">Quantity:</label>
        <input type="number" class="item-quantity" required>
        <label for="item-price">Price per Unit:</label>
        <input type="number" class="item-price" required>
    `;
    itemContainer.appendChild(newItem);
});

document.getElementById('invoice-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const customerName = document.getElementById('customer-name').value;
    const customerAddress = document.getElementById('customer-address').value;
    const items = document.querySelectorAll('.item');
    const taxRate = parseFloat(document.getElementById('tax-rate').value);

    let subtotal = 0;
    const invoiceItems = [];

    items.forEach(item => {
        const description = item.querySelector('.item-description').value;
        const quantity = parseInt(item.querySelector('.item-quantity').value);
        const price = parseFloat(item.querySelector('.item-price').value);
        const itemSubtotal = quantity * price;
        subtotal += itemSubtotal;
        invoiceItems.push({ description, quantity, price, itemSubtotal });
    });

    const taxAmount = (taxRate / 100) * subtotal;
    const totalAmount = subtotal + taxAmount;

    document.getElementById('customer-info').innerHTML = `
        <p><strong>Name:</strong> ${customerName}</p>
        <p><strong>Address:</strong> ${customerAddress}</p>
    `;

    const invoiceItemsContainer = document.getElementById('invoice-items');
    invoiceItemsContainer.innerHTML = '';
    invoiceItems.forEach(item => {
        invoiceItemsContainer.innerHTML += `
            <tr>
                <td>${item.description}</td>
                <td>${item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${item.itemSubtotal.toFixed(2)}</td>
            </tr>
        `;
    });

    document.getElementById('tax-amount').textContent = taxAmount.toFixed(2);
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);

    document.getElementById('invoice-display').classList.remove('hidden');
});



document.getElementById('download-invoice').addEventListener('click', function() {
    window.print();
});
