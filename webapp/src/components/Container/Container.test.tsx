import React from 'react';
import { render } from '@testing-library/react';
import Container from '.';

describe("Container.tsx", () => {
    it("should render children normally", () => {
        const {getByText} = render(<Container><span>children content</span></Container>)
        const spanElement = getByText('children content');
		expect(spanElement).toBeTruthy();
    })
});