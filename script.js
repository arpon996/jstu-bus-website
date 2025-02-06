// Firebase Realtime Database রেফারেন্স
const db = firebase.database();

// Load data from Firebase or initialize
let busSchedule = [];
let emergencyContact = {};
let latestUpdates = [];

// Function to display bus schedule
function displaySchedule() {
    const scheduleList = document.getElementById("schedule-list");
    scheduleList.innerHTML = ""; // Clear existing content

    busSchedule.forEach((bus, index) => {
        const busItem = document.createElement("div");
        busItem.className = "bus-item";
        busItem.innerHTML = `
            <img src="${bus.image}" alt="${bus.name}">
            <div class="details">
                <h3>${bus.name}</h3>
                <p>Time: ${bus.time}</p>
                <p>Route: ${bus.route}</p>
            </div>
        `;
        scheduleList.appendChild(busItem);
    });
}

// Function to display latest updates
function displayLatestUpdates() {
    const updateContent = document.getElementById("update-content");
    updateContent.innerHTML = ""; // Clear existing content

    latestUpdates.forEach((update, index) => {
        const updateItem = document.createElement("div");
        updateItem.className = "update-item";
        updateItem.innerHTML = `
            <p>${update}</p>
        `;
        updateContent.appendChild(updateItem);
    });
}

// Function to save data to Firebase
function saveData() {
    db.ref('busSchedule').set(busSchedule);
    db.ref('emergencyContact').set(emergencyContact);
    db.ref('latestUpdates').set(latestUpdates);
}

// Load schedule, emergency contact, and latest updates on page load
window.onload = () => {
    // Load bus schedule
    db.ref('busSchedule').on('value', (snapshot) => {
        busSchedule = snapshot.val() || [];
        displaySchedule();
    });

    // Load emergency contact
    db.ref('emergencyContact').on('value', (snapshot) => {
        emergencyContact = snapshot.val() || { post: "Manager", name: "John Doe", number: "+8801XXX-XXXXXX" };
        document.getElementById("contact-name").textContent = emergencyContact.name;
        document.getElementById("contact-number").textContent = emergencyContact.number;
        document.getElementById("contact-post").textContent = emergencyContact.post;
    });

    // Load latest updates
    db.ref('latestUpdates').on('value', (snapshot) => {
        latestUpdates = snapshot.val() || [];
        displayLatestUpdates();
    });
};

// Rest of your JavaScript code remains the same...
