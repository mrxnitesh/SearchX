function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateTime = now.toLocaleDateString(undefined, options) + ' ' + now.toLocaleTimeString();
    // You can include this in the HTML if you want to display it
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
        case 'google':
            url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
            break;
        case 'bing':
            url = 'https://www.bing.com/search?q=' + encodeURIComponent(query);
            break;
        case 'yahoo':
            url = 'https://search.yahoo.com/search?p=' + encodeURIComponent(query);
            break;
        case 'duckduckgo':
            url = 'https://duckduckgo.com/?q=' + encodeURIComponent(query);
            break;
        case 'yandex':
            url = 'https://yandex.com/search/?text=' + encodeURIComponent(query);
            break;
        case 'baidu':
            url = 'https://www.baidu.com/s?wd=' + encodeURIComponent(query);
            break;
        case 'startpage':
            url = 'https://www.startpage.com/sp/search?q=' + encodeURIComponent(query);
            break;
        case 'qwant':
            url = 'https://www.qwant.com/?q=' + encodeURIComponent(query);
            break;
        case 'ecosia':
            url = 'https://www.ecosia.org/search?q=' + encodeURIComponent(query);
            break;
        case 'wolframalpha':
            url = 'https://www.wolframalpha.com/input/?i=' + encodeURIComponent(query);
            break;
        case 'googlescholar':
            url = 'https://scholar.google.com/scholar?q=' + encodeURIComponent(query);
            break;
        case 'pubmed':
            url = 'https://pubmed.ncbi.nlm.nih.gov/?term=' + encodeURIComponent(query);
            break;
        case 'archive':
            url = 'https://archive.org/search.php?query=' + encodeURIComponent(query);
            break;
        case 'pipl':
            url = 'https://pipl.com/search/?q=' + encodeURIComponent(query);
            break;
        case 'naver':
            url = 'https://search.naver.com/search.naver?query=' + encodeURIComponent(query);
            break;
        case 'sogou':
            url = 'https://www.sogou.com/web?query=' + encodeURIComponent(query);
            break;
        case 'daum':
            url = 'https://search.daum.net/search?q=' + encodeURIComponent(query);
            break;
        case 'seznam':
            url = 'https://search.seznam.cz/?q=' + encodeURIComponent(query);
            break;
        case 'goo':
            url = 'https://www.goo.ne.jp/search.jsp?MT=' + encodeURIComponent(query);
            break;
        case 'rambler':
            url = 'https://www.rambler.ru/search/?query=' + encodeURIComponent(query);
            break;
        case 'github':
            url = 'https://github.com/search?q=' + encodeURIComponent(query);
            break;
        case 'instagram':
            url = 'https://www.instagram.com/explore/tags/' + encodeURIComponent(query) + '/';
            break;
        case 'facebook':
            url = 'https://www.facebook.com/search/top?q=' + encodeURIComponent(query);
            break;
        case 'indeed':
            url = 'https://www.indeed.com/q-' + encodeURIComponent(query) + '-jobs.html';
            break;
        case 'tripadvisor':
            url = 'https://www.tripadvisor.com/Search?q=' + encodeURIComponent(query);
            break;
        case 'zillow':
            url = 'https://www.zillow.com/homes/' + encodeURIComponent(query);
            break;
        case 'youtube':
            url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(query);
            break;
        case 'amazon':
            url = 'https://www.amazon.com/s?k=' + encodeURIComponent(query);
            break;
        default:
            alert('Search engine not supported');
            return;
    }

    window.location.href = url;
}

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
