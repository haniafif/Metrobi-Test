async function timingConsole(messageArray, initialTiming, multipleFactor) {
    let timingMultipicable = initialTiming;
    const timing = () => new Promise(resolve => setTimeout(resolve, timingMultipicable));
    for (let message of messageArray) {
        await timing();
        console.log(message);
        timingMultipicable *= multipleFactor;
    }
}

timingConsole(['a', 'b', 'c', 'd'], 1000, 2);