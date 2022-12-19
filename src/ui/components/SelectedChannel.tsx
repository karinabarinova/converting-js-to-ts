import * as React from 'react';
import Channel from './Channel';
import type { IChannel } from "../../types";
import type { match } from 'react-router-dom';


const SelectedChannel: React.FunctionComponent<any> = ( { match, channels }: {
  match: match<{
    channelId: string;
  }>, channels: IChannel[]
} ) =>
{
  if ( !channels ) throw new Error( 'no channels' );
  if ( !match ) throw new Error( 'no match' );

  const { params } = match;
  if ( !match ) return <p>No match params</p>;
  const { channelId: selectedChannelId } = params;
  if ( !selectedChannelId ) return <p>Invalid channelId</p>;
  const selectedChannel = channels.find(
    ( c: any ) => c.id === selectedChannelId,
  );
  if ( !selectedChannel )
    return (
      <div>
        <p>Could not find channel with id { selectedChannelId }</p>
        <pre>{ JSON.stringify( channels, null, '  ' ) }</pre>
      </div>
    );

  return <Channel channel={ selectedChannel } />;
};

export default SelectedChannel;
