const shareButton1 = document.getElementById('share-button1');
const shareButton2 = document.getElementById('share-button2');
const shareBar = document.getElementById('share-bar');
const authorSection = document.getElementById('author-section');
const articleContent = document.getElementById('article-content');
const svgPath = document.getElementById("share-icon").querySelector("path");

let isShareBarVisible = false;

function showShareOptions() {
    shareBar.style.display = 'flex';
    shareButton1.style.backgroundColor = 'var(--desaturated-dark-blue)';
    svgPath.classList.add('white');
    isShareBarVisible = true;
    if (window.innerWidth <= 768) {
        authorSection.style.display = 'none';
        articleContent.style.paddingBottom = '0';
    }
}

function hideShareOptions() {
    shareBar.style.display = 'none';
    authorSection.style.display = 'flex';
    shareButton1.style.backgroundColor = 'var(--light-grayish-blue)';
    svgPath.classList.remove('white');
    isShareBarVisible = false;
    if (window.innerWidth <= 768) {
        authorSection.style.display = 'flex';
        articleContent.style.paddingBottom = '1.1rem';
    }
}

// Responsive Behavior
function setupEventListeners() {
    if (window.innerWidth <= 768) {
        shareButton1.addEventListener('click', () => {
            if (!isShareBarVisible) {
                showShareOptions();
            } else {
                hideShareOptions();
            }
        });

        shareButton2.style.display = 'block';
        shareButton2.addEventListener('click', hideShareOptions);
    } else {
        shareButton2.style.display = 'none';
        shareButton1.addEventListener('click', () => {
            if (!isShareBarVisible) {
                showShareOptions();
            } else {
                hideShareOptions();
            }
        });
    }
}

// Update on Resize
window.addEventListener('resize', setupEventListeners);

// Initial Setup
setupEventListeners();
