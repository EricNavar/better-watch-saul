# Better Watch Saul

This is an app for watching season 5 of Better Call Saul.

This isn't piracy because I only did it to practice S3 and Cloudfront and MongoDB

![maxresdefault](https://user-images.githubusercontent.com/32403644/236652476-cc3a1345-aa8c-4579-a351-2e6fc7709e95.png)

## Architecture

![Better Watch Saul(1)](https://user-images.githubusercontent.com/32403644/236652820-5f54e79f-6707-4f30-819c-e413ff975d6d.png)

- This is a MERN stack web app. The backend is deployed on AWS Lambda and API Gateway with the Serverless framework and the frontend is deployed on AWS Amplify.
- Serverless creates a cloudformation stack which creates a lambda function accessible by api gateway
- Serverless is configured by serverless.yml
- The lambda function is an express app. Instead of having the app listen you wrap it in this serverless function. It connects to MongoDB with Mongoose.
- MongoDB stores data for each episode, including a link to the video source provided by cloud front.
- The videos are stored on s3 and then made more accessible through cloudfront

## Testing Lambda Locally

in `/better-watch-saul-api` directory, type

`serverless invoke local --function api --path="tests/getTrack.json"`

`serverless invoke local --function api --path="tests/getTracksFromSeason.json"`
