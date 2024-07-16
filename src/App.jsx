import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((card) => {
    return (
      <Card
        key={card.id}
        img={card.coverImg}
        alt={card.alt}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </>
  );
}

export default App;
