const LogEntry = require('./LogEntry');

class LogMonitor {
    constructor() {
        this.logs = [];
    }

    addLog(timestamp, logType, severity) {
        this.logs.push(new LogEntry(timestamp, logType, severity));
    }

    meanSeverityByType(logType) {
        let totalSeverity = 0.0;
        let count = 0;
        for (const log of this.logs) {
            if (log.logType === logType) {
                totalSeverity += log.severity;
                count++;
            }
        }
        return count === 0 ? '0.0' : (totalSeverity / count).toFixed(6);
    }

    meanSeverityBefore(timestamp) {
        let totalSeverity = 0.0;
        let count = 0;
        for (const log of this.logs) {
            if (log.timestamp < timestamp) {
                totalSeverity += log.severity;
                count++;
            }
        }
        return count === 0 ? '0.0' : (totalSeverity / count).toFixed(6);
    }

    meanSeverityAfter(timestamp) {
        let totalSeverity = 0.0;
        let count = 0;
        for (const log of this.logs) {
            if (log.timestamp > timestamp) {
                totalSeverity += log.severity;
                count++;
            }
        }
        return count === 0 ? '0.0' : (totalSeverity / count).toFixed(6);
    }

    meanSeverityBeforeType(logType, timestamp) {
        let totalSeverity = 0.0;
        let count = 0;
        for (const log of this.logs) {
            if (log.logType === logType && log.timestamp < timestamp) {
                totalSeverity += log.severity;
                count++;
            }
        }
        return count === 0 ? '0.0' : (totalSeverity / count).toFixed(6);
    }

    meanSeverityAfterType(logType, timestamp) {
        let totalSeverity = 0.0;
        let count = 0;
        for (const log of this.logs) {
            if (log.logType === logType && log.timestamp > timestamp) {
                totalSeverity += log.severity;
                count++;
            }
        }
        return count === 0 ? '0.0' : (totalSeverity / count).toFixed(6);
    }
}

module.exports = LogMonitor;
