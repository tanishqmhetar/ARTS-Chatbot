const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");


function appendMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerHTML = message;
    chatLog.appendChild(messageElement);
}

function scrollToBottom() {
    chatLog.scrollTop = chatLog.scrollHeight;
}

function askQuestion() {
    const userQuestion = userInput.value;
    appendMessage(userQuestion, "user");

    const answer = getAnswer(userQuestion);
    typeText(answer, "bot");

    userInput.value = "";
}

const suggestedQuestions = [
    "How many students are there in SITP?",
    "What courses are offered at SITP?",
    "What are the placement companies for SITP?"
];

const suggestionButton = document.getElementById("suggestionButton");
suggestionButton.addEventListener("click", () => {
    if (document.querySelector(".suggestions")) {
        document.querySelector(".suggestions").remove();
    } else {
        displaySuggestions();
    }
});

function displaySuggestions() {
    const suggestionContainer = document.createElement("div");
    suggestionContainer.classList.add("suggestions");

    suggestedQuestions.forEach(question => {
        const suggestionItem = document.createElement("div");
        suggestionItem.textContent = question;
        suggestionItem.addEventListener("click", () => {
            userInput.value = question;
            suggestionContainer.remove();
        });
        suggestionContainer.appendChild(suggestionItem);
    });

    userInput.parentNode.insertBefore(suggestionContainer, userInput.nextSibling);
    suggestionButton.parentNode.insertBefore(suggestionContainer, suggestionButton.nextSibling);
}

const rateBtn = document.getElementById("ratebtn");
const contactBtn = document.getElementById("contactbtn");
const emojiMenu = document.getElementById("emoji-menu");
const contactMenu = document.getElementById("contact-menu");

rateBtn.addEventListener("click", () => {
    emojiMenu.classList.toggle("show");
});
contactBtn.addEventListener("click", toggleContactMenu);

function toggleEmojiMenu() {
    emojiMenu.classList.toggle("show");
    contactMenu.classList.remove("show");
}

function toggleContactMenu() {
    contactMenu.classList.toggle("show");
    emojiMenu.classList.remove("show");
}

function selectEmoji(emoji) {
    const feedbackMessage = document.createElement("div");
    feedbackMessage.textContent = "Thank you for your feedback";
    feedbackMessage.classList.add("feedbackmsg");
    chatLog.appendChild(feedbackMessage);

    setTimeout(() => {
        feedbackMessage.remove();
    }, 1500);

    emojiMenu.classList.remove("show");
}

function getAnswer(question) {
    const greetings = ["hello", "hey", "greetings", "good morning", "good afternoon", "good evening", "whats up", "what's up", "sup", "hi"];

    const capability = ["can you do", "you can do", "help me", "things you can do", "what are you capable of", "what do you know"];

    const students = ["student count", "students count", "student's count", "how many students", "how many students study", "count of students", "students","strength","student"];

    const faculties = ["faculty count", "how many teachers", "count of teachers", "count of faculty", "faculties", "how much faculty", "how many faculty"];

    const courses = ["intake", "which courses", "courses", "courses in SITP", "types of courses", "department", "departments"];

    const companies = ["placement companies", "placement", "companies", "Campus placements"];

    const chairman = ["who is chairman SITP", "chairman", "who is chairman of SITCOE", "founder"];

    const director = ["who is director", "who is the director", "director of SITP", "director"];

    const principal = ["who is principal of SITP", "principal of SITP", "principal", "principle"];

    const locations = ["location of SITP", "where SITP is located", "location of SIT", "location"];

    const meaning = ["your name", "meaning of your name", "what is A.R.T.S.", "what is arts", "what is A R T S", "what is full form of A.R.T.S.", "what is full form", "full form"];

    const facilities = ["facilities", "what are the facilities", "facility", "aminities","campus"];

    const AIHOD = ["aiml hod", "who is hod of ai", "who is hod of aiml", "hod of aiml", "hod of ai&ml", "ai&ml hod", "ai & ml hod", "ai ml hod", "head of aiml", "hod of artificial intelligence and machine learning", "hod of artificial intelligence"];

    const COHOD = ["co hod", "who is hod of co", "hod of co", "hod of computer engineering"];

    const CSITHOD = ["csit hod", "who is hod of csit", "hod of csit", "hod of computer Science and Information Technology"];

    const ECSHOD = ["ecs hod", "who is hod of ecs", "hod of ecs", "hod of Electronics and computer science"];

    const EEHOD = ["ee hod", "who is hod of ee", "hod of ee", "hod of Electrical Engineering"];

    const MEHOD = ["me hod", "who is hod of me", "hod of me", "hod of Mechanical Engineering"];

    const CEHOD = ["ce hod", "who is hod of ce", "hod of ce", "hod of Civil Engineering"];

    const MKHOD = ["mk hod", "who is hod of mk", "hod of mk", "hod of Mechatronics Engineering"];

    const AOHOD = ["ao hod", "who is hod of ao", "hod of ao", "hod of Automation and Robotics Engineering"];

    const SHHOD = ["science and humanities hod", "hod of sciene and humanities"];

    const package = ["package", "salary"];

    const vision = ["what is the vision", "vision"];

    const mission = ["what is the mission", "mission"];

    const objective = ["what is the objective", "objective"];

    const contact = ["about sitp college", "about us","about", "college information"];

    const fees = ["what are the fees", "fee", "fees strucure", "total fees"];

    const hostel = ["hostel", "hostels"];

    const labs = ["how many labs", "total no of labs", "total labs", "lab"];

    const website = ["college website", "sitp website", "website","college"];

    const awards = ["awards", "achievement"];

    const library = ["library"];

    const student_chapter = ["student chapter", "student association"];

    const founded = ["founded", "established", "invented"];

    const bye = ["bye", "see you soon", "see you later", "good night"];

    const message = question.toLowerCase();

    if (checkKeywords(message, greetings)) {
        return greetUser();
    }

    else if (checkKeywords(message, capability)) {
        return getCapability();
    }

    else if (checkKeywords(message, students)) {
        return getStudentCount();
    }

    else if (checkKeywords(message, faculties)) {
        return getFacultyCount();
    }

    else if (checkKeywords(message, courses)) {
        return getCourses();
    }

    else if (checkKeywords(message, companies)) {
        return getCompanies();
    }

    else if (checkKeywords(message, chairman)) {
        return getChairman();
    }

    else if (checkKeywords(message, director)) {
        return getDirector();
    }

    else if (checkKeywords(message, principal)) {
        return getPrincipal();
    }

    else if (checkKeywords(message, locations)) {
        return getLocation();
    }
    else if (checkKeywords(message, meaning)) {
        return getMeaning();
    }
    else if (checkKeywords(message, facilities)) {
        return getFacility();
    }
    else if (checkKeywords(message, AIHOD)) {
        return getAIHOD();
    }
    else if (checkKeywords(message, COHOD)) {
        return getCOHOD();
    }
    else if (checkKeywords(message, CSITHOD)) {
        return getCSITHOD();
    }
    else if (checkKeywords(message, ECSHOD)) {
        return getECSHOD();
    }
    else if (checkKeywords(message, EEHOD)) {
        return getEEHOD();
    }
    else if (checkKeywords(message, MEHOD)) {
        return getMEHOD();
    }
    else if (checkKeywords(message, CEHOD)) {
        return getCEHOD();
    }
    else if (checkKeywords(message, MKHOD)) {
        return getMKHOD();
    }
    else if (checkKeywords(message, AOHOD)) {
        return getAOHOD();
    }
    else if (checkKeywords(message, SHHOD)) {
        return getSHHOD();
    }
    else if (checkKeywords(message, package)) {
        return getpackage();
    }
    else if (checkKeywords(message, vision)) {
        return getvision();
    }
    else if (checkKeywords(message, mission)) {
        return getmission();
    }
    else if (checkKeywords(message, objective)) {
        return getobjective();
    }
    else if (checkKeywords(message, contact)) {
        return getcontact();
    }
    else if (checkKeywords(message, fees)) {
        return getfees();
    }
    else if (checkKeywords(message, hostel)) {
        return gethostel();
    }
    else if (checkKeywords(message, labs)) {
        return getlabs();
    }
    else if (checkKeywords(message, website)) {
        return window.open("https://www.sitpolytechnic.ac.in", "myweb")
    }
    else if (checkKeywords(message, library)) {
        return window.open("https://www.sitpolytechnic.ac.in/library/", "myweb")
    }
    else if (checkKeywords(message, awards)) {
        return window.open("https://www.sitpolytechnic.ac.in/awards-2/", "myweb")
    }
    else if (checkKeywords(message, student_chapter)) {
        return window.open("https://www.sitpolytechnic.ac.in/student-chapter/", "myweb")
    }
    else if (checkKeywords(message, founded)) {
        return getfounded();
    }
    else if (checkKeywords(message, bye)) {
        return getbye();
    }
    return "I don't have an answer to that question. Click on '💡' (Suggestion button) for pre-defined questions.";
}


function checkKeywords(message, keywords) {
    for (const keyword of keywords) {
        if (message.includes(keyword)) {
            return true;
        }
    }
    return false;
}

function typeText(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);

    const textElement = document.createElement("p");
    messageElement.appendChild(textElement);
    chatLog.appendChild(messageElement);

    let index = 0;
    const typingInterval = 30;

    function typeCharacter() {
        if (index < message.length) {
            textElement.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeCharacter, typingInterval);
        }
    }

    typeCharacter();
    scrollToBottom();
}

const clearChatButton = document.getElementById("clear-chat-button");
clearChatButton.addEventListener("click", clearChat);

function clearChat() {
    chatLog.innerHTML = '';
}

function greetUser() {
    const randomGreetings = [
        "Hey there, how may I assist you?",
        "Hello! What can I do for you today?",
        "Greetings! How can I help you?",
        "Hi, how can I assist you?",
        "Good day! What's on your mind?",
    ];

    const randomIndex = Math.floor(Math.random() * randomGreetings.length);

    return randomGreetings[randomIndex];
}

function getCapability() {
    return "I'm here to assist you with information related to SITP.";
}

function getStudentCount() {
    return "There are 2000+ students in SITP.";
}

function getFacultyCount() {
    return "There are 120+ faculties in SITP.";
}

function getCourses() {
    const courses = [
        "• Civil Engineering (60 intake)",
        "• Electrical Engineering (120 intake)",
        "• Computer Engineering (180 intake)",
        "• Mechanical Engineering (120 intake)",
        "• Computer Science & Information Technology (60 intake)",
        "• Electronics & Computer Engineering (60 intake)",
        "• Science & Humanities",
        "• Mechatronics Engineering (60 intake)",
        "• Automation & Robotics (60 intake)",
        "• Artificial Intelligence & Machine Learning (60 intake)"
    ];

    return courses.join("\n\n");
}

function getCompanies() {
    const companies = [
        "• SIEMENS",
        "• YAZAKI",
        "• L&T Infotech",
        "• Cummins",
        "• BHARAT FORGE",
        "• L&T Heavy Engineering",
        "• TE connectivity",
        "• BOSCH",
        "• Mphasis",
        "• ThyssenKrupp",
        "• Emcure",
        "• Cogeme s&t",
        "• INDO SCHÖTTLE",
        "• REGEN POWERTECH",
        "• MAGNA COSMA INTERNATIONAL",
        "• IFB",
        "• FUKOKU",
        "• Mahindra",
        "• SPICER",
        "• Pricol",
        "• ARWADE",
        "• SUPREME",
        "• OWENS CORNING",
        "• DIFFUSION",
        "• PERENNIAL",
        "• JOHN DEERE",
        "• INFOTECH",
        "• INFOSYS"
    ];

    return companies.join("\n\n");
}

function getChairman() {
    return "Hon'ble Shri Dr. Rajendra Patil (Yadravkar).";
}

function getDirector() {
    return "Hon. Mr. Anil Bagane.";
}

function getPrincipal() {
    return "Mr. B. S. Tashildar.";
}

function getLocation() {
    return "Jaysinghpur-Sangli Naka, Yadrav, (Ichalkaranji) - 416121 Tal- Shirol Dist - Kolhapur Maharashtra, India.";
}

function getMeaning() {
    return "My name is A.R.T.S. which is the abbrivation of the name of my developers. The full form of my name is Aayush Ruturaj Tanishq Samarth.";
}

function getFacility() {
    const facilities = [
        "• Campus - 5 acres of campus size including Paking Space, Internet (wifi campus), Rest Rooms, etc.",
        "• Workshop - 942.93 sq.m in size. Including well equiped latest machinery like Machine Shop, Welding, Fitting, Carpentry / Pattern Making, Foundry, Smithy, Plumbing,etc",
        "• Transport - well maintained buses.",
        "• Sports - Every year our students participate in various Zonal & Inter-Zonal sports activities conducted at different places.",
        "• Seminar Hall - with seating capacity of 200. Hall is Digitally equipped and fitted with LCD & Speakers.",
        "• Production Center - includes CNC, 3D printer, robots.",
        "• Hostel - well furnished, spacious, triple Occupancy Rooms are available for both BOYS and GIRLS separtely having 60 seats capacity each.",
        "• Health Care - a fully functional health center with a doctor is in place to offer medical care for minor ailments and first aid.",
        "• Gymnasium - a state-of-the art single station gym with modern, imported equipment.",
        "• Central Computing - several Labs including Windows supported computers with 50 Mbps (Airtel), 500 Mbps (BSNL) and 10 Mbps (BSNL) Lease Line Link, Total 570 Mbps of internet speed.",
        "• Canteen - the college is equipped with a fully functional vegetarian canteen to serve hygienically prepared food to the staff and students.",
        "• Board Room - A well furnished fully Air-conditioned Board Room with Internet Facility, Round table and Executive chairs with 50 capacity with all modern audio visual gadgets."
    ];
    return facilities.join("\n\n");
}

function getAIHOD() {
    return "H.O.D. of AI and ML department is Mrs. A. B. Bedkyale (8421931465).";
}

function getCOHOD() {
    return "H.O.D. of CO department is Mr. R. M. Patil (9405258805)."
}

function getCSITHOD() {
    return "H.O.D. of CS and IT department is Mrs. S. B. Bahirgunde (9970195253)."
}

function getECSHOD() {
    return "H.O.D. of E&TC department is Mr. P. P. Shetti (8600745004)."
}

function getEEHOD() {
    return "H.O.D. of EE department is Mr. C. S. Rawal (9021652242)."
}

function getMEHOD() {
    return "H.O.D. of ME department is Mr. N. S. Patil (8888049108)."
}

function getCEHOD() {
    return "H.O.D. of CE department is Mr. M. K. Chavan (9096300167)."
}

function getMKHOD() {
    return "H.O.D. of MK department is Mr. S. N. Bodake (7276387232)."
}

function getAOHOD() {
    return "H.O.D. of AO department is Mr. A. K. Magdum (9764878750)."
}

function getSHHOD() {
    return "H.O.D. of Science & Humanities department is Mr. K. D. Aaglawane (9766949920)."
}
function getpackage() {
    const packagee = [
        "• Highest package is ₹ 7 lakh.",
        "• Average package is ₹ 3 lakh.",
    ];
    return packagee.join("\n\n");
}
function getvision() {
    return "To be a center of excellence in technical education by using cutting edge technology that produces competent engineers of today and tomorrow to serve the society."
}
function getmission() {
    const mission = [
        "• To impart quality education by implementing state-of- the-art teaching-learning methods to enrich the academic competency, credibility and integrity of the students.",
        "• To facilitate a conducive ambience and infrastructure to develop professional skills and nurture innovation in students.",
        "• To inculcate sensitivity towards society, respect for environment and promote high standards of ethics.",
    ];
    return mission.join("\n\n");
}
function getobjective() {
    return "We at Sharad Institute of Technology, Polytechnic strive to achieve stakeholder satisfaction by providing quality education and training in science, engineering and technology in a pleasant and disciplined environment through."
}
function getcontact() {
    const contact = ["Sharad Institute of Technology, Polytechnic Wing is a self-financing Polytechnic, established in the year 2008 and founded by Hon’ble Shri. Rajendra Patil (Yadravkar), Chairman of Shree Shamrao Patil (Yadravkar) Educational & Charitable Trust’s also Sharad Sugar factory at Narade and leading many other organizations in Kolhapur district. It has been approved By All India Council for Technical Education, New Delhi and the Government of Maharashtra."
    ];
    return contact.join("\n\n");
}
function getfees() {
    const fees = [
        "• Total fees - ₹ 55,000",
        "• MANAGEMENT - ₹ 55,000",
        "• SC/ST - ₹ 2,000",
        "• OBC/SBC - ₹ 7,500",
        "• OPEN - ₹ 55,000",
        "• NTB - ₹ 7,000",
    ];
    return fees.join("\n\n");
}
function gethostel() {
    return "Well furnished, spacious, triple Occupancy Rooms are available for both BOYS and GIRLS separtely having 60 seats capacity each. Medical & Postal Communication Facilities are also made available for both Hostellers. With Fees - ₹ 20,000."
}
function getlabs() {
    return "There are 50+ labs in SITP"
}
function getfounded() {
    return "Sharad Institute of Technology, Polytechnic Wing is a self-financing Polytechnic, established in the year 2008 and founded by Honorable Shri. Rajendra Patil (Yadravkar), Chairman of Shree Shamrao Patil (Yadravkar) Educational & Charitable Trust's and leading many other organizations in Kolhapur district."
}
function getbye() {
    return "Goodbye, have a great day!"
}