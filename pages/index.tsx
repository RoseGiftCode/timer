// pages/index.tsx

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { GetTokens, SendTokens } from '../components/contract';
import CountdownTimer from '../components/CountdownTimer';

export default function Home() {
  const targetDate = '2024-09-31T23:59:59';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensure the div takes full height of the viewport
      }}
    >
      <header style={{ padding: '1rem' }}>
        <ConnectButton />
      </header>

      <main
        style={{
          flex: '1', // Take up remaining space
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Existing components */}
        <GetTokens />
        <SendTokens />
      </main>

      {/* Container for the Countdown Timer with Title and Description moved to footer */}
      <footer
        style={{
          textAlign: 'center',
          padding: '1rem',
          backgroundColor: '#f0f8ff',
          borderRadius: '8px',
          color: '#333',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '600px',
          marginTop: 'auto', // Push footer to the bottom
        }}
      >
        <h1 style={{ color: '#0070f3', fontSize: '1.5rem' }}>Welcome to SuperDrop</h1>
        <p style={{ color: '#555', fontSize: '1rem' }}>Unlock exclusive crypto airdrops with ease! SuperDrop lets you discover and claim tokens from various blockchain networks in just a few clicks. </p>
        <CountdownTimer targetDate={targetDate} style={{ fontSize: '2rem', fontWeight: 'bold' }} />
      </footer>
    </div>
  );
}



















// // pages/index.tsx

// import { ConnectButton } from '@rainbow-me/rainbowkit';
// import { GetTokens, SendTokens } from '../components/contract';
// import CountdownTimer from '../components/CountdownTimer';

// export default function Home() {
//   const targetDate = '2024-09-15T23:59:59'; // Make sure the date format is correct

//   return (
//     <div>
//       <header style={{ padding: '1rem' }}>
//         <ConnectButton />
//       </header>

//       <main
//         style={{
//           minHeight: '60vh',
//           flex: '1',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         {/* Existing components */}
//         <GetTokens />
//         <SendTokens />

//         {/* Container for the Countdown Timer with Title and Description */}
//         <div
//           style={{
//             textAlign: 'center',
//             marginTop: '2rem',
//             padding: '1rem',
//             backgroundColor: '#000000',
//             borderRadius: '8px',
//             color: '#333',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             width: '100%',
//             maxWidth: '600px',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <h1 style={{ color: '#305cde', fontSize: '1.5rem' }}>Welcome to SuperDrop</h1>
//           <p style={{ color: '#ffffff', fontSize: '1rem' }}>
//             Unlock exclusive crypto airdrops with ease! SuperDrop lets you discover and claim tokens from various blockchain networks in just a few clicks.
//           </p>
//           <CountdownTimer
//             targetDate={targetDate}
//             style={{ fontSize: '2rem', fontWeight: 'bold' }} // Added fontWeight
//           />
//         </div>
//       </main>
//     </div>
//   );
// }
