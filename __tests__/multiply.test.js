import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Calculator from "../src/components/Calculator";

describe('Multiplication operations', () => {

  test('multiplies 2 * 3 to equal 6', () => {
    const { getByText, getByTestId } = render(<Calculator />);    
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('6');
  });

  test('multiplies -4 * 5 to equal -20', () => {
    const { getByText, getByTestId } = render(<Calculator />);    
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('-20');
  });

  test('multiplies 7 * 1 to equal 7', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('7');
  })

  test('multiplies 2.5 * 1.5 to equal 3.75', () => {
    const { getByText, getByTestId } = render(<Calculator />);    
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('3.75');
  });

  test('multiplies 0 * 10 to equal 0', () => {
    const { getByText, getAllByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getAllByText('0')[0]);
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('0'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('0');
  })

});