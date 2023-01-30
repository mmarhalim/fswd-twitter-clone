import $ from 'jquery';

$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  },
  error: function (request, errorMessage) {
    console.log(request, errorMessage);
  }
});

//____________________USER & SESSIONS__________________

//___________________Create a User_____________________

export function createUser(username, email, password, callback) {
  var request = {
    type: 'POST',
    url: 'api/users',
    data: {
      user: {
        username: username,
        email: email,
        password: password
      }
    },
    success: function (response) {
      callback(response);
    }
  };
  $.ajax(request);
};

//___________Create Session (User Logs in)_____________

export function logInUser(username, password, callback) {
  var request = {
    type: 'POST',
    url: 'api/sessions',
    data: {
      user: {
        username: username,
        password: password
      }
    },
    success: function (response) {
      callback(response);
    }
  };
  $.ajax(request);
};

//___________Delete Session (User Logs Out)_____________

export function logOutUser(callback) {
  var request = {
    type: 'DELETE',
    url: 'api/sessions',
    success: function (response) {
      callback(response);
    }
  };
  $.ajax(request);
};

//_____________Authenticate User________________

export function authenticateUser(callback) {
  var request = {
    type: 'GET',
    url: 'api/authenticated',
    success: function (response) {
      callback(response);
    }
  };
  $.ajax(request);
};

//__________________TWEETS______________________


//________________Get Tweets____________________

export function getTweets(callback) {
  var request = {
    type: 'GET',
    url: 'api/tweets',
    success: function (response) {
      callback(response);
    }
  };
  $.ajax(request);
};

//______________Get Users Tweets__________________

export function getUsersTweets(username, callback) {
  var request = {
    type: 'GET',
    url: '/api/users/' + username + '/tweets',
    success: function (response) {
      if (response.error) {
        window.location.replace('/feed');
      }
      else {
        callback(response);
      }
    }
  }
  $.ajax(request);
}


//_______________Post a Tweet___________________

export function postTweet(content, photo, callback) {
  var formData = new FormData();
  if (content) {
    formData.append('tweet[message]', content);
  }
  if (photo) {
    formData.append('tweet[image]', photo);
  }
  var request = {
    type: 'POST',
    url: 'api/tweets',
    cache: false,
    contentType: false,
    processData: false,
    xhrFields: { 'withCredentials': true },
    data: formData,
    success: function (response) {
      callback(response);
    }
  };
  $.ajax(request);
};

//_______________Delete a Tweet__________________

export function deleteTweet(id, callback) {
  var request = {
    type: 'DELETE',
    url: 'api/tweets/' + id,
    success: function (response) {
      if (response.success == true) {
        callback();
      }
    }
  };
  $.ajax(request);
};
