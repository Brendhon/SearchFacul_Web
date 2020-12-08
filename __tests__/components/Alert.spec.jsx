import React from 'react';
import TestRenderer from 'react-test-renderer'

import Alert from '../../src/components/Alert/Alert'

const mockOnClose = jest.fn()

describe("Alert", () => {

    it("Should be able to show alert", () => {

        // Testar a renderização do componente
        const component = TestRenderer.create(<Alert open={true} onClose={mockOnClose} />).toJSON()

        expect(component.props.className).toBe('alert-absolute')
    })

    it("Shouldn't be able to show alert", () => {

        // Testar a renderização do componente
        const component = TestRenderer.create(<Alert open={false} onClose={mockOnClose} />).toJSON()

        expect(component.props.className).toBe('alert-none')
    })

})