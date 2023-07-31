# MEET APP

The objective of this project is to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Key Features

- Filter events by city.
- Show/hide event details.
- Specify the number of events.
- Use the app when offline.
- Add an app shortcut to the home screen.
- View a chart showing the number of upcoming events by city.

## Technologies Used

- Created with Create React App (CRA).
- Deployed with GitHub Pages.
- Utilizes AWS services for serverless functionality.

## Stories and Scenarios

### 4.1 Test-Driven Development

**Feature 1: Filter Events by City**

**User Story:** As a user, I should be able to filter events by city so that I can see the list of events that take place in that city.

**Scenario 1:** When the user hasn’t searched for a city, show upcoming events from all cities.

- Given the user hasn’t searched for any city
- When the user opens the app
- Then the user should see a list of all upcoming events

**Scenario 2:** The User should see a list of suggestions when they search for a city.

- Given the main page is open
- When the user starts typing in the city textbox
- Then the user should see a list of cities (suggestions) that match what they’ve typed

**Scenario 3:** User can select a city from the suggested list.

- Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
- When the user selects a city (e.g., “Berlin, Germany”) from the list
- Then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

**Feature 2: Show/Hide an Event's Details**

**User Story:** As a user, I want to expand/hide details of an event to see more information.

**Scenario 1:** An event element is collapsed by default.

- Given the user sees the collapsed Event Info
- When the user clicks on the event panel
- Then the event’s details will not be visible

**Scenario 2:** User can expand an event to see its details.

- Given the user sees the collapsed Event Info
- When the user clicks an event panel
- Then the details will be shown

**Scenario 3:** User can collapse an event to hide its details.

- Given the details of the event are shown
- When the user clicks on the “Close” button
- Then the details close and hide

**Feature 3: Specify Number of Events**

**User Story:** As a user, I want to specify how many events shall be shown while I take a look, because too much information can stress me out.

**Scenario 1:** When the user hasn’t specified a number, 32 is the default number.

- Given the user is in the app and can make a choice of how many events to be shown
- When the user starts a search without an entry
- Then a maximum of 32 events will be shown

**Scenario 2:** User can change the number of events they want to see.

- Given the user can enter a number of events they want to be shown
- When the user enters a number and confirms
- Then the number of events the user asked for will be shown

**Feature 4: Use the App When Offline**

**User Story:** As a user, I want to get a notification when I am offline and still be able to see the details of my last session.

**Scenario 1:** Show cached data when there’s no internet connection.

- Given the user had the app opened with an active internet connection
- When the user opens the app without an internet connection
- Then the data from the last cached session will be shown

**Scenario 2:** Show an error when the user changes the settings (city, time range).

- Given the user opens the app without an internet connection and data from the last session
- When the user changes the city or time range
- Then the user gets an error message because of the missing internet connection

**Feature 5: Data Visualization**

**User Story:** As a user, I want to see how many events are in the city so this could help me find the right event for me if there are many or less.

**Scenario 1:** Show a chart with the number of upcoming events in each city.

- Given the user sees the list of the upcoming events in all cities
- When the user clicks on the “Show me” button
- Then a chart opens with numbers of the upcoming events

## How Serverless Functions Are Used

For the Meet app, serverless functions are used for various purposes. One of the cases for serverless functions in the Meet app is user authentication and authorization. AWS Lambda is used to handle user authentication and authorization, providing a secure and reliable authentication process for our users. Additionally, serverless functions are utilized for image processing. AWS Lambda is used to handle image processing, allowing for efficient processing and storage of images without overloading our servers. This ensures that the app can handle high volumes of media files while providing fast and reliable processing.

Overall, the use of serverless functions in the Meet app allows us to provide users with a fast, scalable, and secure experience. By utilizing serverless technology, we can offer a reliable and efficient application that can handle high volumes of traffic without sacrificing performance or security.
