import "../styles/Payment.css";
const Payment = () => {
    return (
        <div class="payment-container">
    <div class="dots-container">
        <img src="path/to/dots-image.png" alt="dots-bg" />
    </div>

    <div class="payment-box">
        <div class="payment-header">
            <span class="highlight">&lt;</span>
            Payment
            <span class="highlight">&gt;</span>
        </div>
        <p class="payment-subtext">
            It's always better to lay down the burden of loan ASAP!
        </p>

        <form class="payment-form">
            <button type="button" class="toggle-button">
                Show QR Code! &lt;~&gt;
            </button>

            <div class="qr-code-container">
                <img src="path/to/qr-code.png" alt="QR Code" class="qr-code" />
            </div>

            <input
                type="text"
                name="transactionId"
                placeholder="Transaction ID"
                class="input-field"
                required
            />

            <input
                type="text"
                name="paymentMobile"
                placeholder="Payment Mobile No."
                class="input-field"
                required
            />

            <div class="upload-container">
                <label for="screenshot" class="upload-label">
                    <span class="upload-button">Upload</span>
                    <span class="file-name">Get your payment screenshot...</span>
                </label>
                <input type="file" id="screenshot" class="hidden" />
            </div>

            <button type="submit" class="submit-button">
                Verify Payment &lt;~&gt;
            </button>
        </form>
    </div>

    <div class="dots-container rotate">
        <img src="path/to/dots-image.png" alt="dots-bg" />
    </div>
</div>
);
};
export default Payment;
