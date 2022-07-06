# Facebook Messenger Chatbot using NodeJS
![bandicam 2022-07-06 07-46-06-940_1](https://user-images.githubusercontent.com/90015124/177462773-bd8e7d0e-3eb6-4aa2-b155-b5f2351e25a5.gif)

## REST Endpoint Documentation
### URL/message
![image](https://user-images.githubusercontent.com/90015124/177463002-970b89c7-d331-4613-86a3-994654a180fc.png)

### URL/message/:id
![image](https://user-images.githubusercontent.com/90015124/177463202-9899519f-a628-424e-ac90-0963e4219757.png)

### URL/message/:id
![image](https://user-images.githubusercontent.com/90015124/177463288-979c406e-f9ce-4f50-9472-c4a010d945a3.png)


## The Task
1. Be able to run Facebook Messenger webhook.
2. When a user starts a conversation, say `Hi` and ask a few questions:
    1. User's first name
    2. User’s birthdate. To make it simpler, you can assume there's only one valid date format `YYYY-MM-DD`
    3. Ask if the user wants to know how many days till his next birthday. 
    This is a yes/no answer and the bot should accept both user text answers 
    (`"yes", "yeah", "yup", "no”, "nah"`, etc.) or quick reply buttons.
        1.  If the user says **yes** to the last question, send him a message: 
        `There are <N> days left until your next birthday`
        2. If the user says **no**, just say: `Goodbye 👋`
3. Within the same app, create a REST endpoints: 
    1. `/messages` that list all messages received from users
    2. `/messages/:id` to view single message by its ID
    3. `/summary` to view this data exact data
    
    ```json
    [
     { user: <user_id>, name: <user_name>, messages: [<list_of_users_messages>] }
     { user: <user_id>, name: <user_name>, messages: [<list_of_users_messages>] }
     ...
    ]
    ```
    
4. If you have an idea - feel free to add something extra to the app!
- It is important to use a database as the persistence layer rather than runtime memory as DB
- Tested code are a big bonus point


### How to Run This Project
1. Clone this Github repository
2. Change the .env.example file to .env and customize them with your own variables
3. Deploy your project to Heroku so the webhook will be active and can be used.
4. Create a Facebook page for your bot with only send message button activated.
5. Create you Facebook Developer app [here](https://developers.facebook.com/).
6. Adjust your variables such ass Facebook PageID,token, etc with your Facebook app and config your Facebook webhook by adding /webhook to your Heroku app URL, also dont forget to enable the NLP (Natural Language Processing) that is given by Facebook.
7. Your bot is ready to be used.

## Reference and documentation
- https://developers.facebook.com/docs/
- https://www.mongodb.com/docs/
- https://www.youtube.com/watch?v=x_0X3EHmIu4

## Note
In this version app I used facebook webhook with NodeJS, I also created a version that are using MongoDB as database which is [here](https://github.com/agungmulia/FacebookMessengerChatbot-NodeJS-MongoDB) so the data is getting processed through the database. Also I want to mention that testing is coming to next update soon, I made my testing using Jest. With this app you also can test my chatbot in [Facebook](https://www.facebook.com/agungmuliachatbot/?locale=en_US) or in [Heroku app](https://agungchatbot.herokuapp.com/) that I've already deployed. I finalized my Git and reinitialized them to look more clean, I want to use git flow, but my commits are a lot, so I choose to reinitialized and rebased them.



