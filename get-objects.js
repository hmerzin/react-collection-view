const fs = require('fs');

fs.readFile('./Samples.txt', 'utf-8', (err, data) => {
    const samples = data.split('\n');
    const samplesArr = [];
    samples.forEach(sample => {
        const splitSample = sample.split(',');
        samplesArr.push({titleImage: `./images/${splitSample[1]}`, styleNum: splitSample[0]});
    });
    fs.writeFile('./Samples.js', `export default Samples = ${JSON.stringify(samplesArr)}`);
});
