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
    }

    document.addEventListener('deviceready', initializeOnesignalPushSDK, false);
    
  }
});
