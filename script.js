function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateTime = now.toLocaleDateString(undefined, options) + ' ' + now.toLocaleTimeString();
    // Optional: You can display the date and time if needed
    // document.getElementById('currentDateTime').textContent = dateTime;
}

function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    const userName = localStorage.getItem('userName') || 'User';
    
    let greetingText = 'Hello';
    if (hour < 12) {
        greetingText += ', Good Morning';
    } else if (hour < 18) {
        greetingText += ', Good Afternoon';
    } else {
        greetingText += ', Good Evening';
    }

    document.getElementById('greetingText').textContent = greetingText;
    document.getElementById('userName').textContent = userName;
}

function saveUserName() {
    const userName = document.getElementById('userNameInput').value;
    if (userName) {
        localStorage.setItem('userName', userName);
        document.getElementById('initialSetup').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
        updateGreeting();
        updateDateTime();
    }
}

function performSearch() {
    const searchEngine = document.getElementById('searchEngine').value;
    const query = document.getElementById('query').value;
    let url = '';

    switch (searchEngine) {
        case 'amazon':
            url = 'https://www.amazon.com/s?k=' + encodeURIComponent(query);
            break;
        case 'baidu':
            url = 'https://www.baidu.com/s?wd=' + encodeURIComponent(query);
            break;
        case 'bing':
            url = 'https://www.bing.com/search?q=' + encodeURIComponent(query);
            break;
        case 'duckduckgo':
            url = 'https://duckduckgo.com/?q=' + encodeURIComponent(query);
            break;
        case 'ecosia':
            url = 'https://www.ecosia.org/search?q=' + encodeURIComponent(query);
            break;
        case 'facebook':
            url = 'https://www.google.com/search?q=site:facebook.com+' + encodeURIComponent(query);
            break;
        case 'github':
            url = 'https://github.com/search?q=' + encodeURIComponent(query);
            break;
        case 'google':
            url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
            break;
        case 'instagram':
            url = 'https://www.google.com/search?q=site:instagram.com+' + encodeURIComponent(query);
            break;
        case 'linkedin':
            url = 'https://www.google.com/search?q=site:linkedin.com+' + encodeURIComponent(query);
            break;
        case 'mdn':
            url = 'https://developer.mozilla.org/en-US/search?q=' + encodeURIComponent(query);
            break;
        case 'pinterest':
            url = 'https://www.pinterest.com/search/pins/?q=' + encodeURIComponent(query);
            break;
        case 'pixabay':
            url = 'https://pixabay.com/images/search/' + encodeURIComponent(query) + '/';
            break;
        case 'quora':
            url = 'https://www.google.com/search?q=site:quora.com+' + encodeURIComponent(query);
            break;
        case 'reddit':
            url = 'https://www.reddit.com/search/?q=' + encodeURIComponent(query);
            break;
        case 'stackoverflow':
            url = 'https://stackoverflow.com/search?q=' + encodeURIComponent(query);
            break;
        case 'twitter':
            url = 'https://twitter.com/search?q=' + encodeURIComponent(query);
            break;
        case 'w3schools':
            url = 'https://www.google.com/search?q=site:w3schools.com+' + encodeURIComponent(query);
            break;
        case 'youtube':
            url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(query);
            break;
        default:
            alert('Search engine not supported');
            return;
    }

    window.location.href = url;
}



// Handle Enter key press for search
document.getElementById('query').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('initialSetup').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
        updateGreeting();
        updateDateTime();
    } else {
        document.getElementById('initialSetup').classList.remove('hidden');
    }
});

// Allow user to change name by clicking on it
document.getElementById('userName').addEventListener('click', changeUserName);

function changeUserName() {
    document.getElementById('initialSetup').classList.remove('hidden');
    document.getElementById('mainContent').classList.add('hidden');
}
