// When the web browser icon is clicked, open the browser window
document.getElementById('web-browser').addEventListener('click', function() {
    openBrowserWindow();
});

// Open a new browser window
function openBrowserWindow() {
    let windowElement = document.createElement('div');
    windowElement.classList.add('window');
    windowElement.id = 'browser-window';
    windowElement.innerHTML = `
        <div class="window-header">
            <input type="text" id="url-bar" placeholder="Enter a URL (e.g., https://www.example.com)">
            <button onclick="navigateToURL()">Go</button>
        </div>
        <div class="window-body">
            <iframe src="https://www.example.com" id="browser-frame"></iframe>
        </div>
    `;
    document.body.appendChild(windowElement);
    windowElement.style.display = 'block';

    // Focus on the URL input bar by default
    document.getElementById('url-bar').focus();
}

// Simulate navigation to a URL
function navigateToURL() {
    const url = document.getElementById('url-bar').value;
    if (url) {
        const iframe = document.getElementById('browser-frame');
        iframe.src = url;
    }
}

// Close a window when clicked
document.addEventListener('click', function(event) {
    if (!event.target.closest('.window')) {
        const windows = document.querySelectorAll('.window');
        windows.forEach(window => window.style.display = 'none');
    }
});
