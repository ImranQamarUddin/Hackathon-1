var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
// Download Pdf File
var downloadBtn = document.querySelector('.download-pdf');
downloadBtn === null || downloadBtn === void 0 ? void 0 : downloadBtn.addEventListener('click', function () {
    window.print();
});
