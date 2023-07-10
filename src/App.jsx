
import "./styles/app.sass"

function App() {


  return (
    <div className="container">

      <div className="top-side">
        <h1>Join our community</h1>



        <h2>30-day, hassle-free money back guarantee</h2>
        <div className="top-paragraph">
          <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>

        </div>

      </div>

      <div className="bottom-side">
        <div className="bottom-side-left">
          <h3>Monthly Subscription</h3>
          <div className="price">
            <p>$29</p>
            <p>per month</p>
          </div>
          <p>Full access for less than $1 a day</p>
          <button>Sign Up</button>

        </div>
        <div className="bottom-side-right">
          <h3>Why Us</h3>
          <ul>
            <li>Tutorials by industry experts</li>
            <li>Peer &amp; expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>

        </div>
      </div>

    </div>
  )
}

export default App
