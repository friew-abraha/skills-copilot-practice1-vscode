// Create web server
const http = require('http');
const fs = require('fs');

// Create web server
const server = http.createServer((req, res) => {
    // Read file
    fs.readFile('./comments.json', (err, data) => {
        if (err) {
            res.end('Error');
        } else {
            res.end(data);
        }
    });
});

// Start server
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Path: addComment.js
const http = require('http');
const fs = require('fs');

// Create web server
const server = http.createServer((req, res) => {
    // Read file
    fs.readFile('./comments.json', (err, data) => {
        if (err) {
            res.end('Error');
        } else {
            // Parse JSON
            let comments = JSON.parse(data);
            // Add new comment
            comments.push({
                name: 'John',
                message: 'Hello world!'
            });
            // Write file
            fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
                if (err) {
                    res.end('Error');
                } else {
                    res.end('Comment added');
                }
            });
        }
    });
});

// Start server
server.listen(3001, () => {
    console.log('Server is running on port 3001');
});

// Path: removeComment.js
const http = require('http');
const fs = require('fs');

// Create web server
const server = http.createServer((req, res) => {
    // Read file
    fs.readFile('./comments.json', (err, data) => {
        if (err) {
            res.end('Error');
        } else {
            // Parse JSON
            let comments = JSON.parse(data);
            // Remove last comment
            comments.pop();
            // Write file
            fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
                if (err) {
                    res.end('Error');
                } else {
                    res.end('Comment removed');
                }
            });
        }
    });
});

// Start server
server.listen(3002, () => {
    console.log('Server is running on port 3002');
});

// Run servers
// Run the server
// node comments.js
// Run the server
// node addComment.js
// Run