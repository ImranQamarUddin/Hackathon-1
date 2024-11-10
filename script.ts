const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement

toggleButton.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block' 
    } else {
    skills.style.display = 'none'
    } 
});


// Download Pdf File

const downloadBtn = document.querySelector('.download-pdf');

downloadBtn?.addEventListener('click',()=>{
    window.print();
})