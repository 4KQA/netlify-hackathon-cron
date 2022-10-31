# The Problem
Running scheduled jobs in multi-instance apps generates a set of problems:
- How to make sure only one instance, and not all, run the job?
- What's the recovery strategy, if a scheduled job didn't run?
- There are third party services that trigger endpoints, but how do we pick one, without running into issues in the long run?

# The Opportunity
With Netlify's recently released scheduled functions, we're able to schedule api endpoint calls to trigger scheduled jobs externally.

# The concept
We can explore Netlify's scheduled function with having a Next.js app, that exposes an API endpoint to check on the app's health.
A scheduled serverless function will then check up on the health status. If the health status returns an http status 500 - we trigger a programmatic redeployment of our Next.js in hope for fixing the server error.


# The Demo

Show that!
