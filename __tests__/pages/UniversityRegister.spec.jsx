import React from 'react'
import TestRenderer from 'react-test-renderer'

import UniversityRegister from '../../src/pages/UniversityRegister'

jest.mock('react-router-dom', () => ({
    Link: 'Link',
    useParams: jest.fn(),
    useHistory: jest.fn(),
})) 

describe("UniversityRegister", () => {

    it("Should be able to render University Register page", () => {

        // Testar a renderização do componente
        const component = TestRenderer.create(<UniversityRegister />).toJSON()

        expect(component).toMatchSnapshot()
    })

})