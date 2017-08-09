

// basic route that sends the user first to the AJAX page
app.get('/', function(request, response) {
    response.sendFile(path.join (__dirname, 'home.html'));
});

app.get('/survey', function(request, response) {
    response.sendFile(path.join (__dirname, 'survey.html'));
});

// get all results
app.get('/all', function(request, response) {
    response.json(answers);
});

// search for specific results (or all results) - provides JSON
app.get('/api/:results?', function(request, results) {
    var chosen = request.params.answers;

    if(chosen) {
        console.log(chosen);

        for(var i = 0; i < answers.length; i++) {
            if (chosen === answers[i].routeName) {
                return results.json(answers[i]);
            }
        }
        return results.json(false);
    }
    return results.json(answers);
});