
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function printLyrics() {
    const lines = [
        [''],
        ["The world was on fire and no one could save me but you", 90],
        ["It's strange what desire will make foolish people do", 90],
        ["I never dreamed that I'd meet somebody like you", 90],
        ["And I never dreamed that I'd lose somebody like you", 90],
        ['No, I dont wanna fall in love (this world is only gonna break your heart)',90],
        ['No, I dont wanna fall in love (this world is only gonna break your heart)',90],
        ['With you', 80],
        ['With you',70],
    
        [''],
    ];

    const delays = [200, 3500, 3500, 3500, 
                    3500, 3500, 
                    3500, 3500];
                    
    for (let i = 0; i < lines.length; i++) {
        let [line, charDelay] = lines[i];
        for (const char of line) {
            process.stdout.write(char);
            await sleep(charDelay);
        }
        await sleep(delays[i]);
        console.log('');
    }
}

printLyrics();
