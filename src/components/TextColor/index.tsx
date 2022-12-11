import React from 'react';
import styled from 'styled-components';

export default function TextColor({
  text,
  color,
}: {
  text: string;
  color: 'red' | 'yellow' | 'green';
}) {
  return (
    <SText color={color}>
      <span>{text}</span>
    </SText>
  );
}

type TText = {
  color: 'red' | 'yellow' | 'green';
};

const SText = styled.div<TText>`
  font-weight: 700;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 2px;
  letter-spacing: 0.6px;
  font-size: 10px;
  display: inline-block;

  background-color: ${props =>
    props.color === 'red'
      ? '#facccc'
      : props.color === 'yellow'
      ? '#ffead6'
      : '#cff7e4'};
  border-color: ${props =>
    props.color === 'red'
      ? '#f8b8b8'
      : props.color === 'yellow'
      ? '#ffe1c5'
      : '#bcf4d9'};

  span {
    color: ${props =>
      props.color === 'red'
        ? '#e50202'
        : props.color === 'yellow'
        ? '#fe9431'
        : '#10d876'};
  }
`;
