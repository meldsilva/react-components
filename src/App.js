import styled from "styled-components";
// import './App.css';

//----------------
// Create styled components
//----------------
//Title component for h1
const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: palevioletred;
`;

//Wrapper component for section
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

//----------------
// Pass props in styled components?
//----------------
// const Button = styled.button`
//   /* Adapt the colors based on primary prop */
//   background: ${props => props.primary ? "palevioletred" : "white"};
//   color: ${props => props.primary ? "white" : "palevioletred"};
//
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;
//
// function App() {
//   return (
//       <Wrapper>
//         <Title>
//           Hello React Components
//           <br/>
//           <Button>Normal</Button>
//           <Button primary>Primary</Button>
//         </Title>
//       </Wrapper>
//   );


//----------------
// Extend styles in styled components
//----------------
// The Button from the last section without the interpolations
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

function App() {
  return (
      <Wrapper>
        <Title>
          Hello React Components
          <br/>
          <Button>Normal</Button>
          <TomatoButton primary>Primary</TomatoButton>
        </Title>
      </Wrapper>
  );
}

export default App;
