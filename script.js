// Modern Drum Kit JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Initialize sounds
    const instruments = ['kick', 'snare', 'clap', 'open', 'closed', 'cymbal'];
    const sounds = {};

    instruments.forEach(instrument => {
        sounds[instrument] = new Audio(`sounds/${instrument}.wav`);
        sounds[instrument].preload = 'auto';
    });

    // Key mapping
    const keyMap = {
        'Q': 'kick',
        'W': 'snare',
        'E': 'clap',
        'R': 'closed',
        'T': 'open',
        'Y': 'cymbal'
    };

    // Play sound and add visual feedback
    function playSound(instrument) {
        const sound = sounds[instrument];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(e => console.log('Audio play failed:', e));
        }

        // Add visual feedback
        const drumItem = document.querySelector(`[data-key="${Object.keys(keyMap).find(key => keyMap[key] === instrument)}"]`);
        if (drumItem) {
            drumItem.classList.add('active');
            setTimeout(() => {
                drumItem.classList.remove('active');
            }, 150);
        }
    }

    // Click handlers for drum items (all interfaces)
    document.querySelectorAll('.drum-item, .drum-terminal-item, .audio-bar').forEach(item => {
        item.addEventListener('click', function () {
            const key = this.getAttribute('data-key');
            const instrument = keyMap[key];
            if (instrument) {
                playSound(instrument);
            }
        });
    });

    // Keyboard handlers
    document.addEventListener('keydown', function (event) {
        if (event.repeat) return;

        const key = event.key.toUpperCase();
        const instrument = keyMap[key];

        if (instrument) {
            event.preventDefault();
            playSound(instrument);
        }
    });

    // Add hover effects
    document.querySelectorAll('.drum-item').forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-2px)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });
});
