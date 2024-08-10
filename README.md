# [Simple Weather App - Deployed Website](https://amrosimpleweather.netlify.app/)

![demo](demo1.gif)

**A unique twist on weather forecasting :snowflake:, inspired by my love for travel and exploration &#x1F6EB;:**

<br/>

This React application creatively combines two distinct APIs—one for weather data and the other for photo searches—to deliver an immersive user experience.

The app customizes the background with iconic images of the selected city :city_sunset: and dynamically applies CSS filters that reflect the current weather conditions :sun_behind_rain_cloud: (rainy, snowy, etc.). This enhances the mood and "temperature feel" as users interact with the app.

# Technical Highlights

- **Dynamic Background Colors**: The app utilizes the dominant color extracted from the photo search API to set a temporary background color while the target image loads. This ensures a seamless visual experience, preventing the disruptive white screen that can occur on slower connections. A fallback universal background is also provided in case of API issues.

- **Scoped Styles with CSS Modules**: CSS modules were employed to create scoped styles, enhancing component reusability and simplifying future maintenance or expansion.

- **Local Time Calculation**: Custom JavaScript logic calculates the local time :watch: based on the timezone data from the weather API. This approach was chosen over relying on external libraries like moment.js for a more tailored and lightweight solution.

- **User-Friendly Error Handling**: The app is designed to handle user errors gracefully, guiding users without intrusive alerts or modals. (*Because who likes unexpected pop-ups? :man_facepalming:*)

<img src="demo2.gif" width="600" />

## Installation and Launch

To install and launch the Simple Weather App, follow these steps (make sure you are running Node.js version 16.11.1):

1. **Clone the repository to your local machine:**
    ```bash
    git clone <repo_path>
    ```

2. **Navigate to the project directory:**
    ```bash
    cd Simple-Weather-App
    ```

3. **Install the dependencies:**
    ```bash
    npm install
    ```

4. **Launch the app:**
    ```bash
    npm start
    ```

5. **Open your web browser and visit `http://localhost:3000` to view the app.**

And that's it! You've successfully installed and launched the Simple Weather App. Enjoy exploring the weather and stunning cityscapes!
