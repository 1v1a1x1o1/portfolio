document.addEventListener('DOMContentLoaded', function() {
    // Dummy data for projects
    const projects = [
      { name: 'Project 1', description: 'Description of Project 1' },
      { name: 'Project 2', description: 'Description of Project 2' },
      { name: 'Project 3', description: 'Description of Project 3' }
    ];
  
    const projectList = document.getElementById('project-list');
  
    // Render projects
    projects.forEach(function(project) {
      const projectItem = document.createElement('div');
      projectItem.classList.add('project-item', 'fade-in');
      projectItem.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
      `;
      projectList.appendChild(projectItem);
    });
  
    // Form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      // Here you can add code to handle form submission (e.g., sending data to a server)
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      // For demonstration purposes, let's just clear the form fields
      form.reset();
    });
  });
  