// Game State Management
class VocabularyGame {
    constructor() {
        this.currentSet = 'bild1';
        this.currentWords = [];
        this.currentIndex = 0;
        this.isCardFlipped = false;
        this.wordsLearned = new Set();
        this.isShuffled = false;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.loadWordSet(this.currentSet);
        this.updateUI();
    }
    
    bindEvents() {
        // Dashboard events
        document.getElementById('startGameBtn').addEventListener('click', () => {
            this.startGame();
        });
        
        // Word set selection
        document.querySelectorAll('.word-set-btn:not(.disabled)').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectWordSet(e.target.closest('.word-set-btn').dataset.set);
            });
        });
        
        // Game navigation events
        document.getElementById('backBtn').addEventListener('click', () => {
            this.goToDashboard();
        });
        
        document.getElementById('shuffleBtn').addEventListener('click', () => {
            this.shuffleWords();
        });
        
        document.getElementById('prevBtn').addEventListener('click', () => {
            this.previousCard();
        });
        
        document.getElementById('nextBtn').addEventListener('click', () => {
            this.nextCard();
        });
        
        // Card flip events - now using dedicated flip button
        document.getElementById('flipBtn').addEventListener('click', () => {
            this.flipCard();
        });
        
        // Remove card tap flip functionality - card is now just for visual display
        // Touch events for mobile - only for swipe gestures, not tapping
        this.setupTouchEvents();
        
        // Keyboard events
        document.addEventListener('keydown', (e) => {
            this.handleKeyPress(e);
        });
    }
    
    setupTouchEvents() {
        const card = document.getElementById('vocabularyCard');
        let startX = 0;
        let startY = 0;
        
        card.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        card.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            // Detect swipe gestures only
            if (Math.abs(diffX) > Math.abs(diffY)) {
                if (Math.abs(diffX) > 50) { // Minimum swipe distance
                    if (diffX > 0) {
                        // Swipe left - next card
                        this.nextCard();
                    } else {
                        // Swipe right - previous card
                        this.previousCard();
                    }
                    e.preventDefault();
                }
            }
            // Remove tap-to-flip functionality - no longer needed
        });
    }
    
    handleKeyPress(e) {
        if (this.getCurrentScreen() !== 'gameScreen') return;
        
        switch(e.key) {
            case 'ArrowLeft':
                this.previousCard();
                break;
            case 'ArrowRight':
                this.nextCard();
                break;
            case ' ':
            case 'Enter':
                this.flipCard();
                e.preventDefault();
                break;
            case 'Escape':
                this.goToDashboard();
                break;
        }
    }
    
    selectWordSet(setName) {
        // Remove active class from all buttons
        document.querySelectorAll('.word-set-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to selected button
        const selectedBtn = document.querySelector(`[data-set="${setName}"]`);
        if (selectedBtn && !selectedBtn.classList.contains('disabled')) {
            selectedBtn.classList.add('active');
            this.currentSet = setName;
            this.loadWordSet(setName);
        }
    }
    
    loadWordSet(setName) {
        // Load available word sets
        if (setName === 'bild1' && typeof bild1_words !== 'undefined') {
            this.currentWords = [...bild1_words];
            this.currentIndex = 0;
            this.isShuffled = false;
            this.wordsLearned.clear();
        } else if (setName === 'bild2' && typeof bild2_words !== 'undefined') {
            this.currentWords = [...bild2_words];
            this.currentIndex = 0;
            this.isShuffled = false;
            this.wordsLearned.clear();
        } else {
            this.currentWords = [];
        }
        
        this.updateUI();
    }
    
    shuffleWords() {
        if (this.currentWords.length === 0) return;
        
        // Fisher-Yates shuffle algorithm
        for (let i = this.currentWords.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.currentWords[i], this.currentWords[j]] = [this.currentWords[j], this.currentWords[i]];
        }
        
        this.currentIndex = 0;
        this.isShuffled = true;
        this.resetCard();
        this.updateUI();
        
        // Visual feedback
        const shuffleBtn = document.getElementById('shuffleBtn');
        shuffleBtn.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            shuffleBtn.style.transform = 'rotate(0deg)';
        }, 300);
    }
    
    startGame() {
        if (this.currentWords.length === 0) {
            alert('Please select a valid word set first!');
            return;
        }
        
        this.showScreen('gameScreen');
        this.resetCard();
        this.updateGameUI();
    }
    
    goToDashboard() {
        this.showScreen('dashboard');
        this.resetCard();
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
    
    getCurrentScreen() {
        const activeScreen = document.querySelector('.screen.active');
        return activeScreen ? activeScreen.id : null;
    }
    
    flipCard() {
        if (this.currentWords.length === 0) return;
        
        const card = document.getElementById('vocabularyCard');
        const flipBtn = document.getElementById('flipBtn');
        const flipBtnText = flipBtn.querySelector('.flip-btn-text');
        
        if (!this.isCardFlipped) {
            // Flip to back (show meaning)
            card.classList.add('flipped');
            this.isCardFlipped = true;
            this.markWordAsLearned();
            flipBtnText.textContent = 'Show Word';
        } else {
            // Flip to front (show word)
            card.classList.remove('flipped');
            this.isCardFlipped = false;
            flipBtnText.textContent = 'Flip Card';
        }
    }
    
    resetCard() {
        const card = document.getElementById('vocabularyCard');
        const flipBtn = document.getElementById('flipBtn');
        const flipBtnText = flipBtn.querySelector('.flip-btn-text');
        
        card.classList.remove('flipped');
        this.isCardFlipped = false;
        flipBtnText.textContent = 'Flip Card';
    }
    
    nextCard() {
        if (this.currentWords.length === 0) return;
        
        if (this.currentIndex < this.currentWords.length - 1) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0; // Loop back to first card
        }
        
        this.resetCard();
        this.updateGameUI();
    }
    
    previousCard() {
        if (this.currentWords.length === 0) return;
        
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.currentWords.length - 1; // Loop to last card
        }
        
        this.resetCard();
        this.updateGameUI();
    }
    
    markWordAsLearned() {
        if (this.currentWords.length > 0) {
            const currentWord = this.currentWords[this.currentIndex];
            this.wordsLearned.add(currentWord.kelime);
            this.updateStats();
        }
    }
    
    updateUI() {
        // Update dashboard
        const totalCards = document.getElementById('totalCards');
        if (totalCards) {
            totalCards.textContent = this.currentWords.length;
        }
        
        // Update start button state
        const startBtn = document.getElementById('startGameBtn');
        if (this.currentWords.length === 0) {
            startBtn.textContent = 'Select a Word Set First';
            startBtn.disabled = true;
            startBtn.style.opacity = '0.6';
        } else {
            startBtn.textContent = 'Start Learning';
            startBtn.disabled = false;
            startBtn.style.opacity = '1';
        }
    }
    
    updateGameUI() {
        if (this.currentWords.length === 0) return;
        
        const currentWord = this.currentWords[this.currentIndex];
        
        // Update card content
        document.getElementById('germanWord').textContent = currentWord.kelime;
        document.getElementById('turkishMeaning').textContent = currentWord.anlami;
        document.getElementById('exampleSentence').textContent = currentWord.ornekCumle;
        
        // Update progress
        document.getElementById('currentCard').textContent = this.currentIndex + 1;
        document.getElementById('totalCards').textContent = this.currentWords.length;
        
        // Update navigation buttons
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        // Always enable navigation (circular navigation)
        prevBtn.disabled = false;
        nextBtn.disabled = false;
        
        this.updateStats();
    }
    
    updateStats() {
        document.getElementById('wordsLearned').textContent = this.wordsLearned.size;
        document.getElementById('currentSet').textContent = this.getSetDisplayName(this.currentSet);
    }
    
    getSetDisplayName(setName) {
        const setNames = {
            'bild1': 'Bild 1',
            'bild2': 'Bild 2',
            'bild3': 'Bild 3',
            'bild4': 'Bild 4',
            'bild5': 'Bild 5',
            'bild6': 'Bild 6',
            'bild7': 'Bild 7',
            'bild8': 'Bild 8',
            'bild9': 'Bild 9',
            'bild10': 'Bild 10',
            'bild11': 'Bild 11',
            'bild12': 'Bild 12',
            'bild13': 'Bild 13',
            'bild14': 'Bild 14',
            'bild15': 'Bild 15'
        };
        return setNames[setName] || setName;
    }
}

// Utility Functions
function addRippleEffect(element) {
    element.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// Add ripple effect to buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button, .word-set-btn');
    buttons.forEach(button => {
        if (!button.classList.contains('disabled')) {
            addRippleEffect(button);
        }
    });
});

// Performance optimization for mobile
function optimizeForMobile() {
    // Disable hover effects on touch devices
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    // Optimize scroll performance
    let ticking = false;
    function updateScrollPosition() {
        // Add any scroll-based animations here
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Local Storage for Progress
class ProgressManager {
    static saveProgress(setName, wordsLearned, currentIndex) {
        const progress = {
            setName,
            wordsLearned: Array.from(wordsLearned),
            currentIndex,
            timestamp: Date.now()
        };
        localStorage.setItem('vocabularyGameProgress', JSON.stringify(progress));
    }
    
    static loadProgress() {
        const saved = localStorage.getItem('vocabularyGameProgress');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error('Error loading progress:', e);
            }
        }
        return null;
    }
    
    static clearProgress() {
        localStorage.removeItem('vocabularyGameProgress');
    }
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile optimizations
    optimizeForMobile();
    
    // Create game instance
    window.vocabularyGame = new VocabularyGame();
    
    // Load saved progress if available
    const savedProgress = ProgressManager.loadProgress();
    if (savedProgress && (savedProgress.setName === 'bild1' || savedProgress.setName === 'bild2')) {
        // Restore progress for available sets
        vocabularyGame.currentIndex = savedProgress.currentIndex || 0;
        savedProgress.wordsLearned.forEach(word => {
            vocabularyGame.wordsLearned.add(word);
        });
        vocabularyGame.updateGameUI();
    }
    
    // Save progress periodically
    setInterval(() => {
        if (vocabularyGame.getCurrentScreen() === 'gameScreen') {
            ProgressManager.saveProgress(
                vocabularyGame.currentSet,
                vocabularyGame.wordsLearned,
                vocabularyGame.currentIndex
            );
        }
    }, 10000); // Save every 10 seconds
    
    // Save progress before page unload
    window.addEventListener('beforeunload', () => {
        if (vocabularyGame.getCurrentScreen() === 'gameScreen') {
            ProgressManager.saveProgress(
                vocabularyGame.currentSet,
                vocabularyGame.wordsLearned,
                vocabularyGame.currentIndex
            );
        }
    });
});

// Add CSS for ripple effect
const rippleCSS = `
.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

.touch-device .word-set-btn:hover,
.touch-device .start-game-btn:hover,
.touch-device .back-btn:hover,
.touch-device .shuffle-btn:hover,
.touch-device .nav-btn:hover {
    transform: none;
}
`;

// Inject ripple CSS
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);
