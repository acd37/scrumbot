const express = require('express');
const sls = require('serverless-http');
const app = express();

app.get('/', async (req, res, next) => {
    const team = [
        {
            firstName: 'Alec',
            lastName: 'Down',
            id: 'UGPBRB6Q1'
        },
        {
            firstName: 'Mariam',
            lastName: 'Sallam',
            id: 'U8769316C'
        },
        {
            firstName: 'Shaté',
            lastName: 'Edwards',
            id: 'U94AGP23T'
        },
        {
            firstName: 'Iris',
            lastName: 'Gardner',
            id: 'UALEN7SE4'
        },
        {
            firstName: 'Lindsey',
            lastName: 'DesRochers',
            id: 'UMS9AE4S3'
        }
    ];

    const random = Math.floor(Math.random() * team.length);

    const randomScrumStart = '<@' + team[random].id + '> kicks of scrum today!';

    res.status(200).json({
        response_type: 'in_channel',
        text: randomScrumStart
    });
});

module.exports.server = sls(app);
