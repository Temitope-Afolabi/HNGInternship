const express = require('express')
const app = express()

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dateTime = new Date();
let day = weekday[dateTime.getDay()];




app.get('/api', (req, res) => {

    const { slack_name, track } = req.query;
    res.status(200).json({
        'slack_name': slack_name,
        'current_day': day,
        'utc_time': dateTime,
        'track': track,
        'github_file_url': "https://github.com/Temitope-Afolabi/HNGInternship/blob/main/app.js",
        'github_repo_url': "https://github.com/Temitope-Afolabi/HNGInternship",
        'status_code': 200
    }
    )

})

app.listen(5000, () => { console.log('Server is listening on port 5000...') })