import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

export default function Home() {
  const loggedIn = { firstName: 'Miguel'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your finances'
          />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1300000} />
        </header>
      </div>
    </section>
  );
}
