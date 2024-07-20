document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('userName');
    const savedSearchEngine = localStorage.getItem('searchEngine');

    if (userName) {
        document.getElementById('initialSetup').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
        updateGreeting();
        updateDateTime();
    } else {
        document.getElementById('initialSetup').classList.remove('hidden');
    }

    if (savedSearchEngine) {
        document.getElementById('searchEngine').value = savedSearchEngine;
    }

    document.getElementById('query').focus();
    document.getElementById('query').addEventListener('keypress', handleEnterKey);
    document.getElementById('userName').addEventListener('click', changeUserName);
    document.getElementById('searchEngine').addEventListener('change', saveSearchEngine);

    // Focus the search input on any key press
    document.addEventListener('keydown', () => {
        document.getElementById('query').focus();
    });
});

function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateTime = now.toLocaleDateString(undefined, options) + ' ' + now.toLocaleTimeString();
    // Optional: Display the date and time if needed
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
    const userName = document.getElementById('userNameInput').value.trim();
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
    const query = document.getElementById('query').value.trim();
    let url;

    if (isValidURL(query)) {
        window.location.href = query;
        return;
    }

    if (isDomain(query)) {
        url = `https://${query}`;
        window.location.href = url;
        return;
    }

    url = getSearchURL(searchEngine, query);
    if (url) {
        window.location.href = url;
    } else {
        alert('Search engine not supported');
    }
}

function handleEnterKey(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}

function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

function isDomain(string) {
    return /^[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-]{2,}$/.test(string) || /^[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-]+$/.test(string);
}

function getSearchURL(engine, query) {
    const queries = {
        amazon: `https://www.amazon.com/s?k=${encodeURIComponent(query)}`,
        baidu: `https://www.baidu.com/s?wd=${encodeURIComponent(query)}`,
        bing: `https://www.bing.com/search?q=${encodeURIComponent(query)}`,
        duckduckgo: `https://duckduckgo.com/?q=${encodeURIComponent(query)}`,
        ecosia: `https://www.ecosia.org/search?q=${encodeURIComponent(query)}`,
        facebook: `https://www.google.com/search?q=site:facebook.com+${encodeURIComponent(query)}`,
        github: `https://github.com/search?q=${encodeURIComponent(query)}`,
        google: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
        instagram: `https://www.google.com/search?q=site:instagram.com+${encodeURIComponent(`@${query}`)}`,
        linkedin: `https://www.google.com/search?q=site:linkedin.com+${encodeURIComponent(query)}`,
        mdn: `https://developer.mozilla.org/en-US/search?q=${encodeURIComponent(query)}`,
        pinterest: `https://www.pinterest.com/search/pins/?q=${encodeURIComponent(query)}`,
        pixabay: `https://pixabay.com/images/search/${encodeURIComponent(query)}/`,
        quora: `https://www.google.com/search?q=site:quora.com+${encodeURIComponent(query)}`,
        reddit: `https://www.reddit.com/search/?q=${encodeURIComponent(query)}`,
        stackoverflow: `https://stackoverflow.com/search?q=${encodeURIComponent(query)}`,
        twitter: `https://twitter.com/search?q=${encodeURIComponent(query)}`,
        w3schools: `https://www.google.com/search?q=site:w3schools.com+${encodeURIComponent(query)}`,
        youtube: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
    };
    return queries[engine];
}

function saveSearchEngine() {
    const searchEngine = document.getElementById('searchEngine').value;
    localStorage.setItem('searchEngine', searchEngine);
}

function changeUserName() {
    document.getElementById('initialSetup').classList.remove('hidden');
    document.getElementById('mainContent').classList.add('hidden');
}
