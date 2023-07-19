import {
    calculateItemTotal,
    calculateSubtotal,
    calculateSavings,
} from "../util/commonUtil";

describe("calculateItemTotal", () => {
    test("calculates the total price for a single item", () => {
        const item = {
            price: 10.99,
            quantity: 3,
        };

        const total = calculateItemTotal(item);

        expect(total).toBe("32.97");
    });
});

describe("calculateSubtotal", () => {
    test("calculates the subtotal for multiple cart items", () => {
        const cartItems = [
            {
                price: 10.99,
                quantity: 3,
            },
            {
                price: 5.99,
                quantity: 2,
            },
            {
                price: 2.5,
                quantity: 4,
            },
        ];

        const subtotal = calculateSubtotal(cartItems);

        expect(subtotal).toBe("54.95");
    });
});

describe("calculateSavings", () => {
    test("calculates the savings for multiple cart items", () => {
        const cartItems = [
            {
                price: 10.99,
                quantity: 3,
            },
            {
                price: 5.99,
                quantity: 2,
            },
            {
                price: 2.5,
                quantity: 4,
            },
        ];

        const savings = calculateSavings(cartItems);

        expect(savings).toBe("5.50");
    });
});
