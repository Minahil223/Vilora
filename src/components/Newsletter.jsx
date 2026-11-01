
function Newsletter() {
  return (
    <section className="newsletter">

      <p>THE VILORA EXPERIENCE</p>

      <h2>Stay in the World of Vilora</h2>

      <span>
        Subscribe to discover new collections,
        exclusive updates and style inspiration.
      </span>

      <form onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you for subscribing to Vilora!");
      }}>
        <input
          type="email"
          placeholder="Enter your email address"
          required
        />

        <button type="submit">
          SUBSCRIBE
        </button>
      </form>

    </section>
  );
}

export default Newsletter;