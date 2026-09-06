# Village Cooperative Management & Finance Platform

## 📌 Project Overview

The Village Cooperative Management & Finance Platform is a web-based application developed to digitize and simplify the management of village cooperative societies and Self-Help Groups (SHGs). The platform enables members to manage savings, apply for loans, participate in group decisions, and maintain transparent financial records.

---

## 🚀 Features

### User Module

* User Registration & Login
* Secure Authentication
* Join or Create SHGs
* View Personal Savings & Loans
* Participate in Group Decisions

### Group Management Module

* Create and Manage SHGs
* Add or Remove Members
* Assign Roles (Leader, Treasurer, Member)
* Maintain Group Information

### Savings & Contribution Module

* Record Member Contributions
* Track Total Savings
* Contribution History
* Savings Reports

### Loan Management Module

* Loan Request Submission
* Loan Approval/Rejection
* Repayment Tracking
* Outstanding Balance Monitoring

### Decision & Meeting Module

* Record Meeting Details
* Store Group Decisions
* Voting and Approval Records
* Meeting History

### Admin Module

* Manage Users and Groups
* Monitor Financial Records
* Generate Reports
* Analytics Dashboard

---

## 🛠 Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Security

* JWT Authentication
* bcrypt Password Hashing

---

## 📂 Project Structure

```text
village-cooperative-platform/
│
├── Backend/
│   ├── Server.js
│   ├── authRoute.js
│   ├── groupRoute.js
│   ├── loanRoute.js
│   ├── User.js
│   ├── group.js
│   └── loan.js
│
├── index.html
├── login.html
├── register.html
├── dashboard.html
├── groups.html
├── loan.html
├── app.js
├── styles.css
├── package.json
└── .env
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/village-cooperative-platform.git
cd village-cooperative-platform
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/cooperativeDB
JWT_SECRET=Village@123
```

### Start Application

```bash
npm start
```

Development Mode:

```bash
npm run dev
```

---

## 🌐 API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Groups

```http
GET /api/groups
POST /api/groups
```

### Loans

```http
GET /api/loans
POST /api/loans
PUT /api/loans/:id
```

---

## 📈 Future Enhancements

* Savings Dashboard
* Meeting Management System
* PDF Report Generation
* Email & SMS Notifications
* Role-Based Access Control
* Mobile Responsive UI
* Analytics Dashboard

---

## 🎯 Project Outcome

This platform improves transparency, accountability, and efficiency in managing village cooperatives and self-help groups. It provides a secure digital solution for savings management, loan processing, group administration, and financial reporting.

---

## 👨‍💻 Developer

**Rohan Kumar**

Village Cooperative Management & Finance Platform Project
