const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dateTime = new Date();
const utcDate = dateTime.toISOString().split('.')[0] + 'Z';

let day = weekday[dateTime.getDay()];

app.get('/api', (req, res) => {

    const { slack_name, track } = req.query;
    res.status(200).json({
        'slack_name': slack_name,
        'current_day': day,
        'utc_time': utcDate,
        'track': track,
        'github_file_url': "https://github.com/Temitope-Afolabi/HNGInternship/blob/main/app.js",
        'github_repo_url': "https://github.com/Temitope-Afolabi/HNGInternship",
        'status_code': 200
    }
    )


})

app.listen(port, () => { console.log(`Server is listening on port ${port} ...`) })