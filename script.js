// JavaScript Practical Home Task — Event Booking Summary

// Practise string methods, concatenation, and template literals by creating an event booking summary.

// Setup

// 1. Create a folder named `event-booking-home-task`.
// 2. Inside it, create `index.html` and `script.js`.
// 3. Connect `script.js` to `index.html`.
// 4. Write your JavaScript in `script.js` and display all results using **`console.log()`.
//       Starting Values:

// js
// const guestName = "   Amina Yusuf   ";
// const eventName = "Creative Meetup";
// const eventDate = "24 October 2026";
// const venue = "Lagos Community Hall";
// const activities = "Design,Photography,Writing";
// const bookingId = "83";
// const ticketPrice = 2500;
// const ticketQuantity = 2;

// Task 1 — Prepare and Explore the Booking Details

const eventDate = "24 October 2026";
const venue = "Lagos Community Hall";
const ticketPrice = 2500;
const ticketQuantity = 2;

// 1. Remove the spaces at both ends of `guestName`. Store the result in `cleanName`.
const guestName = "   Amina Yusuf   ";
const cleanName = guestName.trim();
console.log(cleanName);

// 2. Display `cleanName` in uppercase and lowercase.
console.log(cleanName.toUpperCase());
console.log(cleanName.toLowerCase());

// 3. Display the length of `cleanName`.
console.log(cleanName.length);

// 4. Use `charAt()` to display the first character of `cleanName`.
console.log(cleanName.charAt(0));

// 5. Check whether `eventName` includes `"Meetup"`.
const eventName = "Creative Meetup";
console.log(eventName.includes("Meetup"));

// 6. Check whether `eventName` starts with `"Creative"` and ends with `"Meetup"`.
console.log(eventName.startsWith("Creative"));
console.log(eventName.endsWith("Meetup"));

// 7. Use `indexOf()` to find where `"Meetup"` begins in `eventName`.
console.log(eventName.indexOf("Meetup"));

// 8. Use `substring()` to extract `"Creative"` from `eventName`.
console.log(eventName.substring(0, 8));

// 9. Split `activities` into an array of three activities.
const activities = "Design,Photography,Writing";
console.log(activities.split(","));

// 10. Use `padStart()` to format `bookingId` as `"0083"`. Store the result in `formattedBookingId`.
const bookingId = "83";
const formattedBookingId = bookingId.padStart(4, "0");
console.log(formattedBookingId);

// 11. Use `padEnd()` to produce `"83***"` from `bookingId`.
console.log(bookingId.padEnd(5, "*"));

// 12. Use `repeat()` to display `"See you there! "` three times.
console.log("See you there! ".repeat(3));

// Task 2 — Join Strings

// Create this message in two ways: using `+` and using `concat()`.

// Message:
// Welcome, Amina Yusuf! Your booking for Creative Meetup on 24 October 2026 at Lagos Community Hall has been received. We look forward to seeing you!
// Use `cleanName`, `eventName`, `eventDate`, and `venue` instead of typing their values directly.
// Store the messages in `bookingMessage` and `secondMessage`, then display both.

//using +
const bookingMessage =
	"Welcome, " +
	cleanName +
	"! Your booking for " +
	eventName +
	" on " +
	eventDate +
	" at " +
	venue +
	" has been received. We look forward to seeing you!";

//using concat
const secondMessage = "Welcome,".concat(
	" ",
	cleanName,
	"! Your booking for ",
	eventName,
	" on ",
	eventDate,
	" at ",
	venue,
	" has been received. We look forward to seeing you!",
);

console.log(bookingMessage);
console.log(secondMessage);

// Task 3 — Use a Template Literal

// Use one template literal to create this sentence:

// Sentence:
// Amina Yusuf booked 2 tickets for Creative Meetup on 24 October 2026 at Lagos Community Hall. The booking ID is 0083, and the total cost is ₦5000.
// Insert the variable values using `${}`. Use `formattedBookingId` for the booking ID and calculate the total cost inside `${}` using `ticketPrice * ticketQuantity`.
// Store the sentence in `bookingSummary` and display it.

const bookingSummary = `${cleanName} booked ${ticketQuantity} tickets for ${eventName} on ${eventDate} at ${venue}. The booking ID is ${formattedBookingId}, and the total cost is ₦${ticketPrice * ticketQuantity}.`;
console.log(bookingSummary);

// Task 4 — Update the Event Name

// Use `replace()` to change `"Creative"` to `"Community"` in `eventName`.
// Display the result, then display the original `eventName` to confirm that it has not changed.

console.log(eventName.replace("Creative", "Community"));
console.log(eventName);

// Submission:

// 1. Check that your code runs correctly in the browser console.
// 2. Add short comments explaining your work.
// 3. Upload the complete `event-booking-home-task` folder to your GitHub repository.
// 4. Send me the GitHub link to the folder so I can review your work.

// Remember: Indexes start at `0`, and spaces count. All outputs should appear in the browser console.
