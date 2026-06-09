function createCart() {

    let items = [];
    let discount = 0;
    let freeShip = 0;

    return {

        addItem(product, quantity = 1) {

            const existing =
                items.find(
                    item => item.id === product.id
                );

            if (existing) {
                existing.quantity += quantity;
            } else {
                items.push({
                    ...product,
                    quantity
                });
            }
        },

        removeItem(productId) {
            items =
                items.filter(
                    item => item.id !== productId
                );
        },

        updateQuantity(productId, newQuantity) {

            const item =
                items.find(
                    i => i.id === productId
                );

            if (item) {
                item.quantity = newQuantity;
            }
        },

        getTotal() {

            const subtotal =
                items.reduce(
                    (sum, item) =>
                        sum +
                        item.price * item.quantity,
                    0
                );

            return subtotal * (1 - discount)
                   - freeShip;
        },

        applyDiscount(code) {

            if (code === "SALE10")
                discount = 0.10;

            else if (code === "SALE20")
                discount = 0.20;

            else if (code === "FREESHIP")
                freeShip = 30000;
        },

        printCart() {

            console.table(
                items.map(item => ({
                    ID: item.id,
                    Name: item.name,
                    Qty: item.quantity,
                    Price: item.price,
                    Total:
                        item.price *
                        item.quantity
                }))
            );

            console.log(
                "Tổng:",
                this.getTotal()
                    .toLocaleString("vi-VN") + "đ"
            );
        },

        getItemCount() {

            return items.reduce(
                (sum, item) =>
                    sum + item.quantity,
                0
            );
        },

        clearCart() {
            items = [];
        }
    };
}

// TEST
const cart = createCart();

cart.addItem(
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000
    },
    1
);

cart.addItem(
    {
        id: 3,
        name: "AirPods Pro",
        price: 6990000
    },
    2
);

cart.addItem(
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000
    },
    1
);

cart.printCart();

cart.applyDiscount("SALE10");

cart.printCart();

console.log(
    "Số SP:",
    cart.getItemCount()
);

cart.removeItem(3);

console.log(
    "Sau xóa:",
    cart.getItemCount()
);