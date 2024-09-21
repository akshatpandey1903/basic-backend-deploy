require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('hiteshdotcom')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Visiting /youtube</h2>')
})

const githubData = {
  "login": "akshatpandey1903",
  "id": 174491837,
  "node_id": "U_kgDOCmaIvQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/174491837?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/akshatpandey1903",
  "html_url": "https://github.com/akshatpandey1903",
  "followers_url": "https://api.github.com/users/akshatpandey1903/followers",
  "following_url": "https://api.github.com/users/akshatpandey1903/following{/other_user}",
  "gists_url": "https://api.github.com/users/akshatpandey1903/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/akshatpandey1903/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/akshatpandey1903/subscriptions",
  "organizations_url": "https://api.github.com/users/akshatpandey1903/orgs",
  "repos_url": "https://api.github.com/users/akshatpandey1903/repos",
  "events_url": "https://api.github.com/users/akshatpandey1903/events{/privacy}",
  "received_events_url": "https://api.github.com/users/akshatpandey1903/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Akshat Pandey",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2024-07-02T16:54:05Z",
  "updated_at": "2024-09-14T19:14:16Z"
}

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})