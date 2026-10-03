export default function App() {
  const name = 'John';
  const x = 30;
  const y = 23;
  const names = ['Rose', 'Mary', 'Jane', 'Lubu'];
  const loggedIn = true;
  const styles = {
    color: 'red',
    fontSize: '15px',
  }

  return(
    <>
      <h1 className="text-xl">Hello { name }</h1>
      <p style={styles}>
        Sum of {x} and {y} is {x + y}.
      </p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn && <h1>Hi Member</h1>}
    </>
  )
}