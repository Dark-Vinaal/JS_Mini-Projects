const express = require("express");
const app = express();
const port = 4502;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

app.post("/biodata", (req, res) => {
  const data = {};
  for (const [key, value] of Object.entries(req.body))
    data[key] = escapeHtml(value);

  res.send(`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Bio Data</title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <div class="result-card">
            <div class="profile-icon">👤</div>
            <h1>${data.name}</h1>
            <p class="subtitle">Personal Bio Data</p>

            <h2>Personal Information</h2>
            <div class="details">
                <div class="row"><span>Full Name</span><strong>${data.name}</strong></div>
                <div class="row"><span>Date of Birth</span><strong>${data.dob}</strong></div>
                <div class="row"><span>Age</span><strong>${data.age}</strong></div>
                <div class="row"><span>Gender</span><strong>${data.gender}</strong></div>
                <div class="row"><span>Blood Group</span><strong>${data.blood}</strong></div>
            </div>

            <h2>Family Information</h2>
            <div class="details">
                <div class="row"><span>Father's Name</span><strong>${data.father}</strong></div>
                <div class="row"><span>Mother's Name</span><strong>${data.mother}</strong></div>
            </div>

            <h2>Education</h2>
            <div class="details">
                <div class="row"><span>Qualification</span><strong>${data.qualification}</strong></div>
                <div class="row"><span>Institution</span><strong>${data.institution}</strong></div>
            </div>

            <h2>Contact Information</h2>
            <div class="details">
                <div class="row"><span>Mobile</span><strong>${data.mobile}</strong></div>
                <div class="row"><span>Email</span><strong>${data.email}</strong></div>
                <div class="row"><span>Address</span><strong>${data.address}</strong></div>
            </div>

            <a href="/" class="back">← Edit Bio Data</a>
        </div>
    </body>
</html>`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
