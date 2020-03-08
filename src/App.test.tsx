import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {ExampleService} from "./example-service";
import {Foo} from "./foo-service";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('testing my service', () => {
    const ex = new ExampleService({
        doTheThing: () => {
            return 'it works'
        }
    } as Foo);
    expect(ex.doAFooThing()).toEqual('it works')
});
