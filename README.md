# Better Watch Saul

This is an app for watching season 5 of Better Call Saul.

This isn't piracy because I only did it to practice S3 and Cloudfront and MongoDB

![maxresdefault](https://user-images.githubusercontent.com/32403644/236652476-cc3a1345-aa8c-4579-a351-2e6fc7709e95.png)

## Architecture

![Better Watch Saul](https://user-images.githubusercontent.com/32403644/236652373-8c39d024-fdb9-40c0-990a-4e0d2185ac44.png)

## Testing Lambda Locally

in `/better-watch-saul-api` directory, type

`serverless invoke local --function api --path="tests/getTrack.json"`

`serverless invoke local --function api --path="tests/getTracksFromSeason.json"`
