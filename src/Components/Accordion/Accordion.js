import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './Accordion.css'

const AccordionSection = styled.div`
width: 80%;
padding-bottom: 5rem;
@media screen and (max-width: 920px) {
  width: 100%;
  padding-bottom: 1rem;
}
`;

const Container = styled.div`
`;

const Wrap = styled.div`
color: black;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;

div {
  padding: 2rem;
  color: #171717;
  font-size: 1.6rem;
  font-weight: 100,
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  color: #0C3B6B;
  border-bottom: 1px solid #2974c2;
  border-top: 1px outset #d2d2d2;

  p {
    font-size: 1.6rem;
    padding: 2rem;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };



  return (
    <div className='accordian-block'>
    <h1 className='sec-headings'>FAQ</h1>
    <IconContext.Provider value={{ color: 'black', size: '25px' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <div key={index+1}>
                <Wrap onClick={() => toggle(index)} key={index+1}>
                  <div>{item.question}</div>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown key={index}>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </div>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
          </div>
  );
};

export default Accordion;
