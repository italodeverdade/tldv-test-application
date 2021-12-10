import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import Loading from './Loading';

describe("Loading.tsx", () => {
    it("should render normally", () => {
        const {getByText} = render(<Loading label="loading" />)
        const spanElement = getByText('loading');
		expect(spanElement).toBeTruthy();
    })
    it("should render lottie animation normally", () => {
        const {getByLabelText} = render(<Loading label="loading" />)
        const animationElement = getByLabelText('animation');
		expect(animationElement).toBeTruthy();
    })
});