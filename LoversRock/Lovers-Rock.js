
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function printLyrics() {
    const lines = [
        [''],
        ["But if you're too drunk to drive", 80],
        ["and the music is right", 80],
        ["she might let you stay", 80],
        ["but just for the night", 80],
        ['And if she grabs for your hand',70],
        ['And drags you along',80],
        ['She might want a kiss', 80],
        ['Before the end of this song',70],
        ['Because love can burn like a cigarette', 120],
        ['And leave you alone with nothing', 60],
        ['And leave you alone with nothing', 100], 
        [''],
    ];

    const delays = [250, 200, 200, 200, 
                    200, 200, 
                    200, 200, 2000, 2000];
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
