import user from '../data/user.json';
import statistics from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { Section } from './Section/Section';
import { Profile } from './SocialProfile/SocialProfile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <h1>Hello React!</h1>

      <Section title={'Social profile'}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title={'Upload stats'}>
        <Statistics title="Upload stats" stats={statistics} />
        <Statistics stats={statistics} />
      </Section>

      <Section title={'FriendList'}>
        <FriendList friends={friends} />
      </Section>

      <Section title={'Transaction History'}>
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
};
