export const quizzes = [
    {
      id: "comp-basics-1",
      category: "computer-basics",
      title: "What is a Computer?",
      questions: [
        {
          text: "What are the tangible, physical parts of a computer system called?",
          options: ["Software", "Hardware", "Firmware", "Vaporware"],
          correctAnswer: 1,
        },
        {
          text: "Which of the following is NOT a fundamental action of a computer?",
          options: ["Inputting data", "Processing data", "Generating electricity", "Storing data"],
          correctAnswer: 2,
        },
        {
          text: "What tells a computer's physical hardware what to do?",
          options: ["The monitor", "The power supply", "Software", "The user manual"],
          correctAnswer: 2,
        },
        {
          text: "Which of the following is an example of *application* software?",
          options: ["Windows", "macOS", "A word processor", "The operating system"],
          correctAnswer: 2,
        },
        {
          text: "What is the software that manages the computer's hardware and basic operations called?",
          options: ["Application Software", "System Software", "A web browser", "A game"],
          correctAnswer: 1,
        },
      ],
    },
    {
      id: "comp-basics-2",
      category: "computer-basics",
      title: "Parts of a Computer",
      questions: [
        {
          text: "What is the primary purpose of a computer monitor?",
          options: ["To execute instructions", "To display visual information", "To store files long-term", "To connect all components"],
          correctAnswer: 1,
        },
        {
          text: 'Which component is often called the "brain" of the computer?',
          options: ["RAM (Memory)", "Hard Drive", "CPU (Central Processing Unit)", "Motherboard"],
          correctAnswer: 2,
        },
        {
          text: "What is the computer's short-term memory called?",
          options: ["SSD (Solid-State Drive)", "GPU (Graphics Card)", "PSU (Power Supply)", "RAM (Random-Access Memory)"],
          correctAnswer: 3,
        },
        {
          text: "What is the main circuit board that connects all of the computer's components together?",
          options: ["CPU", "RAM", "Motherboard", "Power Supply"],
          correctAnswer: 2,
        },
        {
          text: "Which component is responsible for rendering images and video to be displayed on the monitor?",
          options: ["CPU", "RAM", "GPU (Graphics Card)", "Hard Drive"],
          correctAnswer: 2,
        },
      ],
    },
    {
      id: "mobile-basics-1",
      category: "mobile-basics",
      title: "iPhone Fundamentals",
      questions: [
        {
          text: "On an iPhone with Face ID, how do you return to the Home Screen?",
          options: ["Swipe down from the top-right", "Swipe up from the bottom edge", "Double-press the side button", "Press the volume button"],
          correctAnswer: 1,
        },
        {
          text: "Where can you find quick access to controls like Wi-Fi, brightness, and volume?",
          options: ["The App Store", "The Settings App", "The Control Center", "The Notification Center"],
          correctAnswer: 2,
        },
        {
          text: "How do you take a screenshot on a modern iPhone (with Face ID)?",
          options: ["Press the side button and volume up button at the same time", "Press the side button and volume down button at the same time", "Hold down the side button for 3 seconds", 'Tell Siri to "take a screenshot"'],
          correctAnswer: 0,
        },
        {
          text: "What is the official place to download new apps for an iPhone?",
          options: ["The Internet", "The App Store", "The Settings App", "Siri"],
          correctAnswer: 1,
        },
        {
          text: "Which voice assistant is built into the iPhone?",
          options: ["Alexa", "Google Assistant", "Cortana", "Siri"],
          correctAnswer: 3,
        },
      ],
    },
    {
      id: "mobile-basics-2",
      category: "mobile-basics",
      title: "Android Fundamentals",
      questions: [
        {
          text: "On most newer Android phones, how do you see your recent apps?",
          options: ["Swipe up from the bottom", "Swipe up from the bottom and hold", "Swipe down from the top", "Tap the back button twice"],
          correctAnswer: 1,
        },
        {
          text: "Where do you typically go to download new applications on an Android device?",
          options: ["The Quick Settings Panel", "The Google Play Store", "The Phone app", 'The "Files" app'],
          correctAnswer: 1,
        },
        {
          text: "What is the standard way to take a screenshot on most Android phones?",
          options: ["Press the Power and Volume Up buttons at the same time", "Hold the power button until a menu appears", "Press the Power and Volume Down buttons at the same time", "Swipe down with three fingers"],
          correctAnswer: 2,
        },
        {
          text: "Where can you quickly access controls like Wi-Fi, Flashlight, and Airplane Mode on an Android phone?",
          options: ["The Google Play Store", "The Settings App", "The Quick Settings Panel", "The Home Screen"],
          correctAnswer: 2,
        },
        {
          text: "Which voice assistant is built into most Android phones?",
          options: ["Siri", "Google Assistant", "Alexa", "Bixby"],
          correctAnswer: 1,
        },
      ],
    },
    {
      id: "win-nav-1",
      category: "windows-nav",
      title: "Navigating the Desktop",
      questions: [
        {
          text: "What is the bar at the bottom of the Windows screen that holds your open programs called?",
          options: ["The Start Menu", "The Desktop", "The Taskbar", "The File Explorer"],
          correctAnswer: 2,
        },
        {
          text: "Where do you typically click to find a list of all your applications?",
          options: ["The Recycle Bin", "The Start Menu button", "The clock in the corner", "The network icon"],
          correctAnswer: 1,
        },
        {
          text: "What is the main background area of your screen where icons and shortcuts are located?",
          options: ["The Taskbar", "The Desktop", "The Control Panel", "The Start Menu"],
          correctAnswer: 1,
        },
        {
          text: "What is the keyboard shortcut to instantly show the desktop, minimizing all windows?",
          options: ["Windows Key + D", "Alt + D", "Ctrl + D", "Shift + D"],
          correctAnswer: 0,
        },
        {
          text: "What is the area on the right side of the Taskbar that contains the clock, volume, and Wi-Fi status called?",
          options: ["The Quick Access Toolbar", "The Notification Center", "The System Tray", "The Action Center"],
          correctAnswer: 2,
        },
      ],
    },
    {
      id: "comp-basics-3",
      category: "computer-basics",
      title: "Understanding Computer Specs",
      questions: [
        {
          text: 'Which component is often called the "brain" of the computer and is responsible for executing commands?',
          options: ["RAM", "SSD", "CPU", "GPU"],
          correctAnswer: 2,
        },
        {
          text: "What is the computer's short-term, volatile memory used for active programs?",
          options: ["Hard Drive", "RAM", "Power Supply", "Motherboard"],
          correctAnswer: 1,
        },
        {
          text: "Which type of storage is much faster because it has no moving parts?",
          options: ["HDD (Hard Disk Drive)", "DVD-ROM", "SSD (Solid-State Drive)", "USB Flash Drive"],
          correctAnswer: 2,
        },
        {
          text: 'What does it mean for RAM to be "volatile" memory?',
          options: ["It is very fast", "It stores data permanently", "Its contents are erased when the computer is turned off", "It is not a physical component"],
          correctAnswer: 2,
        },
        {
          text: "What unit is typically used to measure a CPU's clock speed?",
          options: ["GB (Gigabytes)", "MB/s (Megabytes per second)", "GHz (Gigahertz)", "DPI (Dots per inch)"],
          correctAnswer: 2,
        },
      ],
    },
    {
      id: "win-nav-2",
      category: "windows-nav",
      title: "Using File Explorer Quiz",
      questions: [
        {
          text: "What is the keyboard shortcut to instantly open File Explorer?",
          options: ["Ctrl + E", "Alt + F", "Windows Key + E", "Shift + E"],
          correctAnswer: 2,
        },
        {
          text: "In File Explorer, what is the main area on the left side that gives you quick access to locations like Desktop and Documents called?",
          options: ["The Ribbon", "The Address Bar", "The Navigation Pane", "The System Tray"],
          correctAnswer: 2,
        },
        {
          text: 'What does the file extension ".docx" typically represent?',
          options: ["An image file", "A music file", "A Microsoft Word document", "A program"],
          correctAnswer: 2,
        },
        {
          text: "What is the keyboard shortcut to create a new folder in File Explorer?",
          options: ["Ctrl + N", "Ctrl + Shift + N", "Alt + N", "Windows Key + N"],
          correctAnswer: 1,
        },
        {
          text: "Which keyboard shortcut allows you to undo your last file action, like an accidental deletion?",
          options: ["Ctrl + Y", "Ctrl + Z", "Ctrl + U", "Alt + Z"],
          correctAnswer: 1,
        },
      ],
    },
    {
      id: "html-doc-structure-quiz",
      category: "web-development",
      title: "HTML Document Structure",
      questions: [
        {
          text: "What is the very first line of any HTML5 document?",
          options: ["<html>", "<head>", "<!DOCTYPE html>", "<body>"],
          correctAnswer: 2,
        },
        {
          text: "Which element contains metadata about the page, like the title and character set?",
          options: ["<body>", "<html>", "<meta>", "<head>"],
          correctAnswer: 3,
        },
        {
          text: "Where does all the visible content (headings, paragraphs, images) of a web page go?",
          options: ["<head>", "<body>", "<!DOCTYPE html>", "<title>"],
          correctAnswer: 1,
        },
        {
          text: "What is the purpose of the <title> tag?",
          options: ["To set the main heading on the page", "To define the title shown in the browser tab", "To link to a CSS file", "To set the character encoding"],
          correctAnswer: 1,
        },
        {
          text: "Which tag is used to link an external CSS stylesheet to your HTML page?",
          options: ["<script>", "<style>", "<meta>", "<link>"],
          correctAnswer: 3,
        },
      ],
    },
    {
      id: "html-text-tags-quiz",
      category: "web-development",
      title: "HTML Text Tags",
      questions: [
        {
          text: "Which tag is used for the most important heading on a page?",
          options: ["<h6>", "<h1>", "<h2>", "<head>"],
          correctAnswer: 1,
        },
        {
          text: "Which tag is semantically correct for indicating text with strong importance?",
          options: ["<b>", "<i>", "<strong>", "<em>"],
          correctAnswer: 2,
        },
        {
          text: "What is the purpose of the <br> tag?",
          options: ["To create a new paragraph", "To insert a single line break", "To draw a horizontal line", "To make text bold"],
          correctAnswer: 1,
        },
      ],
    },
    {
      id: "html-lists-quiz",
      category: "web-development",
      title: "HTML Lists",
      questions: [
        {
          text: "Which tag is used to create a bulleted (unordered) list?",
          options: ["<ol>", "<li>", "<ul>", "<dl>"],
          correctAnswer: 2,
        },
        {
          text: "Which tag is used to create a numbered (ordered) list?",
          options: ["<ul>", "<li>", "<ol>", "<list>"],
          correctAnswer: 2,
        },
        {
          text: "What tag defines an individual item within any type of list?",
          options: ["<item>", "<li>", "<ol>", "<ul>"],
          correctAnswer: 1,
        },
      ],
    },
    {
      id: "html-links-images-quiz",
      category: "web-development",
      title: "HTML Links & Images",
      questions: [
        {
          text: "Which attribute specifies the destination URL for a hyperlink (<a> tag)?",
          options: ["src", "link", "href", "url"],
          correctAnswer: 2,
        },
        {
          text: "What is the purpose of the 'alt' attribute on an <img> tag?",
          options: ["To provide alternative text for accessibility and for when the image cannot load", "To set the alignment of the image", "To create a caption for the image", "To link the image to another page"],
          correctAnswer: 0,
        },
        {
          text: "How do you make a link open in a new browser tab?",
          options: ["<a href='...' newtab>", "<a href='...' target='_blank'>", "<a href='...' target='_new'>", "<a href='...' open='new'>"],
          correctAnswer: 1,
        },
      ],
    },
    {
      id: "css-selectors-quiz",
      category: "web-development",
      title: "CSS Selectors",
      questions: [
        {
          text: "Which character is used to select an element by its ID?",
          options: [". (period)", "# (hash)", ": (colon)", "> (greater than)"],
          correctAnswer: 1,
        },
        {
          text: "Which character is used to select elements by their class name?",
          options: ["# (hash)", ". (period)", "$ (dollar sign)", "& (ampersand)"],
          correctAnswer: 1,
        },
        {
          text: "If you write `p { color: red; }`, what will be styled?",
          options: ["Only the first paragraph", "All elements with class='p'", "All paragraph elements (<p>)", "The element with id='p'"],
          correctAnswer: 2,
        },
      ],
    },
    {
      id: "css-box-model-quiz",
      category: "web-development",
      title: "The Box Model",
      questions: [
        {
          text: "In the CSS Box Model, what is the space between the content and the border called?",
          options: ["Margin", "Padding", "Outline", "Spacing"],
          correctAnswer: 1,
        },
        {
          text: "Which property controls the space *outside* of an element's border?",
          options: ["Padding", "Border", "Content", "Margin"],
          correctAnswer: 3,
        },
        {
          text: "What is the correct order of the box model, from the outside in?",
          options: ["Margin, Padding, Border, Content", "Border, Margin, Padding, Content", "Margin, Border, Padding, Content", "Content, Padding, Border, Margin"],
          correctAnswer: 2,
        },
      ],
    },
    {
      id: "css-properties-quiz",
      category: "web-development",
      title: "CSS Properties",
      questions: [
        {
          text: "Which CSS property is used to change the color of text?",
          options: ["font-color", "text-color", "color", "text-style"],
          correctAnswer: 2,
        },
        {
          text: "Which property sets the background color of an element?",
          options: ["color", "background-color", "fill-color", "element-color"],
          correctAnswer: 1,
        },
        {
          text: "Which of these is NOT a valid value for the `font-weight` property?",
          options: ["bold", "normal", "700", "thin"],
          correctAnswer: 3,
        },
      ],
    },
    {
      id: "javascript-variables-quiz",
      category: "web-development",
      title: "JavaScript Variables and Data Types",
      questions: [
        {
          text: "Which keyword is used to declare a variable whose value cannot be changed?",
          options: ["let", "var", "const", "static"],
          correctAnswer: 2,
        },
        {
          text: "What is the data type of the value `true`?",
          options: ["String", "Number", "Boolean", "Object"],
          correctAnswer: 2,
        },
        {
          text: "What is the value of a variable that has been declared but not assigned a value?",
          options: ["null", "0", "undefined", "false"],
          correctAnswer: 2,
        },
      ],
    },
    {
      id: "javascript-functions-events-quiz",
      category: "web-development",
      title: "JavaScript Functions and Events",
      questions: [
        {
          text: "What is a reusable block of code designed to perform a specific task called?",
          options: ["An event", "A variable", "A function", "A string"],
          correctAnswer: 2,
        },
        {
          text: "Which HTML attribute is commonly used to run a JavaScript function when a button is clicked?",
          options: ["onchange", "onmouseover", "onload", "onclick"],
          correctAnswer: 3,
        },
        {
          text: "Which method is used to find an HTML element by its unique ID?",
          options: ["document.querySelector()", "document.getElementById()", "document.getElementsByClass()", "document.find()"],
          correctAnswer: 1,
        },
      ],
    },
    {
      id: "computer-tips-1",
      category: "computer-tips",
      title: "Speeding Up Your Computer Quiz",
      questions: [
        {
          text: "What is a good first step to take if your computer is running slow?",
          options: ["Buy a new computer", "Close unused programs", "Change the wallpaper", "Unplug the monitor"],
          correctAnswer: 1,
        },
        {
          text: "What does restarting your computer do to help with performance?",
          options: ["It permanently deletes old files", "It cleans the dust out of the case", "It clears out the short-term memory (RAM)", "It makes the screen brighter"],
          correctAnswer: 2,
        },
        {
          text: "Which Windows tool can help you remove temporary files to free up disk space?",
          options: ["Task Manager", "Disk Cleanup", "Control Panel", "File Explorer"],
          correctAnswer: 1,
        },
        {
          text: "Which Windows utility allows you to manage programs that start automatically with your computer?",
          options: ["File Explorer", "Task Manager", "Control Panel", "Disk Cleanup"],
          correctAnswer: 1,
        },
        {
          text: "What is the keyboard shortcut to open the Task Manager directly?",
          options: ["Ctrl + Alt + Del", "Windows Key + T", "Ctrl + Shift + Esc", "Alt + F4"],
          correctAnswer: 2,
        },
      ],
    },
    {
      id: "computer-tips-2",
      category: "computer-tips",
      title: "PC Maintenance Quiz",
      questions: [
        {
          text: "Why is it important to physically clean your computer and keep its vents clear?",
          options: ["To make it look shiny", "To prevent overheating by allowing good airflow", "To make the internet faster", "To charge the battery"],
          correctAnswer: 1,
        },
        {
          text: "Which built-in Windows tool helps you safely remove temporary files to free up disk space?",
          options: ["Task Manager", "Windows Update", "Disk Cleanup", "File Explorer"],
          correctAnswer: 2,
        },
        {
          text: "Why is it important to regularly update your operating system (like Windows)?",
          options: ["To change the look of your desktop", "To get new features and patch security holes", "To make your internet connection faster", "To free up hard drive space"],
          correctAnswer: 1,
        },
        {
          text: "What is the name of the free, built-in antivirus program that comes with Windows?",
          options: ["Norton", "McAfee", "Windows Security (or Defender)", "Avast"],
          correctAnswer: 2,
        },
        {
          text: "What is the primary risk of not running software updates?",
          options: ["Your computer might run slower", "You might miss out on new emojis", "Your computer is more vulnerable to security threats", "Your screen might not be as bright"],
          correctAnswer: 2,
        },
      ],
    },
    {
      id: "internet-connectivity-1",
      category: "internet-connectivity",
      title: "Online Safety Quiz",
      questions: [
        {
          text: "Which of the following is the strongest password?",
          options: ["password123", "MyDogFido", "My1stDog!WasFido", "12345678"],
          correctAnswer: 2,
        },
        {
          text: "If you get an urgent email from your bank asking you to click a link to verify your account, what should you do?",
          options: ["Click the link immediately to secure your account", "Ignore the email completely", "Don't click the link, and go to your bank's website by typing the address yourself", "Reply with your account number"],
          correctAnswer: 2,
        },
        {
          text: 'What is "phishing"?',
          options: ["A type of computer virus", "A method criminals use to trick you into giving them your information", "A way to speed up your internet", "A type of online game"],
          correctAnswer: 1,
        },
        {
          text: "When using public Wi-Fi (like at a coffee shop), what is a good safety practice?",
          options: ["Do all your online banking", "Avoid logging into sensitive accounts", "Share your password with others", "Download as many files as possible"],
          correctAnswer: 1,
        },
        {
          text: "What is a major red flag for a scam shopping website?",
          options: ["The site has a professional design", "The prices are slightly lower than competitors", "The prices seem too good to be true", "The site accepts credit cards"],
          correctAnswer: 2,
        },
      ],
    },
    {
      id: "internet-connectivity-2",
      category: "internet-connectivity",
      title: "Email Basics Quiz",
      questions: [
        {
          text: 'In the email address "student@example.com", what is the "example.com" part called?',
          options: ["The username", "The handle", "The provider", "The server"],
          correctAnswer: 2,
        },
        {
          text: "What is the most important reason to write a clear subject line in an email?",
          options: ["To make the email look longer", "To help the recipient know what the email is about", "It is not important", "To make sure the email sends faster"],
          correctAnswer: 1,
        },
        {
          text: 'What is the function of the "Reply All" button in an email client?',
          options: ["It sends your response only to the original sender", 'It sends your response to everyone in the "To" and "Cc" fields', "It deletes the original email", "It forwards the email to your boss"],
          correctAnswer: 1,
        },
        {
          text: "What does the paperclip icon (📎) usually represent in an email client?",
          options: ["Delete the email", "Mark as spam", "Attach a file", "Print the email"],
          correctAnswer: 2,
        },
        {
          text: 'In the email address "student@example.com", what is the "student" part called?',
          options: ["The domain", "The provider", "The username", "The server"],
          correctAnswer: 2,
        },
      ],
    },
    {
      id: "internet-connectivity-3",
      category: "internet-connectivity",
      title: "Web Browsing Basics Quiz",
      questions: [
        {
          text: "What is the main purpose of using tabs in a web browser?",
          options: ["To make the text bigger", "To have multiple web pages open in one window", "To save your favorite websites", "To change the browser color"],
          correctAnswer: 1,
        },
        {
          text: "When you see a padlock icon (🔒) in the address bar, what does it generally mean?",
          options: ["The website is locked and you cannot enter", "The website has a virus", "Your connection to the site is encrypted and more secure", "The website is for members only"],
          correctAnswer: 2,
        },
        {
          text: "Which of the following is a common web browser?",
          options: ["Microsoft Word", "Google Chrome", "Adobe Photoshop", "Windows File Explorer"],
          correctAnswer: 1,
        },
        {
          text: "What is the purpose of a bookmark in a web browser?",
          options: ["To print the current page", "To close the current tab", "To save a website address for easy access later", "To search the web"],
          correctAnswer: 2,
        },
        {
          text: "What is another name for a website's address?",
          options: ["IP Address", "HTML", "URL", "Bookmark"],
          correctAnswer: 2,
        },
      ],
    },
    {
      id: "internet-connectivity-4",
      category: "internet-connectivity",
      title: "Wi-Fi & Mobile Data Quiz",
      questions: [
        {
          text: "Which of the following is the best reason to use Wi-Fi instead of mobile data when you are at home?",
          options: ["Wi-Fi is always faster than mobile data", "Wi-Fi does not use up your phone plan's data allowance", "Wi-Fi makes your screen brighter", "Wi-Fi works from anywhere in the world"],
          correctAnswer: 1,
        },
        {
          text: "What is the main disadvantage of mobile data (4G/5G) compared to Wi-Fi?",
          options: ["It is less secure than any Wi-Fi", "It only works on computers", "It can be slower and uses your phone plan's data allowance", "It does not work for video calls"],
          correctAnswer: 2,
        },
        {
          text: "What device creates a Wi-Fi network in your home?",
          options: ["A modem", "A router", "A computer", "A smartphone"],
          correctAnswer: 1,
        },
        {
          text: "On a Windows PC, where do you typically click to see and connect to available Wi-Fi networks?",
          options: ["The Start Menu", "The Control Panel", "The network icon in the taskbar", "The settings app"],
          correctAnswer: 2,
        },
        {
          text: "Why should you be cautious when using public Wi-Fi?",
          options: ["It is always very slow", "It can be less secure than private networks", "It costs more money to use", "It only works on laptops"],
          correctAnswer: 1,
        },
      ],
    },
    {
      id: "internet-connectivity-5",
      category: "internet-connectivity",
      title: "Antivirus & Firewalls Quiz",
      questions: [
        {
          text: "What is the main job of antivirus software like Windows Defender?",
          options: ["To speed up your internet", "To organize your files", "To detect and remove malicious software (malware)", "To update your programs"],
          correctAnswer: 2,
        },
        {
          text: "What is the primary role of a firewall?",
          options: ["To clean your computer screen", "To monitor internet traffic and block unauthorized access", "To make your computer run quieter", "To back up your photos"],
          correctAnswer: 1,
        },
        {
          text: "Which of these is a key function of a firewall?",
          options: ["To scan for and remove viruses", "To monitor network traffic and block unauthorized connections", "To update your software automatically", "To clean temporary internet files"],
          correctAnswer: 1,
        },
        {
          text: "What is the most important thing to do to keep your antivirus software effective?",
          options: ["Run a full scan every hour", "Keep it updated with the latest virus definitions", "Buy the most expensive version", "Disable it when browsing the web"],
          correctAnswer: 1,
        },
        {
          text: "True or False: Windows comes with a built-in firewall and antivirus.",
          options: ["True", "False"],
          correctAnswer: 0,
        },
      ],
    },
    {
      id: "computer-tips-5",
      category: "computer-tips",
      title: "Managing User Accounts Quiz",
      questions: [
        {
          text: "Which type of user account has full control over the computer and can install any software?",
          options: ["Standard User", "Guest User", "Administrator", "Power User"],
          correctAnswer: 2,
        },
        {
          text: "What is the main benefit of using a Standard User account for daily tasks?",
          options: ["It runs faster", "It is safer because it limits what malicious software can do", "It has more customization options", "It can access more files"],
          correctAnswer: 1,
        },
        {
          text: "What is required to install most new software or change system-wide settings?",
          options: ["A Standard User password", "An Administrator password", "An internet connection", "A guest account"],
          correctAnswer: 1,
        },
        {
          text: "Why is it safer to use a Standard User account for daily web browsing?",
          options: ["It loads websites faster", "It prevents websites from installing malware without permission", "It blocks all advertisements", "It automatically clears your browsing history"],
          correctAnswer: 1,
        },
        {
          text: "Which account type is created by default when you add a new user in Windows?",
          options: ["Administrator", "Power User", "Guest", "Standard User"],
          correctAnswer: 3,
        },
      ],
    },
    {
      id: "browser-dev-tools-quiz",
      category: "web-development",
      title: "Browser Developer Tools",
      questions: [
        {
          text: "What is a common keyboard shortcut to open the Developer Tools?",
          options: ["F12", "Ctrl+P", "Alt+F4", "F1"],
          correctAnswer: 0,
        },
        {
          text: "Which tab in the Developer Tools lets you see the HTML structure and CSS styles of a page?",
          options: ["Console", "Network", "Elements", "Application"],
          correctAnswer: 2,
        },
        {
          text: "Where would you look to see error messages from a page's JavaScript code?",
          options: ["The Elements Tab", "The Network Tab", "The Console Tab", "The page's source code"],
          correctAnswer: 2,
        },
        {
          text: "What JavaScript command is used to print a message to the Console?",
          options: ["alert()", "document.write()", "console.log()", "print.message()"],
          correctAnswer: 2,
        },
      ],
    },
];