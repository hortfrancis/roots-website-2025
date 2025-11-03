function App() {

  return (
    <div className='App'>
      <header>
        <h1>Roots</h1>
      </header>
      <main>
        <div className='callout'>
          <p>We use{' '}
            <span className='new-tech'>new technologies</span>{' '}<br />
            to bring{' '}
            <span className='communities-together'>communities together</span>.</p>
        </div>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Roots</p>
      </footer>
    </div>
  )
}

export default App
