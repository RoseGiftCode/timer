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
        {/* Existing components */}
        <GetTokens />
        <SendTokens />

        {/* Container for the Countdown Timer with Title and Description */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            padding: '1rem',
            backgroundColor: '#f0f8ff',
            borderRadius: '8px',
            color: '#333',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '600px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1 style={{ color: '#0070f3', fontSize: '1.5rem' }}>Welcome to SuperDrop/h1>
          <p style={{ color: '#555', fontSize: '1rem' }}>Stay tuned! The countdown is on, Seize the Opportunity.</p>
          <CountdownTimer targetDate={targetDate} style={{ fontSize: '2rem' }} />
        </div>
      </main>
    </div>
  );
}
