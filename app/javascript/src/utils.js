import { authenticateUser, getUsersTweets } from "./requests";

//  check logged in user

export function getCurrentUser(callback) {
  authenticateUser(function (response) {
    if (response.authenticated == true) {
      callback(response);
    }
    // else if (response.authenticated == false) {
      // window.location.replace('/');
    // }
  });
};

//  count tweets for user stats

export function countUsersTweets(username, callback) {
  getUsersTweets(username, function (response) {
    callback(response.tweets.length);
  })
};