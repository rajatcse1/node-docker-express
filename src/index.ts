import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello, World! 1');
});

try {
    app.listen(PORT, () => {
        console.log(`Server is running at http://${HOST}:${PORT}`);
        console.log(`Press Ctrl+C to stop the server`);
        console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
        console.log(`Node.js version: ${process.version}`);
        console.log(`Express version: ${require('express/package.json').version}`);
        console.log(`TypeScript version: ${require('typescript/package.json').version}`);
        console.log(`OS: ${process.platform} ${process.arch}`);
    });        
} catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1);       
}