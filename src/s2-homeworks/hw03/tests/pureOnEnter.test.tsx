import React, { KeyboardEvent } from 'react';
import { pureOnEnter } from '../GreetingContainer';

let added: boolean;
const addUser = () => {
	added = true;
};

beforeEach(() => {
	added = false;
});

test('onEnter with Enter key', () => {
	pureOnEnter({ key: 'Enter' } as KeyboardEvent<HTMLInputElement>, addUser);
	expect(added).toBe(true);
});

test('onEnter with other key', () => {
	pureOnEnter({ key: ' ' } as KeyboardEvent<HTMLInputElement>, addUser);
	expect(added).toBe(false);
});
