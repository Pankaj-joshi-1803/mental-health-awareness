function calculateScore() {
    let score = 0;
    const totalQuestions = 5;

    // Get the values of selected options
    for (let i = 1; i <= totalQuestions; i++) {
        const radios = document.getElementsByName('q' + i);
        for (let j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                score += parseInt(radios[j].value);
                break;
            }
        }
    }

    // Display the result
    const result = document.getElementById('result');
    result.style.display = 'block';

    if (score <= 8) {
        result.textContent = `Your score is ${score}. You seem to be in a good mental space. Keep it up!`;
    } else if (score <= 15) {
        result.textContent = `Your score is ${score}. You may be experiencing some stress. Consider taking some time for self-care.`;
    } else {
        result.textContent = `Your score is ${score}. It's important to address these feelings. Consider seeking help from a mental health professional.`;
    }
}
