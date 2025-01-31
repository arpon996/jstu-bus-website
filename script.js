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
/* General Styles */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f4f8;
    color: #333;
    transition: margin-left 0.3s;
}

header {
    background-color: #2c3e50;
    color: #fff;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

header h1 {
    margin: 0;
    font-size: 2rem;
}

#menu-toggle {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
}

main {
    padding: 20px;
}

/* Sidebar Styles */
#sidebar {
    width: 250px;
    height: 100%;
    position: fixed;
    top: 0;
    left: -250px;
    background-color: #2c3e50;
    color: #fff;
    transition: left 0.3s;
    z-index: 1000;
}

#sidebar.active {
    left: 0;
}

.sidebar-header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #34495e;
}

#close-sidebar {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
}

#sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

#sidebar ul li {
    padding: 15px 20px;
    border-bottom: 1px solid #34495e;
}

#sidebar ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
}

#sidebar ul li a:hover {
    color: #27ae60;
}

/* Bus Schedule Section */
#bus-schedule {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#schedule-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.bus-item {
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: 8px;
    background-color: #e9ecef;
    transition: transform 0.2s, box-shadow 0.2s;
}

.bus-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.bus-item img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    margin-right: 15px;
}

.bus-item .details {
    flex: 1;
}

.bus-item .details h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #2c3e50;
}

.bus-item .details p {
    margin: 5px 0;
    color: #555;
}

/* Admin Login Section */
#admin-login {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#admin-login-form label {
    display: block;
    margin-bottom: 5px;
}

#admin-login-form input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

#admin-login-form button {
    width: 100%;
    padding: 10px;
    background-color: #2c3e50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#admin-login-form button:hover {
    background-color: #34495e;
}

/* Admin Panel Section */
#admin-panel {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#back-to-main {
    width: 100%;
    padding: 10px;
    background-color: #e74c3c;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
}

#back-to-main:hover {
    background-color: #c0392b;
}

#add-bus-form label {
    display: block;
    margin-bottom: 5px;
}

#add-bus-form input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

#add-bus-form button {
    width: 100%;
    padding: 10px;
    background-color: #27ae60;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#add-bus-form button:hover {
    background-color: #2ecc71;
}

#bus-list {
    margin-top: 20px;
}

/* Emergency Contact Section */
#emergency-contact {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#emergency-contact-form label {
    display: block;
    margin-bottom: 5px;
}

#emergency-contact-form input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

#emergency-contact-form button {
    width: 100%;
    padding: 10px;
    background-color: #27ae60;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#emergency-contact-form button:hover {
    background-color: #2ecc71;
}

/* Footer */
footer {
    background-color: #2c3e50;
    color: #fff;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
}

/* Responsive Design */
@media (max-width: 768px) {
    header h1 {
        font-size: 1.5rem;
    }

    .bus-item {
        flex-direction: column;
        text-align: center;
    }

    .bus-item img {
        margin-right: 0;
        margin-bottom: 10px;
    }
}
