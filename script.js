// Load data from localStorage or initialize
let busSchedule = JSON.parse(localStorage.getItem("busSchedule")) || [
    { name: "Bhrampputtra", route: "Foujdari → Campus", time: "8:00 AM", image: "assets/images/bus1.jpg" },
    { name: "Jamuna", route: "Foujdari → Campus", time: "9:00 AM", image: "assets/images/bus2.jpg" },
    { name: "Shongkho Chill", route: "Foujdari → Campus", time: "10:00 AM", image: "assets/images/bus3.jpg" },
];

let emergencyContact = JSON.parse(localStorage.getItem("emergencyContact")) || {
    post: "Manager",
    name: "John Doe",
    number: "+8801XXX-XXXXXX",
};

let latestUpdates = JSON.parse(localStorage.getItem("latestUpdates")) || [];

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

// Function to save data to localStorage
function saveData() {
    localStorage.setItem("busSchedule", JSON.stringify(busSchedule));
    localStorage.setItem("emergencyContact", JSON.stringify(emergencyContact));
    localStorage.setItem("latestUpdates", JSON.stringify(latestUpdates));
}

// Load schedule, emergency contact, and latest updates on page load
window.onload = () => {
    displaySchedule();
    displayLatestUpdates();
    document.getElementById("contact-name").textContent = emergencyContact.name;
    document.getElementById("contact-number").textContent = emergencyContact.number;
    document.getElementById("contact-post").textContent = emergencyContact.post;
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
        displayAdminBusList(); // Load admin bus list
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
            displayAdminBusList(); // Update admin bus list
            saveData();
            alert("Bus added successfully!");
        };
        reader.readAsDataURL(image);
    }
});

// Display Admin Bus List
function displayAdminBusList() {
    const busList = document.getElementById("bus-list");
    busList.innerHTML = ""; // Clear existing content

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
        busList.appendChild(busItem);
    });
}

// Delete Bus Functionality (Only in Admin Panel)
function deleteBus(index) {
    busSchedule.splice(index, 1);
    displaySchedule();
    displayAdminBusList(); // Update admin bus list
    saveData();
    alert("Bus deleted successfully!");
}

// Emergency Contact Update Functionality
const emergencyOption = document.getElementById("emergency-option");
emergencyOption.addEventListener("click", () => {
    busScheduleSection.style.display = "none";
    adminPanel.style.display = "none";
    adminLogin.style.display = "none";
    emergencyContactSection.style.display = "block";
});

const emergencyContactFormAdmin = document.getElementById("emergency-contact-form-admin");
emergencyContactFormAdmin.addEventListener("submit", (e) => {
    e.preventDefault();
    const contactPost = document.getElementById("contact-post-input").value;
    const contactName = document.getElementById("contact-name-input").value;
    const contactNumber = document.getElementById("contact-number-input").value;

    emergencyContact.post = contactPost;
    emergencyContact.name = contactName;
    emergencyContact.number = contactNumber;
    document.getElementById("contact-name").textContent = contactName;
    document.getElementById("contact-number").textContent = contactNumber;
    document.getElementById("contact-post").textContent = contactPost;
    saveData();
    alert("Emergency contact updated successfully!");
});

// Add Latest Update Functionality
const updateForm = document.getElementById("update-form");
updateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const updateContentInput = document.getElementById("update-content-input").value;

    latestUpdates.push(updateContentInput);
    displayLatestUpdates();
    saveData();
    alert("Update added successfully!");
});
