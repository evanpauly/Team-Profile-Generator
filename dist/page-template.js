//should create cards
const generateCards = teamArr => {
  return `
    <section class="card" id="all-cards">
      <div class= "card-body">
        ${teamArr
          .map(({ engineerName, engineerID, engineerGithub, engineerEmail }) => {
            return `
             
        `;
      })
    }
  </div>
  </section>
  `;
};


module.exports = templateData => {
  const { manager, engineer, intern } = templateData;

return `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./dist/style.css">
    <title>Team Profile</title>
</head>

<body>
  <div class="card">
    <h5 class="card-header">${engineer}</h5>
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
      <p class="card-text">${engineer}</p>
      <p class="card-text">${engineer}</p>
      <p class="card-text">${engineer}</p>
    </div>
  </div>
</body>

</html>
`;
};

