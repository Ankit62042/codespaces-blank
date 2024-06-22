# Log Monitoring Platform

This is a log monitoring platform that processes log entries and performs various calculations based on log types and timestamps. The application reads inputs from a file `input.txt` and writes the outputs to a file `output.txt`.

## Features

- Add new log entries.
- Compute the mean severity of log entries by type.
- Compute the mean severity of log entries before or after a specific timestamp.
- Compute the mean severity of log entries by type and before or after a specific timestamp.

## Input Format

Each log entry or command is written in a specific format:

1. **Add Log Entry**:

2. **Compute Mean Severity by Log Type**:

3. **Compute Mean Severity Before a Timestamp**:

4. **Compute Mean Severity After a Timestamp**:

5. **Compute Mean Severity Before a Timestamp by Log Type**:

6. **Compute Mean Severity After a Timestamp by Log Type**:


## Sample Input

1 1715744138011;INTERNAL_SERVER_ERROR;23.72
1 1715744138012;INTERNAL_SERVER_ERROR;10.17
2 INTERNAL_SERVER_ERROR
1 1715744138012;BAD_REQUEST;15.22
1 1715744138013;INTERNAL_SERVER_ERROR;23.72
3 BEFORE 1715744138011
3 AFTER 1715744138010
2 BAD_REQUEST
4 BEFORE INTERNAL_SERVER_ERROR 1715744138011
4 AFTER INTERNAL_SERVER_ERROR 1715744138010


## Sample Output

Mean: 16.945
Mean: 0.0
Mean: 18.2075
Mean: 15.22
Mean: 0.0
Mean: 19.203333


## Setup and Usage

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Docker](https://www.docker.com/) installed on your machine (if you want to run the application in a Docker container).

### Running the Application Locally

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/Ankit62042/log-monitor.git
   cd log-monitor

### Install Dependencies:

npm install


### Run the Application:

node Main.js

### Running the Application in Docker

Build the Docker Image

docker build -t log_monitor .


Run the Docker Container:

docker run -v $(pwd):/usr/src/app log_monitor


### file structure

.
├── Dockerfile
├── LogEntry.js
├── LogMonitor.js
├── Main.js
├── input.txt
├── output.txt
└── package.json


### AUTHOR

ANKIT KUMAR