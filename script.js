// Sample bus schedule data
let busSchedule = [
    { name: "Bhrampputtra", route: "Foujdari → Campus", time: "8:00 AM", image: "assets/images/bus1.jpg" },
    { name: "Jamuna", route: "Foujdari → Campus", time: "9:00 AM", image: "assets/images/bus2.jpg" },
    { name: "Shongkho Chill", route: "Foujdari → Campus", time: "10:00 AM", image: "assets/images/bus3.jpg" },
];

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
            <button onclick="deleteBus(${index})">Delete</button>
        `;
        scheduleList.appendChild(busItem);
    });
}

// Load schedule on page load
window.onload = displaySchedule;

// Sidebar Toggle
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close-sidebar");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

// Admin Login Functionality
// Load data from localStorage or initialize
let busSchedule = JSON.parse(localStorage.getItem("busSchedule")) || [
    { name: "Bhrampputtra", route: "Foujdari → Campus", time: "8:00 AM", image: "assets/images/bus1.jpg" },
    { name: "Jamuna", route: "Foujdari → Campus", time: "9:00 AM", image: "assets/images/bus2.jpg" },
    { name: "Shongkho Chill", route: "Foujdari → Campus", time: "10:00 AM", image: "assets/images/bus3.jpg" },
];

let emergencyContact = JSON.parse(localStorage.getItem("emergencyContact")) || {
    name: "John Doe",
    number: "+8801XXX-XXXXXX",
};

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
            <button onclick="deleteBus(${index})">Delete</button>
        `;
        scheduleList.appendChild(busItem);
    });
}

// Function to save data to localStorage
function saveData() {
    localStorage.setItem("busSchedule", JSON.stringify(busSchedule));
    localStorage.setItem("emergencyContact", JSON.stringify(emergencyContact));
}

// Load schedule and emergency contact on page load
window.onload = () => {
    displaySchedule();
    document.getElementById("contact-name").textContent = emergencyContact.name;
    document.getElementById("contact-number").textContent = emergencyContact.number;
};

// Sidebar Toggle
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close-sidebar");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

// Admin Login Functionality
const adminOption = document.getElementById("admin-option");
const adminLogin = document.getElementById("admin-login");
const adminPanel = document.getElementById("admin-panel");
const busScheduleSection = document.getElementById("bus-schedule");
const emergencyContactSection = document.getElementById("emergency-contact");

adminOption.addEventListener("click", () => {
    busScheduleSection.style.display = "none";
    adminPanel.style.display = "none";
    emergencyContactSection.style.display = "none";
    adminLogin.style.display = "block";
});

const adminLoginForm = document.getElementById("admin-login-form");
const password = "eee69"; // Admin password

adminLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputPassword = document.getElementById("password").value;

    if (inputPassword === password) {
        alert("Login successful!");
        adminLogin.style.display = "none";
        adminPanel.style.display = "block";
    } else {
        alert("Incorrect password!");
    }
});

// Back to Main Page Functionality
const backToMain = document.getElementById("back-to-main");
backToMain.addEventListener("click", () => {
    adminPanel.style.display = "none";
    busScheduleSection.style.display = "block";
});

// Add Bus Functionality
const addBusForm = document.getElementById("add-bus-form");
addBusForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const route = document.getElementById("route").value;
    const time = document.getElementById("time").value;
    const image = document.getElementById("image").files[0];

    if (image) {
        const reader = new FileReader();
        reader.onload = function (e) {
            busSchedule.push({ name, route, time, image: e.target.result });
            displaySchedule();
            saveData();
            alert("Bus added successfully!");
        };
        reader.readAsDataURL(image);
    }
});

// Delete Bus Functionality
function deleteBus(index) {
    busSchedule.splice(index, 1);
    displaySchedule();
    saveData();
    alert("Bus deleted successfully!");
}

// Emergency Contact Update Functionality
const emergencyContactForm = document.getElementById("emergency-contact-form");
emergencyContactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const contactName = document.getElementById("contact-name-input").value;
    const contactNumber = document.getElementById("contact-number-input").value;

    emergencyContact.name = contactName;
    emergencyContact.number = contactNumber;
    document.getElementById("contact-name").textContent = contactName;
    document.getElementById("contact-number").textContent = contactNumber;
    saveData();
    alert("Emergency contact updated successfully!");
});
