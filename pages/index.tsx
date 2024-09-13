// pages/index.tsx

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { GetTokens, SendTokens } from '../components/contract';
import CountdownTimer from '../components/CountdownTimer';

export default function Home() {
  const targetDate = '2024-09-20T23:59:59';

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
        {/* Add CountdownTimer component here */}
        <CountdownTimer targetDate={targetDate} style={{ marginBottom: '2rem' }} />

        <GetTokens />
        <SendTokens />
      </main>
    </div>
  );
}
