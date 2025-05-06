// Dynamic Greeting
const greetingElement = document.createElement('p');
const currentHour = new Date().getHours();
let greetingMessage;

if (currentHour < 12) {
    greetingMessage = 'Good Morning!';
} else if (currentHour < 18) {
    greetingMessage = 'Good Afternoon!';
} else {
    greetingMessage = 'Good Evening!';
}

greetingElement.textContent = greetingMessage;
document.querySelector('header').appendChild(greetingElement);

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Show/Hide Skills
const skillsSection = document.getElementById('skills');
const toggleSkillsButton = document.createElement('button');
toggleSkillsButton.textContent = 'Show/Hide Skills';
toggleSkillsButton.style.margin = '1rem 0';
skillsSection.prepend(toggleSkillsButton);

toggleSkillsButton.addEventListener('click', () => {
    const skillsGrid = skillsSection.querySelector('.skills-grid');
    skillsGrid.classList.toggle('hidden');
    toggleSkillsButton.textContent = skillsGrid.classList.contains('hidden') ? 'Show Skills' : 'Hide Skills';
});
