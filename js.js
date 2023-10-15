
function secondsToMinutesAndHours(posted_date) {
    const hours = Math.floor(posted_date / (60 * 60));
    console.log(hours);
    const divisor_for_minutes = posted_date % (60 * 60);
    console.log(divisor_for_minutes);
    const minutes = Math.floor(divisor_for_minutes / 60);
    console.log(minutes);
    const object = {
        "hrs": hours,
        "min": minutes,
    };
    return object;
}
const posted_date = 16278; // Example: 12345 seconds
const result = secondsToMinutesAndHours(posted_date);
// console.log(secondsToMinutesAndHours(posted_date));
// // console.log(result);