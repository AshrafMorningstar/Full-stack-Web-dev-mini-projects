
let userScore = 0;
let compScore = 0;

function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const compChoice = choices[Math.floor(Math.random() * 3)];
    
    const result = getResult(userChoice, compChoice);
    const resultDiv = document.getElementById('result');
    
    if (result === 'win') {
        userScore++;
        resultDiv.innerHTML = `<h3 style="color: #10b981;">You Win! 🎉</h3><p>You chose ${userChoice}, Computer chose ${compChoice}</p>`;
    } else if (result === 'lose') {
        compScore++;
        resultDiv.innerHTML = `<h3 style="color: #ef4444;">You Lose! 😢</h3><p>You chose ${userChoice}, Computer chose ${compChoice}</p>`;
    } else {
        resultDiv.innerHTML = `<h3 style="color: #f59e0b;">It's a Draw! 🤝</h3><p>Both chose ${userChoice}</p>`;
    }
    
    resultDiv.style.display = 'block';
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('comp-score').textContent = compScore;
}

function getResult(user, comp) {
    if (user === comp) return 'draw';
    if (
        (user === 'rock' && comp === 'scissors') ||
        (user === 'paper' && comp === 'rock') ||
        (user === 'scissors' && comp === 'paper')
    ) {
        return 'win';
    }
    return 'lose';
}
