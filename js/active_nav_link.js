index = document.getElementById('index');
projects = document.getElementById('projects');
education = document.getElementById('edu');
hobbies = document.getElementById('hobbies');
feedback = document.getElementById('feedback');

switch(document.location.pathname.split('/').pop().split('.')[0]) {
    case "index": index.classList.add('active'); break;
    case "projects": projects.classList.add('active'); break;
    case "education": education.classList.add('active'); break;
    case "hobbies": hobbies.classList.add('active'); break;
    case "feedback": feedback.classList.add('active'); break;
};