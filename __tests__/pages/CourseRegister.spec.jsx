import React from 'react'
import TestRenderer from 'react-test-renderer'

import CourseRegister from '../../src/pages/CourseRegister'

jest.mock('react-router-dom', () => ({
    Link: 'Link',
    useParams: jest.fn(),
    useHistory: jest.fn(),
})) 

describe("CourseRegister", () => {

    it("Should be able to render Course Register page", () => {

        // Testar a renderização do componente
        const component = TestRenderer.create(<CourseRegister />).toJSON()

        expect(component).toMatchSnapshot()
    })

})