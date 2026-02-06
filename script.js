function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

// Smooth scrolling
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({behavior:'smooth'});
    });
});

// Shipment Tracking
function trackShipment(){

    let id = document.getElementById("trackingId").value;
    let result = document.getElementById("result");

    if(id === ""){
        result.innerHTML = "Please enter tracking number";
        return;
    }

    let shipments = {
        "SW001": "In Transit - Lagos",
        "SW002": "Delivered - Abuja",
        "SW003": "Processing - Port Harcourt"
    };

    if(shipments[id]){
        result.innerHTML = "Status: " + shipments[id];
    } else {
        result.innerHTML = "Tracking number not found";
    }
}
// Quote Calculation Logic
function calculateQuote() {
    const weight = document.getElementById("weight").value;
    const type = document.getElementById("cargoType").value;
    const resultDiv = document.getElementById("quoteResult");

    if (!weight || weight <= 0) {
        resultDiv.innerHTML = "Please enter a valid weight.";
        return;
    }

    // Base rate: $10 per kg (example)
    let basePrice = weight * 10;

    // Apply multipliers based on cargo type
    if (type === "fragile") basePrice *= 1.2;
    if (type === "perishable") basePrice *= 1.5;

    resultDiv.innerHTML = `Estimated Cost: <strong>$${basePrice.toFixed(2)}</strong><br><small>Final price may vary after inspection.</small>`;
}

// Simple Login Simulation
function handleLogin() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;

    if (email && pass) {
        // Hide login form, show dashboard
        document.getElementById("login-form").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        alert("Please enter both email and password");
    }
}