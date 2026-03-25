function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content content={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};
const Content = ({ content }) => {
  return (
    <div>
      {content.map((part, index) => (
        <Part index={index} exercises={part.exercises} />
      ))}
    </div>
  );
};
const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises{' '}
      {parts.map((part) => part.exercises).reduce((sum, n) => sum + n, 0)}
    </p>
  );
};
const Part = ({ index, exercises }) => {
  return (
    <p key={index}>
      Part {index} {exercises}
    </p>
  );
};
