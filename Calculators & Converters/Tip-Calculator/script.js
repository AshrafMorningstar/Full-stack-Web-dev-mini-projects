/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/


// Project by Ashraf Morningstar
// GitHub: https://github.com/AshrafMorningstar

document.addEventListener('DOMContentLoaded', () => {
    console.log("Project loaded");
});

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.innerText === '=') {
            try { display.innerText = eval(currentInput); currentInput = display.innerText; } catch { display.innerText = 'Error'; }
        } else if(btn.innerText === 'C') {
            currentInput = '';
            display.innerText = '0';
        } else {
            currentInput += btn.innerText;
            display.innerText = currentInput;
        }
    });
});
