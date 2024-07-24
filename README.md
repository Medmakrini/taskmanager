# Task Manager App

Task Manager is a React Native application that helps users manage their daily tasks efficiently. The app supports features like adding, deleting, and marking tasks as complete or incomplet.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Deployment](#deployment)

## Features

- Add, delete, and mark tasks as complete/incomplete.
- A default task that redirects to a LinkedIn profile upon completion.
- Persist tasks using AsyncStorage.
- Responsive and animated UI with react-native-animatable.
- Context API for state management.

## Screenshots

     <p>
      <img src="https://github.com/Medmakrini/taskmanager/blob/main/assets/Demo/IMG_3179.PNG" width="300" />
      <img src="https://github.com/Medmakrini/taskmanager/blob/main/assets/Demo/IMG_3180.PNG" width="300" />
    </p>


## Technologies Used

- **React Native:** For building the mobile application.
- **React Native Paper:** For UI components.
- **AsyncStorage:** For persistent storage of tasks.
- **react-native-animatable:** For animations.
- **UUID:** For generating unique task IDs.
- **React Navigation:** For navigating between screens.
- **TypeScript:** For type safety and better development experience.

## Setup Instructions

### Prerequisites

- Node.js (>=16.x)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Medmakrini/taskmanager.git
    cd taskmanager
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the project:
    ```bash
    npm start
    # or
    yarn start
    ```

4. Run on a device or emulator:
    - For iOS: `npm run ios` or `yarn ios`
    - For Android: `npm run android` or `yarn android`

## Deployment

We will use Expo Application Services (EAS) for creating production builds for Android and iOS.

### Android

1. Configure EAS:
    ```bash
    eas build:configure
    ```

2. Create an Android build:
    ```bash
    eas build -p android --profile production
    ```

3. Download the APK/AAB file from the Expo dashboard.

4. Test the build on an Android device.

5. Publish the build to the Google Play Store.

### iOS

1. Configure EAS:
    ```bash
    eas build:configure
    ```

2. Create an iOS build:
    ```bash
    eas build -p ios --profile production
    ```

3. Download the IPA file from the Expo dashboard.

4. Test the build on an iOS device using TestFlight.

5. Submit the build to the App Store for review.

---
