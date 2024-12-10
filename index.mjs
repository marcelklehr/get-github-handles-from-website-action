import fetch from 'node-fetch'
import core from '@actions/core'

(async () => {
  // `website` input defined in action metadata file
  const website = core.getInput('website');
  console.log(`Scraping ${website}`);
  const res = await fetch(website)
  const html = await res.text()
  const users = Array.from(
    new Set(
      Array.from(
        html.matchAll(/<a [^>]*?href=["']https:\/\/github.com\/([^?\/]*?)\/?["']/g)
      )
      .map(([_, handle]) => handle)
    )
  )
  console.log('Found', users)
  core.setOutput("users", users.join(','));
})().catch(error => {
  core.setFailed(error.message);
})
