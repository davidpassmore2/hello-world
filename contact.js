export default () => (
    <div>
      <p>
        <a href="mailto:my@email.com">Contact us!</a>
      </p>
      <style jsx global>{`
        body {
          font-family: 'Benton Sans', 'Helvetica Neue';
          margin: 2em;
        }
        h2 {
          font-style: italic;
          color: #373fff;
        }
        p {
            font-family: 'Courier New';
        }
        a {
            text-decoration: none;
            color: black;
        }
        a:hover {
            opacity: 0.8;
        }
      `}</style>
    </div>
  )