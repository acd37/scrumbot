const express = require('express');
const sls = require('serverless-http');
const app = express();
const data = require('./data.json');

app.get('/', async (req, res, next) => {
    const randomTeamMember = Math.floor(Math.random() * data.team.length);
    const randomRootVegetable = Math.floor(
        Math.random() * data.vegetables.length
    );
    const randomAdjective = Math.floor(Math.random() * data.adjectives.length);

    const randomScrumStart = `<@${data.team[randomTeamMember].id}> has the ${data.adjectives[randomAdjective]} ${data.vegetables[randomRootVegetable]}`;

    res.status(200).json({
        response_type: 'in_channel',
        text: randomScrumStart
    });
});

module.exports.server = sls(app);
