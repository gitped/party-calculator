import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Calculator from "../src/components/Calculator";

describe('Division operations', () => {

  test('divides 10 / 2 to equal 5', () => {
    const { getByText, getByTestId } = render(<Calculator />);    
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('0'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('5');
  });

  test('divides 9.6 / 2.4 to equal 4', () => {
    const { getByText, getByTestId } = render(<Calculator />);    
    fireEvent.click(getByText('9'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('4');
  });

  test('divides -8 / 4 to equal -2', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('8'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('-2');
  })

  test('divides 0 / 5 to equal 0', () => {
    const { getByText, getAllByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getAllByText('0')[0]);
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('0');
  })

  test('divides 5 / 0 to equal Error', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('0'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveTextContent('Error');
  })

});