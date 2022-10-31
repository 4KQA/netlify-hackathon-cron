import fetch from "node-fetch";
import { schedule } from "@netlify/functions";

const handler = async (event, context) => {
  const appResponse = await fetch(
    "https://hackathon-cron.netlify.app/api/heartbeat"
  );

  console.log(`Heartbeat responded with ${appResponse.status}`);
  if (appResponse.status == 500) {
    //server down, trigger redeployment
    console.log("Triggering redeploy");
    const redeployResponse = await fetch(
      "https://api.netlify.com/build_hooks/635fc611802d9034473e7512",
      { method: "POST" }
    );
  } else {
    console.log("All good - waiting for next heartbeat");
  }
};

export { handler };
