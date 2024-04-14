document.addEventListener("DOMContentLoaded", function() {
    const paymentSelect = document.getElementById("payment");
    const cardForm = document.getElementById("cardPaymentForm");
    const upiForm = document.getElementById("upiPaymentForm");

    // Function to toggle between card and UPI payment forms
    function togglePaymentForm() {
        if (paymentSelect.value === "card") {
            cardForm.style.display = "block";
            upiForm.style.display = "none";
        } else if (paymentSelect.value === "upi") {
            cardForm.style.display = "none";
            upiForm.style.display = "block";
        }
    }

    // Initial call to set the correct payment form based on the default selected payment method
    togglePaymentForm();

    // Event listener to toggle payment form when payment method is changed
    paymentSelect.addEventListener("change", togglePaymentForm);
});
