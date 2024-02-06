function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}
function performSearch() {
    var searchTerm = document.getElementById('search-input').value;

    // Replace the link with your actual search URL
    var searchURL = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);

    // Open the search URL in a new tab
    window.open(searchURL, '_blank');
}
