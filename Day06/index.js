
// Pattern A: Factory Function
function createSermon(id, title, preacher, date, downloads, duration, topics, language, format) {
    return {
        id,
        title,
        preacher,
        date,
        downloads,
        duration, // Added duration to satisfy Requirement 7 (average duration)
        topics,
        metadata: {
            language,
            format
        }
    };
}

// Pattern B: Object Literal (Manually defining at least one)
const sermon1 = {
    id: 1,
    title: "Walking in Faith",
    preacher: "Pastor John Doe",
    date: "2026-10-01",
    downloads: 120,
    duration: 45,
    topics: ["Faith", "Grace"],
    metadata: { language: "English", format: "MP3" }
};

const sermon2 = createSermon(2, "The Power of Prayer", "Evangelist Mary Smith", "2026-10-05", 340, 50, ["Prayer", "Spiritual Discipline"], "English", "MP4");
const sermon3 = createSermon(3, "Grace Abounds", "Pastor John Doe", "2026-10-12", 250, 40, ["Grace", "Salvation"], "Spanish", "MP3");
const sermon4 = createSermon(4, "Overcoming Fear", "Dr. David Lee", "2026-10-15", 95, 35, ["Hope", "Encouragement"], "English", "MP3");
const sermon5 = createSermon(5, "A Generous Heart", "Pastor John Doe", "2026-10-19", 180, 55, ["Giving", "Community"], "English", "MP4");


let sermonLibrary = [sermon1, sermon2, sermon3, sermon4, sermon5];

console.log("--- Requirement 1: Add, Update, Delete Properties ");
const tempSermon = { id: 99, title: "Temporary Sermon" };
tempSermon.category = "Sunday Service";
tempSermon.title = "Updated Title";    
delete tempSermon.category;            
console.log("Modified tempSermon object:", tempSermon);


// 2. Inspection & Access (Requirement 2)
console.log("\n--- Requirement 2: Inspection and Access ---");


const { title, preacher, metadata: { language } } = sermon1;
console.log(`Destructured: "${title}" by ${preacher} (${language})`);


console.log("Optional Chaining (Valid):", sermon1.metadata?.format);
console.log("Optional Chaining (Missing field handling):", sermon1.publisher?.name);


console.log("Object Keys:", Object.keys(sermon1));

console.log("Has 'downloads' property?:", Object.hasOwn(sermon1, 'downloads'));
console.log("Has 'notes' property?:", Object.hasOwn(sermon1, 'notes'));



// 3. Copying Mechanisms (Requirement 3)
console.log("\n--- Requirement 3: Shallow vs Deep Copying ");

const shallowCopy = Object.assign({}, sermon1);


const deepCopy = structuredClone(sermon1);

shallowCopy.metadata.format = "WAV";
console.log(`Original sermon format after modifying shallow copy: ${sermon1.metadata.format} (Changed!)`);

// Modify nested metadata on the deep copy to prove it does NOT affect the original
deepCopy.metadata.format = "AAC";
console.log(`Original sermon format after modifying deep copy: ${sermon1.metadata.format} (Remained WAV!)`);



// 4. Array Methods & Non-mutating Methods (Requirements 4 & 6)

console.log("\n--- Requirements 4 & 6: Array Manipulations ---");

// Add a sermon
const newSermon = createSermon(6, "The Path to Peace", "Evangelist Mary Smith", "2026-10-22", 410, 42, ["Peace", "Faith"], "English", "MP3");
sermonLibrary.push(newSermon);
console.log(`Added Sermon. Total Count: ${sermonLibrary.length}`);

// Remove a sermon (removes the temporary object or last item if needed; let's pop the last and add back to keep data rich)
const removedSermon = sermonLibrary.pop();
console.log(`Removed last sermon: "${removedSermon.title}"`);
sermonLibrary.push(removedSermon); // Putting it back for subsequent processing


const searchResult = sermonLibrary.find(s => s.preacher === "Dr. David Lee");
console.log("Searched Sermon (Dr. David Lee):", searchResult?.title);


const englishSermons = sermonLibrary.filter(s => s.metadata?.language === "English");
console.log(`Filtered English Sermons Count: ${englishSermons.length}`);

const sortedByDownloadsDesc = sermonLibrary.toSorted((a, b) => b.downloads - a.downloads);
console.log("Non-mutating sort (Highest downloads first):", sortedByDownloadsDesc.map(s => `${s.title}: ${s.downloads}`));


sermonLibrary.sort((a, b) => new Date(a.date) - new Date(b.date));
console.log("Mutated library sorted by Date chronological order:", sermonLibrary.map(s => `${s.date} - ${s.title}`));



// 5. Data Processing (Requirement 5)

console.log("\n--- Requirement 5: Data Processing ---");

// map()
const upperTitles = sermonLibrary.map(s => s.title.toUpperCase());
console.log("Sermon Titles (Uppercase):", upperTitles);

const totalDownloadsAcrossLibrary = sermonLibrary.reduce((acc, curr) => acc + curr.downloads, 0);
console.log("Total combined downloads via reduce():", totalDownloadsAcrossLibrary);


const allUniqueTopics = [...new Set(sermonLibrary.flatMap(s => s.topics))];
console.log("All Unique Topics via flatMap():", allUniqueTopics);


const groupedByPreacher = Object.groupBy(sermonLibrary, sermon => sermon.preacher);
console.log("Grouped by Preacher keys:", Object.keys(groupedByPreacher));



// 6. Report Generation (Requirement 7)

console.log("\n--- Requirement 7: Report Generation ---");

function generateSermonReport(library) {
    if (library.length === 0) {
        return "No sermons available in the library.";
    }

    const totalSermons = library.length;
    
    // Calculate total downloads
    const totalDownloads = library.reduce((sum, s) => sum + s.downloads, 0);
    
    // Calculate average duration
    const totalDuration = library.reduce((sum, s) => sum + s.duration, 0);
    const averageDuration = (totalDuration / totalSermons).toFixed(2);
    
    // Find most-downloaded sermon
    const mostDownloaded = library.reduce((max, s) => s.downloads > max.downloads ? s : max, library[0]);

    console.log("  SERMON LIBRARY REPORT ");
    console.log(`Total Number of Sermons: ${totalSermons}`);
    console.log(`Total Downloads        : ${totalDownloads}`);
    console.log(`Average Sermon Duration: ${averageDuration} minutes`);
    console.log(`Most-Downloaded Sermon : "${mostDownloaded.title}" by ${mostDownloaded.preacher} (${mostDownloaded.downloads} downloads)`);
    
    
    return {
        totalSermons,
        totalDownloads,
        averageDuration,
        mostDownloaded
    };
}

// Execute the report function
generateSermonReport(sermonLibrary);