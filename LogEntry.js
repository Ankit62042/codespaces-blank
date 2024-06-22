class LogEntry {
    constructor(timestamp, logType, severity) {
        this.timestamp = timestamp;
        this.logType = logType;
        this.severity = severity;
    }
}

module.exports = LogEntry;
