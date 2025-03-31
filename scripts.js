function generateRandomCreditCard() {
    const prefixes = ['4532', '5412', '3782', '6011'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomDigits = () => Math.floor(1000 + Math.random() * 9000).toString();
    return `${prefix} ${randomDigits()} ${randomDigits()} ${randomDigits()}`;
}

function generateRandomEmail() {
    const domains = ['example.com', 'test.com', 'demo.net', 'securemail.org', 'cyberdefense.io'];
    const randomName = Math.random().toString(36).substring(2, 10);
    const domain = domains[Math.floor(Math.random() * domains.length)];
    return `${randomName}@${domain}`;
}

function updateWidgets() {
    const ccContent = document.getElementById('cc-detection-content');
    const emailContent = document.getElementById('email-content');

    const ccNumber = generateRandomCreditCard();
    const email = generateRandomEmail();
    const timestamp = new Date().toLocaleString();

    ccContent.innerHTML = `
        <p><strong>Detected Credit Card:</strong> ${ccNumber}</p>
        <p><strong>Timestamp:</strong> ${timestamp}</p>
        <p><strong>Status:</strong> <span class="text-red-500">Blocked</span></p>
    `;

    emailContent.innerHTML = `
        <p><strong>Suspicious Email Detected:</strong></p>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Timestamp:</strong> ${timestamp}</p>
        <p><strong>Risk Level:</strong> <span class="text-yellow-500">High</span></p>
    `;
}

// Update widgets on page load
updateWidgets();

// Refresh data every 30 seconds
setInterval(updateWidgets, 30000);
