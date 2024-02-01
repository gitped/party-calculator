import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Calculator from "../src/components/Calculator";

describe('Subtraction operations', () => {

  test('subtracts 8 - 4 to equal 4', () => {
    const { getByText, getByTestId } = render(<Calculator />);    
    fireEvent.click(getByText('8'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('4');
  });

  test('subtracts 15 - 9 to equal 6', () => {
    const { getByText, getByTestId } = render(<Calculator />);    
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('9'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('6');
  });

  test('subtracts 7.8 - 2.3 to equal 5.5', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('8'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('5.5');
  })

  test('subtracts -3 - 7 to equal -10', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('-10');
  })

  test('subtracts 0 - 0 to equal 0', () => {
    const { getByText, getAllByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getAllByText('0')[0]);
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('0'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('0');
  })

});