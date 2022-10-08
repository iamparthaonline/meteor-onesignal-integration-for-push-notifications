import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';

Meteor.startup(() => {
  render(<App/>, document.getElementById('react-target'));

  if(Meteor.isCordova){

    function initializeOnesignalPushSDK(){
      alert('opened in mobile');
      window.plugins.OneSignal.setAppId('2722650b-a374-48bd-9e8f-c4446e87895e');
  
      window.plugins.OneSignal.promptForPushNotificationsWithUserResponse( function(accepted) {
        alert("User has accepted push notifications", accepted );
      })

      window.plugins.OneSignal.setNotificationOpenedHandler(function(jsonData){
        const {title, body, additionalData} = jsonData.notification;
        alert(' Title: ' + title);
        alert('Description' + body);
        alert('additionalData '+ JSON.stringify(additionalData))
      })

      /** Setting user id */
      window.plugins.OneSignal.setExternalUserId(Meteor.userId());

      /** Removing user id */
      window.plugins.OneSignal.removeExternalUserId(results => {});
    }

    document.addEventListener('deviceready', initializeOnesignalPushSDK, false);
    
  }
});
