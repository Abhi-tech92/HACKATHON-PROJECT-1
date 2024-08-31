document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const questionInput = document.getElementById('questionInput');
    const fileInput = document.getElementById('fileInput');

    if (questionInput.value.trim() === "" || fileInput.files.length === 0) {
        alert("Please fill in the question and upload a file.");
        return;
    }

    const questionText = questionInput.value;
    const file = fileInput.files[0];

    const reader = new FileReader();
    reader.onload = function(e) {
        const questionList = document.getElementById('questionList');
        const newQuestion = document.createElement('div');
        newQuestion.className = 'question-item';
        newQuestion.innerHTML = `<strong>Question:</strong> ${questionText}<br><strong>File:</strong> <a href="${e.target.result}" target="_blank">${file.name}</a>`;
        questionList.appendChild(newQuestion);

        // Clear the form
        questionInput.value = '';
        fileInput.value = '';
    };

    reader.readAsDataURL(file);
});
