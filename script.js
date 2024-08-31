document.getElementById("demo").innerHTML = document.URL

document.addEventListener('DOMContentLoaded', function() {
    const educationItems = document.querySelectorAll('.education-item');
    
    educationItems.forEach(item => {
        item.addEventListener('click', () => {
            const description = item.querySelector('p:last-child');
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });
    });
});
