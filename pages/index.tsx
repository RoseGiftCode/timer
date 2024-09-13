// pages/index.tsx

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { GetTokens, SendTokens } from '../components/contract';
import CountdownTimer from '../components/CountdownTimer';

export default function Home() {
  const targetDate = '2024-09-15T23:59:59';

  return (
    <div className={''}>
      <header style={{ padding: '1rem' }}>
        <ConnectButton />
      </header>

      <main
        style={{
          minHeight: '60vh',
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Container for the Countdown Timer with Title and Description */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1>Welcome to My Next.js App</h1>
          <p>Stay tuned! The countdown is on for our upcoming event.</p>
          <CountdownTimer targetDate={targetDate} />
        </div>

        {/* Existing components */}
        <GetTokens />
        <SendTokens />
      </main>
    </div>
  );
}
