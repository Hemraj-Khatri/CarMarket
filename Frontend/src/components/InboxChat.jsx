import { App as SendbirdApp, SendBirdProvider } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { GroupChannelList } from '@sendbird/uikit-react/GroupChannelList';
import { GroupChannel } from '@sendbird/uikit-react/GroupChannel';

function InboxChat() {
  const { userInfo } = useSelector((state) => state.auth);
 

  const [channelUrl, setChannelUrl] = useState();

  return (
    // The chat interface can expand up to the dimensions of your parent component.
    // To achieve a full-screen mode, apply the following CSS rules to the parent element.
    <div style={{ width: '90vw', height: '500px' }}>
      <SendBirdProvider
        appId={import.meta.env.VITE_SENDBIRD_APP_ID}
        userId={userInfo?.fullName} // Correct user ID should be set here
        nickname={userInfo?.username} // Correct property name for nickname
        profileUrl={userInfo?.profilePhoto}
        allowProfileEdit={true}
      >
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3 w-[94%] h-full'>
          {/* Channel List */}
          <div className='shadow-lg border p-5'>
            <GroupChannelList
              onChannelSelect={(channel) => {
                setChannelUrl(channel?.url);
              }}
              channelListQueryParams={{
                includeEmpty: true,
              }}
            />
          </div>
          {/* Message Area */}
          <div className='md:col-span-2 shadow-lg'>
            <GroupChannel channelUrl={channelUrl} />
          </div>
        </div>
      </SendBirdProvider>
    </div>
  );
}

export default InboxChat;
