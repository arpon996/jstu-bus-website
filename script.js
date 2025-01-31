// Sample bus schedule data
const busSchedule = [
    { name: "Bhrampputtra", route: "Foujdari → Campus", time: "8:00 AM", image: "assets/images/bus1.jpg" },
    { name: "Jamuna", route: "Foujdari → Campus", time: "9:00 AM", image: "assets/images/bus2.jpg" },
    { name: "Shongkho Chill", route: "Foujdari → Campus", time: "10:00 AM", image: "assets/images/bus3.jpg" },
];

// Function to display bus schedule
function displaySchedule() {
    const scheduleList = document.getElementById("schedule-list");
    scheduleList.innerHTML = ""; // Clear existing content

    busSchedule.forEach((bus) => {
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

// Modal Toggle
const adminOption = document.getElementById("admin-option");
const emergencyOption = document.getElementById("emergency-option");
const adminModal = document.getElementById("admin-modal");
const emergencyModal = document.getElementById("emergency-modal");
const closeModals = document.querySelectorAll(".close-modal");

adminOption.addEventListener("click", () => {
    adminModal.style.display = "block";
});

emergencyOption.addEventListener("click", () => {
    emergencyModal.style.display = "block";
});

closeModals.forEach((close) => {
    close.addEventListener("click", () => {
        adminModal.style.display = "none";
        emergencyModal.style.display = "none";
    });
});

window.addEventListener("click", (event) => {
    if (event.target === adminModal || event.target === emergencyModal) {
        adminModal.style.display = "none";
        emergencyModal.style.display = "none";
    }
});

// Admin Login
const adminLoginForm = document.getElementById("admin-login-form");
const password = "eee69"; // Admin password

adminLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputPassword = document.getElementById("password").value;

    if (inputPassword === password) {
        alert("Login successful!");
        adminModal.style.display = "none";
    } else {
        alert("Incorrect password!");
    }
});
