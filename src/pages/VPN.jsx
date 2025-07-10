import React from "react";

const plans = [
  {
    name: "1-Day VPN Access",
    description: "Get secure access for 24 hours.",
    amount: "₹49",
    link: "https://rzp.io/l/vpn1day",
  },
  {
    name: "7-Day VPN Access",
    description: "Unlimited VPN access for 7 days.",
    amount: "₹199",
    link: "https://rzp.io/l/vpn7day",
  },
  {
    name: "30-Day VPN Access",
    description: "Best value! Full-month access to VPN.",
    amount: "₹499",
    link: "https://rzp.io/l/vpn30day",
  },
];

export default function VPN() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#111', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem' }}>🔐 Indianode VPN Plans</h1>
      <p>Choose a plan and get secure, decentralized VPN access within minutes.</p>

      {plans.map((plan, idx) => (
        <div key={idx} style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '10px', marginTop: '1.5rem' }}>
          <h2 style={{ color: '#4ade80' }}>{plan.name}</h2>
          <p>{plan.description}</p>
          <a
            href={plan.link}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#4ade80',
              color: '#000',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              textDecoration: 'none',
            }}
          >
            Pay {plan.amount}
          </a>
        </div>
      ))}
    </main>
  );
}
