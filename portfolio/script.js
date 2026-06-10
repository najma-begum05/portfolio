const projects = [
  {
    title: 'Web-based Calculator',
    description:
      'Designed and developed a responsive calculator with clean UI, arithmetic operations, input validation, and cross-browser compatibility.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/najma-begum05/CALCULATOR.git',
    soon: false,
  },
  {
    title: 'Local Business Website',
    description:
      'Created a modern business landing page with clear sections, polished visuals, and responsive design to present services professionally online.',
    technologies: ['HTML', 'CSS', 'Responsive Design'],
    link: 'https://github.com/najma-begum05/FUTURE_FS_03.git',
    soon: false,
  },
  {
    title: 'Mini CRM',
    description:
      'Built a compact customer management system with structured forms and organized data handling for small business workflows.',
    technologies: ['JavaScript', 'UI Design', 'Data Management'],
    link: 'https://github.com/najma-begum05/FUTURE_FS_02.git',
    soon: false,
  },
  {
    title: 'Validation Form',
    description:
      'Developed a form with client-side validation to improve user experience and ensure accurate data entry.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/najma-begum05/js-form-validation.git',
    soon: false,
  },
];

const projectsGrid = document.getElementById('projects-grid');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (projectsGrid) {
  projectsGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="card">
          <h3>${project.title}</h3>
          <p class="meta">${project.technologies.join(' • ')}</p>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.technologies.map((tag) => `<span>${tag}</span>`).join('')}
          </div>
          <a class="project-link ${project.soon ? 'is-soon' : ''}" href="${project.link}">
            ${project.soon ? 'Project link coming soon' : 'View Project'}
          </a>
        </article>
      `
    )
    .join('');
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
