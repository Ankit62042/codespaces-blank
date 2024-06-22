const LogMonitor = require('./LogMonitor');
const fs = require('fs');
const readline = require('readline');

const logMonitor = new LogMonitor();
const inputFile = 'input.txt';
const outputFile = 'output.txt';

// Create write stream for output
const output = fs.createWriteStream(outputFile, { flags: 'w' });

const rl = readline.createInterface({
    input: fs.createReadStream(inputFile),
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    if (line.startsWith('1 ')) {
        const parts = line.substring(2).split(';');
        const timestamp = parseInt(parts[0], 10);
        const logType = parts[1];
        const severity = parseFloat(parts[2]);
        logMonitor.addLog(timestamp, logType, severity);
    } else if (line.startsWith('2 ')) {
        const logType = line.substring(2);
        const meanSeverity = logMonitor.meanSeverityByType(logType);
        output.write(`Mean: ${meanSeverity}\n`);
    } else if (line.startsWith('3 BEFORE ')) {
        const timestamp = parseInt(line.substring(10), 10);
        const meanSeverity = logMonitor.meanSeverityBefore(timestamp);
        output.write(`Mean: ${meanSeverity}\n`);
    } else if (line.startsWith('3 AFTER ')) {
        const timestamp = parseInt(line.substring(9), 10);
        const meanSeverity = logMonitor.meanSeverityAfter(timestamp);
        output.write(`Mean: ${meanSeverity}\n`);
    } else if (line.startsWith('4 BEFORE ')) {
        const parts = line.substring(10).split(' ');
        const logType = parts[0];
        const timestamp = parseInt(parts[1], 10);
        const meanSeverity = logMonitor.meanSeverityBeforeType(logType, timestamp);
        output.write(`Mean: ${meanSeverity}\n`);
    } else if (line.startsWith('4 AFTER ')) {
        const parts = line.substring(9).split(' ');
        const logType = parts[0];
        const timestamp = parseInt(parts[1], 10);
        const meanSeverity = logMonitor.meanSeverityAfterType(logType, timestamp);
        output.write(`Mean: ${meanSeverity}\n`);
    }
});

rl.on('close', () => {
    output.end();
});
