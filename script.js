// --- CONFIGURATION ---
// Change these to your actual dates (DDMMYYYY)
const CORRECT_ANNIVERSARY = "14022023"; 
const CORRECT_BIRTHDATE = "18052006";

// --- PHASE 1: LOCK SCREEN LOGIC ---
const btnGate1 = document.getElementById('btn-gate1');
const btnGate2 = document.getElementById('btn-gate2');
const inputAnniversary = document.getElementById('anniversary-input');
const inputBirthdate = document.getElementById('birthdate-input');
const error1 = document.getElementById('error1');
const error2 = document.getElementById('error2');
const gate1 = document.getElementById('gate1');
const gate2 = document.getElementById('gate2');

btnGate1.addEventListener('click', () => {
    if (inputAnniversary.value === CORRECT_ANNIVERSARY) {
        error1.classList.add('hidden');
        gate1.classList.add('hidden');
        gate2.classList.remove('hidden');
    } else {
        error1.classList.remove('hidden');
    }
});

btnGate2.addEventListener('click', () => {
    if (inputBirthdate.value === CORRECT_BIRTHDATE) {
        error2.classList.add('hidden');
        switchPhase('phase1', 'phase2');
    } else {
        error2.classList.remove('hidden');
    }
});

// --- PHASE 2: LOVE METER LOGIC ---
const slider = document.getElementById('love-slider');
const percentageText = document.getElementById('love-percentage');
const loveMessage = document.getElementById('love-message');
const btnNextPhase2 = document.getElementById('btn-next-phase2');

slider.addEventListener('input', (e) => {
    const val = e.target.value;
    percentageText.innerText = `${val}%`;
    
    if (val < 30) {
        loveMessage.innerText = "Masa segini doang? 🥺";
    } else if (val < 70) {
        loveMessage.innerText = "Lebih lagi dong! 😘";
    } else if (val < 100) {
        loveMessage.innerText = "Hampir penuhh! 😍";
        btnNextPhase2.classList.add('hidden');
    } else {
        loveMessage.innerText = "I LOVE YOU TOO! ❤️❤️❤️";
        percentageText.style.color = "#ff4d4d"; // Turn red at 100%
        btnNextPhase2.classList.remove('hidden');
        createFloatingHearts();
    }
});

btnNextPhase2.addEventListener('click', () => {
    switchPhase('phase2', 'phase3');
});

// Create cute floating emoji hearts
function createFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    container.innerHTML = "💖💖💖";
    container.style.fontSize = "2rem";
    container.style.animation = "pulse 1s infinite";
}

// --- PHASE 3: INVITATION GATE ---
const btnEnter = document.getElementById('btn-enter');
btnEnter.addEventListener('click', () => {
    switchPhase('phase3', 'phase4');
});

// --- PHASE 4: DASHBOARD & MODALS ---
const cards = document.querySelectorAll('.card');
const modalContainer = document.getElementById('details-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalBodies = document.querySelectorAll('.modal-body');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const targetId = card.getAttribute('data-target');
        
        // Hide all modal bodies first
        modalBodies.forEach(body => body.classList.add('hidden'));
        
        // Show the specific modal body
        document.getElementById(targetId).classList.remove('hidden');
        
        // Show the modal container
        modalContainer.classList.remove('hidden');
    });
});

closeModalBtn.addEventListener('click', () => {
    modalContainer.classList.add('hidden');
});

// --- UTILITY FUNCTION TO SWITCH SCREENS ---
function switchPhase(currentPhaseId, nextPhaseId) {
    const current = document.getElementById(currentPhaseId);
    const next = document.getElementById(nextPhaseId);
    
    current.classList.add('fade-out');
    
    // Wait for fade-out to complete before hiding
    setTimeout(() => {
        current.classList.add('hidden');
        current.classList.remove('active', 'fade-out');
        
        next.classList.remove('hidden');
        next.classList.add('active', 'fade-in');
    }, 500); // 500ms matches CSS animation time
}