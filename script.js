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
