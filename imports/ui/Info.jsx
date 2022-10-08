import React, {
  useState
} from 'react';


const ONESIGNAL_APP_ID = '2722650b-a374-48bd-9e8f-c4446e87895e';
const ONESIGNAL_API_KEY = 'YjQ0ZWRkNTQtODIwNS00MWJhLWIzMTUtMWJiMjllODk4ODNi'


export const Info = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // handle form submission
    const formSubmitHandler = async (e) => {
      e.preventDefault();
      e.stopPropagation();

      // create the notification data
      let notificationData = {
        app_id: ONESIGNAL_APP_ID,
        contents: {
          "en": description
        },
        headings: {
          "en": title
        },
        included_segments: ["All"],
        data: {
          currentTime: new Date(),
          sentBy: "Partha"
        }
      };

      // headers with authentication key from onesignal
      const headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": `Basic ${ONESIGNAL_API_KEY}`
      };

      const response = await fetch('https://onesignal.com/api/v1/notifications', {
        method: 'POST',
        cache: 'no-cache',
        headers,
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(notificationData)
      });

      console.log('response', response)

    }

    return (
      <div>
        <h2>Push Notification Details</h2>
        <form onSubmit={formSubmitHandler}>
          <div><input type="text" placeholder='Push Title' value={title} onChange={(e) => {
            setTitle(e.target.value);
          }}/></div>
          <br/>
          <div><input type="text" placeholder='Push Description' value={description} onChange={(e) => {
            setDescription(e.target.value);
          }}/></div>

          <br/>
          <button type='submit'>Send Push </button>
        </form>
      </div>
    );
};
