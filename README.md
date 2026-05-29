# Habit Tracker App

## Overview

This is a simple Habit Tracker mobile application built using React Native and Expo.

The app allows users to:

* Add daily habits
* Mark habits as completed
* Track current streaks
* View last 7 days history for each habit

The project was created as part of a React Native development assignment.

---

## Features

* Add new habits
* Toggle habit completion status
* Daily streak calculation
* 7-day history view
* Local data storage using AsyncStorage
* Simple and clean user interface

---

## Tech Stack

* React Native
* Expo
* React Navigation
* AsyncStorage

---

## Streak Logic

A streak is defined as the number of consecutive days up to and including today where the habit was marked as completed.

If a day is missed, the streak resets.

Example:

* Done today + done yesterday → streak continues
* Done today but yesterday missed → streak becomes 1

---

## Project Structure

```text
screens/
components/
utils/
```

### Main Screens

* Habit List Screen
* Add Habit Screen
* History Screen

---

## Local Storage

Habit data is stored locally using AsyncStorage.

Each habit stores:

* habit id
* habit name
* completion history by date

---

## Running the Project

Install dependencies:

```bash
npm install
```

Start Expo server:

```bash
npx expo start
```

For Codespaces or remote environments:

```bash
npx expo start --tunnel
```

---

## APK Build

The APK was generated using Expo EAS Build.

---

## Author

Yash Wardhan Pandey
