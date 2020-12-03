import React from 'react'
import { shallow } from 'enzyme'

import App from '../src/App'

describe("App", () => {

    it("Should be able to render", async () => {
        const wrapper = shallow(
            <App/>
        )
        expect(wrapper).toMatchSnapshot()
    })
})