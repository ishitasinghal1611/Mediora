# 🏥 Mediora - Hospital Management System

Mediora is a modern Hospital Management System built using **Node.js**, **Express.js**, **MongoDB Atlas**, **Mongoose**, and **EJS**. It allows hospitals or clinics to efficiently manage patient records with a clean, responsive, and user-friendly interface.

---

## 📸 Preview

### 🏠 Home Page
- Modern dashboard-style landing page
- Displays total registered patients
- Quick navigation to core features

### ➕ Add Patient
- Register new patients
- Capture patient name, admission date, and illness
- Responsive two-column layout

### 📋 Patient Records
- View all registered patients
- Search patients by name
- Edit or delete patient records
- Responsive patient management table

### ✏️ Edit Patient
- Update patient information
- Pre-filled form for easy editing

### ✅ Registration Success
- Beautiful confirmation page
- Displays patient registration number
- Quick navigation options

---

# ✨ Features

- 🏥 Modern Hospital Dashboard UI
- ➕ Register New Patients
- 📋 View Patient Records
- 🔍 Search Patients by Name
- ✏️ Edit Patient Details
- 🗑️ Delete Patient Records
- 📱 Fully Responsive Design
- 🎨 Clean & Modern User Interface
- ☁️ MongoDB Atlas Database Integration

---

# 🛠 Tech Stack

### Frontend
- HTML5
- CSS3
- EJS
- Font Awesome
- Google Fonts (Poppins)

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

---

# 📂 Project Structure

```text
Mediora/
│
├── models/
│   └── Patient.js
│
├── public/
│     ├── home.css
│     ├── form.css
│     ├── patient.css
│     └── success.css
│
├── views/
│   ├── home.ejs
│   ├── hospital.ejs
│   ├── patientDetails.ejs
│   ├── editPatient.ejs
│   └── success.ejs
│
├── hospitalScript.js
├── package.json
├── package-lock.json
├── .gitignore
├── .env (Not included)
└── README.md
```

---

# 🚀 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/ishitasinghal1611/Mediora.git
```

---

## 2. Navigate to Project

```bash
cd Mediora
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Create a `.env` File

Create a file named:

```text
.env
```

Add the following:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

---

## 5. Start the Application

```bash
node hospitalScript.js
```

or

```bash
npm start
```

---

Open your browser:

```
http://localhost:3000
```

---

# 📦 Dependencies

- Express.js
- Mongoose
- EJS
- dotenv

Install manually if required:

```bash
npm install express mongoose ejs dotenv
```

---

# 📱 Screens

- 🏠 Home Dashboard
- ➕ Add Patient
- 📋 Patient Details
- ✏️ Edit Patient
- ✅ Success Page

---

# 🎯 Future Enhancements

- 🔐 User Authentication
- 👨‍⚕️ Doctor Management
- 📅 Appointment Scheduling
- 💊 Prescription Module
- 📊 Analytics Dashboard
- 📄 Export Patient Data (PDF & Excel)
- 🌙 Dark Mode
- 📧 Email Notifications
- 🏥 Multi-Hospital Support

---

# 🔒 Environment Variables

The project uses **dotenv** to securely manage sensitive credentials.

Required variables:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

The `.env` file is excluded from Git using `.gitignore`.

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Add new feature"
```

4. Push the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 👩‍💻 Developer

**Ishita Singhal**

Computer Science - (AI & ML) Student

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future improvements.

---
