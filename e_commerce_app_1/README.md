# E-Commerce Flutter App

A cross-platform mobile e-commerce application built with **Flutter** and **Firebase** for backend services (authentication, Firestore, storage, etc.).

---

## Table of Contents

- [Features](#features)  
- [Screenshots / Demo](#screenshots--demo)  
- [Architecture / Tech Stack](#architecture--tech-stack)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
- [Configuration](#configuration)  
- [Usage](#usage)  
- [Folder Structure](#folder-structure)  
- [Contributing](#contributing)  
- [License](#license)  
- [Author](#author)  

---

## Features

- User authentication (sign up, login, password reset)  
- Product listings (categories, filters, search)  
- Product details page  
- Shopping cart & checkout  
- Order history  
- Admin / vendor interface (CRUD operations for products) *(if implemented)*  
- Push notifications *(if implemented)*  
- Image upload & storage via Firebase Storage  
- Real-time updates with Firestore  
- Responsive UI — works on both Android & iOS  

---

## Screenshots / Demo

<img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/ae944f1f-61af-439c-9014-de53d1277dce" />
<img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/0251c507-7ae7-4a40-8bf9-febaa8354f23" />
<img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/c728a942-c363-4ed8-b4a0-9a76d90aad88" />
<img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/76922b44-10b6-4323-8b9d-d6883d7e582f" />
<img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/620416cb-443d-458e-b08a-b5405a7685b2" />



---

## Architecture / Tech Stack

**Frontend:**  
- Flutter  
- Dart  
- State management (e.g. Provider, Riverpod, Bloc — whichever you used)  

**Backend / Services:**  
- Firebase Authentication  
- Cloud Firestore  
- Firebase Storage  
- (Optionally) Firebase Cloud Functions / Cloud Messaging  

**Other:**  
- Packages / plugins:  
  - `firebase_core`  
  - `firebase_auth`  
  - `cloud_firestore`  
  - `firebase_storage`  
  - (others you used, e.g. image picker, logger, etc.)  

---

## Getting Started

### Prerequisites

- Flutter SDK (version ≥ **_X.Y.Z_**)  
- Dart SDK (comes with Flutter)  
- An editor / IDE like VSCode or Android Studio  
- A Firebase project  

### Installation

1. Clone this repository  
   ```bash
   git clone https://github.com/Manish123Sharma/Projects.git
   cd Projects/e_commerce_app_1
2. Install dependencies
   ```bash
   flutter pub get
3. Run the app
   ```bash
   flutter run

---
### Configuration
   - Go to the [ Firebase Console](https://console.firebase.google.com/) and create a new project (or use an existing one).
   - Add Android and iOS apps to the Firebase project.
     - For Android: provide applicationId (e.g. com.example.app), download google-services.json and place it under android/app/.
     - For iOS: provide iOS bundle id, download GoogleService-Info.plist and add it to Xcode / Runner target.
   - Enable Authentication (Email/Password, and any other methods you want).
   - Set up Firestore and Firebase Storage rules.
   - Optionally configure Firebase Cloud Messaging, Functions, etc.
   - In your Flutter project, ensure android/build.gradle, android/app/build.gradle, ios/Runner/Info.plist etc. contain the necessary configuration for Firebase.

---

### Usage
  - User flow:
    - Sign up / log in
    - Browse products
    - Add products to cart
    - Checkout / place order
    - View past orders
  - Admin / Vendor flow (if implemented):
    - Log in as admin / vendor
    - Add / edit / delete products
    - View orders

---

### Folder Structure

    lib/
      ├── animation/
      │ └── FadeAnimation.dart
      │
      ├── models/
      │ └── product.dart
      │
      ├── pages/
      │ ├── cart.dart
      │ ├── explore.dart
      │ ├── notification.dart
      │ ├── payment.dart # Payment screen
      │ ├── payment_success.dart
      │ ├── product_view.dart
      │ ├── profile.dart
      │ └── search.dart
      │
      └── main.dart

---

### Contributing

  - Contributions are welcome!
  - Feel free to fork this repo, create a new branch, and submit a PR.

### License

  ✅ This README includes:
  - Features  
  - Tech stack  
  - Screenshots section (you can replace with your actual images later)  
  - Setup steps  
  - API reference  
  - Future improvements  

---

### Author

Manish Kumar Sharma

[📧 Email](mailto:your-mksharma256001@gmail.com) | [💼 LinkedIn](https://www.linkedin.com/in/mks001/) | [🌐 GitHub](https://github.com/Manish123Sharma)
