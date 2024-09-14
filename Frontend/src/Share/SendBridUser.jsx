import axios from "axios";

const SendBirdApplicationId = import.meta.env.VITE_SENDBIRD_APP_ID;
const SendBirdApiToken = import.meta.env.VITE_SENDBIRD_APP_TOKEN;


const createSendBirdUser = async (userId, nickName, profileUrl) => {
  try {
    const response = await axios.post(
      'https://api-'+SendBirdApplicationId+'.sendbird.com/v3/users',
      {
        user_id: userId,
        nickname: nickName,
        profile_url: profileUrl,
        issue_access_token: false
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Api-Token': SendBirdApiToken
        }
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
    } else if (error.request) {
      console.error('Error request data:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw error;
  }
};

const CreateSendBirdChannel = (users, title)=>{
  return axios.post('https://api-'+SendBirdApplicationId+'.sendbird.com/v3/group_channels',{
    user_ids:users,
    is_distinct: true,
    name:title,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Api-Token': SendBirdApiToken
    }
  });


}



export default {createSendBirdUser, CreateSendBirdChannel};
