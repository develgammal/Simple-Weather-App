[Deployed Website](https://amrosimpleweather.netlify.app/)

![demo](demo1.gif)

**Expanding upon the weather concept :snowflake:, and drawing from my passion to travel and explore the world	&#x1F6EB;:**

<br/>

I conceptualized, UI/UX designed and coded this REACT App which depends on connecting two completely unrelated APIs
one for weather conditions and the other for photo search
and linking them together 🛠 to provide an engaging user experience.

The App provides a custom background with an iconic picture of a given city 	:city_sunset:
and by looping over custom css filters to paint the sky according to the weather conditions :sun_behind_rain_cloud:
(rainy, snowy, etc..), it gives the user an authentic experience and "temperature feel" when they interact with the app.

# Technical Features

The Color object property from the photo search API which extracts the dominant color tone from the provided picture proved to be useful under the hood 👌,
by providing a temporary background color for users with slower connections until the target picture is loaded, and priming their eyes for the picture they 
are about to see with a color similar to the picture, instead of the awkward transient white screen which breaks the flow :film_strip:; needless to say, backup default universl background was provided in case the search API encountered an issue or broke for any reason.

CSS modules were used in this project to provide scoped styles making the components more reusable for future maintainability / expansion.

Some raw JS logic had to be employed to calculate the local time :watch: in the chosen location 
based on the provided timezone object property from the weather API which I found to be more reliable than depending on external libraries such as moment.js which is just a purely personal preference.

The App is also smart enough to correct and swiftly guide the user if they make a mistake or promp them if an error occurs (*by swifltly I mean no alerts or modals! I personally hate coming across alerts in a website! :man_facepalming:*)

<img src="demo2.gif" width="600" />
