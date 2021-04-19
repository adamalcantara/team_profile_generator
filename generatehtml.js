let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">    
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    
    <header>
        <div class="jumbotron jumbotron-fluid custom-jumbotron">
            <div class="container">
                <h1 class= "display-4">Team Profile Generator</h1>
            </div>
        </div>
    </header>

    <main>`

const generateHTML = (arr) => {
    arr.forEach(employee => {
        switch(employee.getRole()) {
            case "Manager":
                managerCreate(employee);
                break;
            
            case "Engineer":
                engineerCreate(employee);
                break;

            default:
            internCreate(employee);
                break;
        }
    });

    return html+=

    `</main>
</body>
</html>`

}

