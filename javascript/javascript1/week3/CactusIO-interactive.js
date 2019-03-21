// CactusIO-interactive (Smart phone usage app)

var activities = [];

// adding new activity to the activities array
function addActivity(date, activity, duration) {
    var newActivity = new Object();
    newActivity.date = date;
    newActivity.activity = activity;
    newActivity.duration = duration;
    activities.push(newActivity);
}

// Show my Status
var usage = 0;
function showStatus() {
    var activitiesLength = activities.length;
    if (activitiesLength === 0) {
        console.log("Add some activities before calling showStatus");
    }
    for (i = 0; i < activitiesLength; i++) {
        usage += activities[i].duration;
    }
    console.log("You have added " + activitiesLength + " activities. They amount to " + usage + " min. of usage.");

    // Usage Limit
    var usageLimit = 140;
    if (usageLimit <= usage) { console.log("You have reached your limit, no more smartphoning for you!"); }
}

// hightest usage activity
function getHighestUsageActivity() {
    var activitiesLength = activities.length;
    if (activitiesLength === 0) {
        console.log("Add some activities before calling highest usage activity");
    }
    var sortedArray = activities.sort(function (a, b) { return b.duration - a.duration });
    console.log("This highest usage of activity is " + sortedArray[0].duration + "mins.")
    console.log(sortedArray[0]);
}

console.log("Adding activity to activities array. ");
addActivity("21-03-2019", "Meditation", 30);
addActivity("21-03-2019", "Cooking", 45);
addActivity("21-03-2019", "Playing with kid", 30);
addActivity("21-03-2019", "Coding", 30);
console.log(activities);

showStatus();
getHighestUsageActivity();
