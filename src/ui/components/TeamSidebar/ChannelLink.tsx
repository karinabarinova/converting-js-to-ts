import * as React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Channel } from "../Channel";

const ChannelLink: React.FunctionComponent<any> = ( { to, channel }: { to: string, channel: Channel } ) =>
{
  const match = useRouteMatch( to );
  return (
    <Link
      to={ to }
      className={
        'team-sidebar__channel-link py-1 px-4 no-underline block' +
        ( match ? 'font-bold bg-teal-700 text-gray-200' : '' )
      }
    >
      <span aria-hidden="true"># </span>
      { channel.name }
    </Link>
  );
};

export default ChannelLink;
