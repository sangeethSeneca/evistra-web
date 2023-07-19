export const calculateItemTotal = (item) => {
    return (item.price * item.quantity).toFixed(2);
};

export const calculateSubtotal = (cartItems) => {
    let subtotal = 0;
    let items = [cartItems];
    items.forEach((item) => {
        subtotal += item?.price * item?.quantity;
    });
    return subtotal.toFixed(2);
};


export const calculateSavings = (cartItems) => {
    let savings = 0;
    let items = [cartItems];
    items.forEach((item) => {
        const originalPrice = item?.price * item?.quantity;
        const discountedPrice = originalPrice * 0.1; // 10% discount
        savings += discountedPrice;
    });
    return savings.toFixed(2);
};