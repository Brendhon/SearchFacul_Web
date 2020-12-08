import React from 'react';
import TestRenderer from 'react-test-renderer'

import * as CONSTANTS from '../utils/constants'
import Card from '../../src/components/Card/Card'

describe("Card", () => {

    // Atributos
    let data

    // Antes de todos os testes iniciar a variável
    beforeEach(() => {
        data = Object.assign({}, CONSTANTS.courseExample)
    })

    it("Should be able to render Card without been authenticated", () => {

        // Testar a renderização do componente
        const tree = TestRenderer.create(<Card {...data} />).root

        // Encontrando componentes pelo nome da class CSS
        const content = tree.findByProps({ className: 'card-top' })

        // A propriedade authenticated não deve estar presente
        expect(tree.props.authenticated).toBeUndefined()
        // O componente que foi renderizado não deve possuir uma classe CSS
        expect(content.children[0].props.className).toBeUndefined()

    })

    it("Should be able to render Card with property 'authenticated'", () => {

        // Testar a renderização do componente
        const tree = TestRenderer.create(<Card authenticated {...data} />).root

        // Encontrando componentes pelo nome da class CSS
        const content = tree.findByProps({ className: 'card-top-authenticated' })

        // O componente autentificado deve possuir a classe card-top-authenticated
        expect(content).toBeDefined()
    })

})