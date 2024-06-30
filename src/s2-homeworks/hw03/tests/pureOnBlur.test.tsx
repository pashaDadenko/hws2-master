import React from 'react';
import { pureOnBlur } from '../GreetingContainer';

let name: string;
let error: string;
const setError = (a: string) => {
	error = a;
};

beforeEach(() => {
	name = '';
	error = '';
});

test('onBlur with non-empty name', () => {
	name = 'John';
	pureOnBlur(name, setError as React.Dispatch<React.SetStateAction<string>>);
	expect(error).toBe('');
});

test('onBlur with empty name', () => {
	name = '';
	pureOnBlur(name, setError as React.Dispatch<React.SetStateAction<string>>);
	expect(error).toBe('Name is required');
});

test('onBlur with only spaces', () => {
	name = '    ';
	pureOnBlur(name, setError as React.Dispatch<React.SetStateAction<string>>);
	expect(error).toBe('Name is required');
});
