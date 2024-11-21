// Smooth scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
// Handle Login Form Submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    alert(`Login successful for email: ${email}`);
    // Add backend logic here
});

// Handle Sign Up Form Submission
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload
    const name = document.getElementById("name").value;
    const email = document.getElementById("emailSignup").value;
    const password = document.getElementById("passwordSignup").value;

    alert(`Sign up successful for ${name}`);
    // Add backend logic here
});
// Mock data for doctors
const doctors = [
    { name: "Dr. Sarah Johnson", specialty: "Cardiology", location: "Algiers", rating: 4.8 },
    { name: "Dr. Ahmed Ali", specialty: "Dermatology", location: "Oran", rating: 4.5 },
    { name: "Dr. Mona Benyamin", specialty: "Pediatrics", location: "Constantine", rating: 4.7 },
];

// Handle Search Button Click
document.getElementById("searchButton").addEventListener("click", function () {
    const specialty = document.getElementById("specialty").value;
    const location = document.getElementById("location").value.toLowerCase();
    const doctorList = document.getElementById("doctorList");

    // Clear previous results
    doctorList.innerHTML = "";

    // Filter doctors
    const filteredDoctors = doctors.filter(doctor =>
        (specialty === "" || doctor.specialty.toLowerCase() === specialty.toLowerCase()) &&
        (location === "" || doctor.location.toLowerCase().includes(location))
    );

    // Display doctors
    if (filteredDoctors.length > 0) {
        filteredDoctors.forEach(doctor => {
            const doctorCard = document.createElement("div");
            doctorCard.classList.add("doctor-card");

            doctorCard.innerHTML = `
                <h4>${doctor.name}</h4>
                <p>Specialty: ${doctor.specialty}</p>
                <p>Location: ${doctor.location}</p>
                <p>Rating: ⭐ ${doctor.rating}</p>
                <button onclick="bookAppointment('${doctor.name}')">Book Appointment</button>
            `;
            doctorList.appendChild(doctorCard);
        });
    } else {
        doctorList.innerHTML = "<p>No doctors found matching your criteria.</p>";
    }
});

// Function to handle booking
function bookAppointment(doctorName) {
    alert(`Appointment booked with ${doctorName}`);
}
// Handle Confirm Appointment Button
document.getElementById("confirmAppointment").addEventListener("click", function () {
    const appointmentDate = document.getElementById("appointmentDate").value;
    const appointmentTime = document.getElementById("appointmentTime").value;

    if (appointmentDate && appointmentTime) {
        const confirmationMessage = document.getElementById("confirmationMessage");
        confirmationMessage.textContent = `Your appointment is confirmed on ${appointmentDate} at ${appointmentTime}.`;
    } else {
        alert("Please select both date and time for your appointment.");
    }
});
// Mock appointment data
const appointments = [
    { date: "2024-11-21", time: "10:00 AM", doctor: "Dr. Sarah Johnson" },
    { date: "2024-11-22", time: "02:00 PM", doctor: "Dr. Ahmed Ali" }
];

// Display appointments in the profile
function loadAppointments() {
    const appointmentsList = document.getElementById("appointmentsList");
    appointmentsList.innerHTML = ""; // Clear existing appointments
    appointments.forEach(appointment => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Appointment with ${appointment.doctor} on ${appointment.date} at ${appointment.time}.`;
        appointmentsList.appendChild(listItem);
    });
}

// Load appointments when the page loads
window.onload = function() {
    loadAppointments();
};

// Handle Edit Profile Button
document.getElementById("editProfileBtn").addEventListener("click", function () {
    const userName = document.getElementById("userName");
    const userEmail = document.getElementById("userEmail");
    const userPhone = document.getElementById("userPhone");

    const newName = prompt("Enter new name:", userName.textContent);
    const newEmail = prompt("Enter new email:", userEmail.textContent);
    const newPhone = prompt("Enter new phone number:", userPhone.textContent);

    if (newName && newEmail && newPhone) {
        userName.textContent = newName;
        userEmail.textContent = newEmail;
        userPhone.textContent = newPhone;
    }
});

// Handle Change Password
document.getElementById("changePasswordBtn").addEventListener("click", function () {
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword && confirmPassword) {
        if (newPassword === confirmPassword) {
            alert("Password successfully changed!");
        } else {
            alert("Passwords do not match. Please try again.");
        }
    } else {
        alert("Please fill in both fields.");
    }
});
// Mock data for articles, videos, and webinars
const articles = [
    { title: "The Importance of Regular Exercise", link: "#" },
    { title: "How to Maintain a Balanced Diet", link: "#" },
    { title: "Understanding Mental Health: A Guide", link: "#" }
];

const videos = [
    { title: "Yoga for Beginners", link: "#" },
    { title: "10 Minute Home Workout", link: "#" },
    { title: "Mindfulness Meditation", link: "#" }
];

const webinars = [
    { title: "Live Webinar: Preventive Health Care", date: "2024-11-25", link: "#" },
    { title: "Live Webinar: Managing Stress", date: "2024-12-05", link: "#" }
];

// Function to load articles, videos, and webinars
function loadLibraryContent() {
    const articleList = document.getElementById("articleList");
    const videoList = document.getElementById("videoList");
    const webinarList = document.getElementById("webinarList");

    // Clear existing content
    articleList.innerHTML = "";
    videoList.innerHTML = "";
    webinarList.innerHTML = "";

    // Add articles
    articles.forEach(article => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${article.link}">${article.title}</a>`;
        articleList.appendChild(listItem);
    });

    // Add videos
    videos.forEach(video => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${video.link}">${video.title}</a>`;
        videoList.appendChild(listItem);
    });

    // Add webinars
    webinars.forEach(webinar => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${webinar.link}">${webinar.title} - ${webinar.date}</a>`;
        webinarList.appendChild(listItem);
    });
}

// Load the library content when the page loads
window.onload = loadLibraryContent;
// Mock data for notifications
const notifications = [
    { message: "Your annual check-up is due!", time: "2024-12-01 09:00" },
    { message: "Time to take your blood pressure medication.", time: "2024-11-22 08:00" },
];

// Function to load notifications
function loadNotifications() {
    const notificationList = document.getElementById("notificationList");
    notificationList.innerHTML = ""; // Clear existing notifications

    notifications.forEach(notification => {
        const listItem = document.createElement("div");
        listItem.className = "notification";
        listItem.innerHTML = `${notification.message} <br><small>Scheduled for: ${notification.time}</small>`;
        notificationList.appendChild(listItem);
    });
}

// Load notifications when the page loads
window.onload = loadNotifications;

// Handle adding a new notification
document.getElementById("addNotificationBtn").addEventListener("click", function () {
    const notificationMessage = document.getElementById("notificationMessage").value;
    const notificationTime = document.getElementById("notificationTime").value;

    if (notificationMessage && notificationTime) {
        // Add new notification to the array
        notifications.push({
            message: notificationMessage,
            time: notificationTime
        });

        // Reload the notifications list
        loadNotifications();
        alert("Notification added successfully!");
    } else {
        alert("Please fill in both fields.");
    }
});
// Mock data for discussion forums and workshops
const forums = [
    { title: "How to manage diabetes?", link: "#" },
    { title: "Best practices for heart health", link: "#" },
    { title: "Mental health and self-care", link: "#" }
];

const workshops = [
    { title: "Healthy Eating Habits", date: "2024-11-30", link: "#" },
    { title: "Managing Stress and Anxiety", date: "2024-12-05", link: "#" },
    { title: "Fitness for Beginners", date: "2024-12-10", link: "#" }
];

// Function to load forums and workshops
function loadCommunityContent() {
    const forumList = document.getElementById("forumList");
    const workshopList = document.getElementById("workshopList");
    const workshopSelect = document.getElementById("workshopSelect");

    // Clear existing content
    forumList.innerHTML = "";
    workshopList.innerHTML = "";
    workshopSelect.innerHTML = "";

    // Add forums
    forums.forEach(forum => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${forum.link}">${forum.title}</a>`;
        forumList.appendChild(listItem);
    });

    // Add workshops
    workshops.forEach(workshop => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${workshop.link}">${workshop.title} - ${workshop.date}</a>`;
        workshopList.appendChild(listItem);

        // Add to workshop dropdown
        const option = document.createElement("option");
        option.value = workshop.title;
        option.textContent = `${workshop.title} - ${workshop.date}`;
        workshopSelect.appendChild(option);
    });
}

// Load the community content when the page loads
window.onload = loadCommunityContent;

// Handle joining a workshop
document.getElementById("joinWorkshopBtn").addEventListener("click", function () {
    const selectedWorkshop = document.getElementById("workshopSelect").value;
    if (selectedWorkshop) {
        alert(`You have successfully joined the "${selectedWorkshop}" workshop!`);
    } else {
        alert("Please select a workshop to join.");
    }
});
// Mock data for user points
let userPoints = 250; // Current points

// Mock data for rewards
const rewards = [
    { name: "Free Consultation", points: 500 },
    { name: "Discount on Lab Tests", points: 300 },
    { name: "Discount on Prescription Drugs", points: 200 }
];

// Function to load user points and rewards
function loadRewards() {
    // Update user points display
    document.getElementById("userPoints").textContent = userPoints;

    const rewardsList = document.getElementById("rewardsList").querySelector("ul");
    rewardsList.innerHTML = ""; // Clear existing rewards

    rewards.forEach(reward => {
        const listItem = document.createElement("li");
        listItem.textContent = `${reward.name} - ${reward.points} Points`;
        rewardsList.appendChild(listItem);
    });
}

// Function to handle participation in health challenges
function joinChallenge(challengePoints) {
    if (userPoints >= challengePoints) {
        userPoints -= challengePoints; // Deduct points
        alert("Congratulations, you've joined the challenge!");
        loadRewards(); // Refresh the rewards section
    } else {
        alert("You don't have enough points to join this challenge.");
    }
}

// Event listener for health challenges
const challenges = document.querySelectorAll("#healthChallenges a");
challenges.forEach(challenge => {
    challenge.addEventListener("click", function(event) {
        event.preventDefault();
        const pointsRequired = parseInt(challenge.textContent.match(/\d+/)[0]);
        joinChallenge(pointsRequired);
    });
});

// Load the rewards when the page loads
window.onload = loadRewards;
// Mock data for insurance, pharmacy, and lab tests
let userInsurance = null; // No insurance linked initially
let pharmacyOrder = false; // Pharmacy order status
let labTestBooked = false; // Lab test booking status

// Function to link insurance
document.getElementById("linkInsuranceBtn").addEventListener("click", function() {
    userInsurance = "ABC Health Insurance";
    document.getElementById("insuranceDetails").textContent = `Linked with: ${userInsurance}`;
    alert("Insurance linked successfully!");
});

// Function to handle pharmacy order
document.getElementById("orderMedicineBtn").addEventListener("click", function() {
    if (userInsurance) {
        pharmacyOrder = true;
        alert("Your medicine order is being processed!");
    } else {
        alert("Please link your insurance before ordering medicines.");
    }
});

// Function to handle lab test booking
document.getElementById("bookLabTestBtn").addEventListener("click", function() {
    if (userInsurance) {
        labTestBooked = true;
        alert("Lab test successfully booked!");
    } else {
        alert("Please link your insurance before booking a lab test.");
    }
});
// Mock data for payment and subscription
let userBalance = 100; // User balance for payments
let invoices = []; // List to store invoices

// Function to handle payments
document.getElementById("payBtn").addEventListener("click", function() {
    let paymentMethod = document.getElementById("paymentMethod").value;
    if (userBalance >= 10) {
        userBalance -= 10; // Deduct the payment
        alert(`Payment of $10 via ${paymentMethod} was successful!`);
        createInvoice('Payment', 10, paymentMethod); // Create an invoice
    } else {
        alert("Insufficient balance for payment.");
    }
});

// Function to handle subscription plan selection
document.getElementById("basicPlanBtn").addEventListener("click", function() {
    alert("You have selected the Basic Plan for $10/month.");
    createInvoice('Subscription - Basic Plan', 10, 'Credit Card');
});

document.getElementById("premiumPlanBtn").addEventListener("click", function() {
    alert("You have selected the Premium Plan for $25/month.");
    createInvoice('Subscription - Premium Plan', 25, 'Credit Card');
});

document.getElementById("annualPlanBtn").addEventListener("click", function() {
    alert("You have selected the Annual Plan for $250/year.");
    createInvoice('Subscription - Annual Plan', 250, 'Credit Card');
});

// Function to create invoices
function createInvoice(description, amount, method) {
    let invoice = {
        description: description,
        amount: amount,
        method: method,
        date: new Date().toLocaleString()
    };
    invoices.push(invoice);
    alert("Invoice created!");
    displayInvoices();
}

// Function to display invoices
function displayInvoices() {
    let invoicesList = document.getElementById("invoicesList");
    invoicesList.innerHTML = ""; // Clear previous invoices
    invoices.forEach(invoice => {
        let invoiceItem = document.createElement("div");
        invoiceItem.classList.add("invoice-item");
        invoiceItem.innerHTML = `
            <p><strong>Description:</strong> ${invoice.description}</p>
            <p><strong>Amount:</strong> $${invoice.amount}</p>
            <p><strong>Payment Method:</strong> ${invoice.method}</p>
            <p><strong>Date:</strong> ${invoice.date}</p>
        `;
        invoicesList.appendChild(invoiceItem);
    });
}

// Show invoices when clicked
document.getElementById("viewInvoicesBtn").addEventListener("click", function() {
    displayInvoices();
});
// Function to handle the digital signature for prescriptions
document.getElementById("signPrescriptionBtn").addEventListener("click", function() {
    alert("Prescription has been digitally signed and is now valid.");
});

// Function to display the list of transactions
let transactions = []; // Mock transactions data

document.getElementById("viewTransactionsBtn").addEventListener("click", function() {
    // Display transactions (this is just a mock example)
    transactions.push({
        id: transactions.length + 1,
        type: "Appointment",
        date: new Date().toLocaleString(),
        amount: 50
    });

    let transactionList = transactions.map(transaction => {
        return `<div class="transaction-item">
                    <p><strong>Transaction ID:</strong> ${transaction.id}</p>
                    <p><strong>Type:</strong> ${transaction.type}</p>
                    <p><strong>Date:</strong> ${transaction.date}</p>
                    <p><strong>Amount:</strong> $${transaction.amount}</p>
                </div>`;
    }).join("");

    let transactionSection = document.createElement("div");
    transactionSection.innerHTML = `<h3>Your Transactions</h3>${transactionList}`;
    document.querySelector(".transaction-documentation").appendChild(transactionSection);
});
// Light/Dark Mode toggle
document.getElementById("lightModeBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#333333";
});

document.getElementById("darkModeBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = "#333333";
    document.body.style.color = "#ffffff";
});

// Font size adjustment
let fontSize = 16;
document.getElementById("increaseFontBtn").addEventListener("click", function() {
    fontSize += 2;
    document.body.style.fontSize = fontSize + "px";
});

document.getElementById("decreaseFontBtn").addEventListener("click", function() {
    if (fontSize > 12) {
        fontSize -= 2;
        document.body.style.fontSize = fontSize + "px";
    }
});

// Fasting mode
document.getElementById("fastingModeBtn").addEventListener("click", function() {
    alert("Fasting mode activated. Scheduling appointments during fasting hours.");
    // Here, you would implement the actual logic for fasting mode
});

// Language change (just an alert for now)
document.getElementById("arabicBtn").addEventListener("click", function() {
    alert("Language switched to Arabic.");
    // Change text content of the app based on language selected
});

document.getElementById("frenchBtn").addEventListener("click", function() {
    alert("Language switched to French.");
    // Change text content of the app based on language selected
});
// Function to handle booking treatment abroad
document.getElementById("bookTreatmentBtn").addEventListener("click", function() {
    alert("You can now book your treatment abroad by selecting the best options available.");
});

// Function to access translation services
document.getElementById("accessTranslationBtn").addEventListener("click", function() {
    alert("You can access professional medical translation services to help with your medical documents and consultations.");
});

// Function to view global medical centers
document.getElementById("viewCentersBtn").addEventListener("click", function() {
    alert("Here are the best-rated medical centers worldwide. Choose the one that suits your needs for treatment.");
});

// Function to view the travel guide
document.getElementById("viewTravelGuideBtn").addEventListener("click", function() {
    alert("Here is your guide to medical travel, including visa, flights, and accommodations.");
});
// Function to handle payment with credit card
document.getElementById("creditCardBtn").addEventListener("click", function() {
    alert("You have selected to pay with a credit card. Please enter your card details.");
});

// Function to handle payment with PayPal
document.getElementById("paypalBtn").addEventListener("click", function() {
    alert("You have selected to pay with PayPal. You will be redirected to PayPal's secure payment page.");
});

// Function to handle payment with cryptocurrency
document.getElementById("cryptoBtn").addEventListener("click", function() {
    alert("You have selected to pay with cryptocurrency. Please proceed with your crypto transaction.");
});

// Function to handle bank transfer
document.getElementById("bankTransferBtn").addEventListener("click", function() {
    alert("You have selected to pay via bank transfer. The bank details will be provided.");
});

// Function to get insurance
document.getElementById("insuranceBtn").addEventListener("click", function() {
    alert("You can now get medical travel insurance. Please select the coverage options.");
});

// Function to handle installments
document.getElementById("installmentsBtn").addEventListener("click", function() {
    alert("You can now select an installment plan for your treatment. Choose the one that suits you.");
});

// Function to view payment summary
document.getElementById("viewSummaryBtn").addEventListener("click", function() {
    alert("Here is the summary of your payment, including treatment costs and selected payment method.");
});
// Function to show payment notification
function showPaymentNotification(message, isError = false) {
    const notificationElement = document.getElementById("paymentNotification");
    const notificationMessage = document.getElementById("notificationMessage");
    
    notificationMessage.innerText = message;
    
    // Add error class if there's an error
    if (isError) {
        notificationElement.classList.add("error");
    } else {
        notificationElement.classList.remove("error");
    }
    
    notificationElement.style.display = "block";
    
    // Close notification after 5 seconds
    setTimeout(() => {
        notificationElement.style.display = "none";
    }, 5000);
}

// Function to handle successful payment
document.getElementById("creditCardBtn").addEventListener("click", function() {
    showPaymentNotification("Payment with Credit Card Successful!");
});

// Function to handle failed payment
document.getElementById("paypalBtn").addEventListener("click", function() {
    showPaymentNotification("Payment with PayPal Failed. Please try again.", true);
});
// Initialize available dates for the appointments
const availableDates = [
    "2024-11-25", "2024-11-26", "2024-11-27", "2024-11-28", "2024-11-29"
];

// Function to create the calendar
function generateCalendar() {
    const calendar = document.getElementById("appointmentCalendar");

    availableDates.forEach(date => {
        const dateButton = document.createElement("button");
        dateButton.textContent = date;
        dateButton.classList.add("date-btn");
        
        // Add event listener to handle date selection
        dateButton.addEventListener("click", () => selectDate(date));
        
        calendar.appendChild(dateButton);
    });
}

// Function to handle date selection
let selectedDate = null;

function selectDate(date) {
    selectedDate = date;
    alert(`You selected ${date} for your treatment.`);
}

// Generate the calendar when the page loads
document.addEventListener("DOMContentLoaded", generateCalendar);

// Handle confirmation of appointment
document.getElementById("confirmAppointmentBtn").addEventListener("click", function() {
    if (selectedDate) {
        alert(`Your appointment has been confirmed for ${selectedDate}`);
    } else {
        alert("Please select a date first.");
    }
});
// Function to handle modification of the appointment
let currentAppointmentDate = "2024-11-25"; // Example date

document.getElementById("currentAppointmentDate").textContent = currentAppointmentDate;

// Show modify date section when user clicks "Modify Date"
document.getElementById("modifyDateBtn").addEventListener("click", function() {
    document.getElementById("modifyDateSection").style.display = "block";
    generateModifyCalendar();
});

// Function to generate calendar for modifying appointment
function generateModifyCalendar() {
    const calendar = document.getElementById("appointmentCalendarModify");
    
    availableDates.forEach(date => {
        const dateButton = document.createElement("button");
        dateButton.textContent = date;
        dateButton.classList.add("date-btn");
        
        dateButton.addEventListener("click", () => modifyAppointmentDate(date));
        
        calendar.appendChild(dateButton);
    });
}

// Function to modify appointment date
function modifyAppointmentDate(date) {
    currentAppointmentDate = date;
    alert(`Your appointment has been modified to ${date}`);
}

// Confirm the modification
document.getElementById("confirmModifyBtn").addEventListener("click", function() {
    alert(`Your appointment has been confirmed for ${currentAppointmentDate}`);
});
// Function to show reminder notification
function showReminderNotification() {
    const reminderElement = document.getElementById("reminderNotification");
    reminderElement.style.display = "block";

    // Close notification after 5 seconds
    setTimeout(() => {
        reminderElement.style.display = "none";
    }, 5000);
}

// Simulate a 24-hour reminder before the appointment
setTimeout(() => {
    showReminderNotification();
}, 10000); // 10 seconds for testing, adjust to 24 hours in production
/* Navbar Styling */
#navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #388e3c;
    z-index: 999;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

#navbar ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 1em 0;
}

#navbar a {
    color: white;
    text-decoration: none;
    font-size: 1.2em;
}

#navbar a:hover {
    color: #ff9800;
}
window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
        const position = section.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            section.classList.add("visible");
        }
    });
});
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    themeToggle.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "🌞" : "🌙";
});
