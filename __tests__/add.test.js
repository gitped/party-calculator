import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Calculator from "../src/components/Calculator";

describe('Addition operations', () => {

  test('adds 2 + 3 to equal 5', () => {
    const { getByText, getByTestId } = render(<Calculator />);    
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('5');
  });

  test('adds 10 + 7 to equal 17', () => {
    const { getByText, getByTestId } = render(<Calculator />);    
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('0'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('17');
  });

  test('adds -5 + 3 to equal -2', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('-2');
  })

  test('adds 2.5 + 1.4 to equal 3.9', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('3.9');
  })

  test('adds 0 + 0 to equal 0', () => {
    const { getByText, getAllByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getAllByText('0')[0]);
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('0'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('0');
  })

});