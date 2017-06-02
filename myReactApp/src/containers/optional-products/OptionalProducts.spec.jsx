import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import OptionalProducts from './OptionalProducts';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


const setup = (conditions) => {
        const store = mockStore(conditions);
        const enzymeWrapper = mount( 
            <Provider store={store}>
                <OptionalProducts />
            </Provider>
        );

            return {
                enzymeWrapper
            }
        }

        describe('Test <OptionalProducts />', () => {
            it('loading component should be loaded while is fetching', () => {
                const { enzymeWrapper } = setup({optionalProducts: {
                    isFetching: true,
                    products: [],
                    fetchOptionalProducts: () =>{
                        return true;
                    }
                }});
                const op = enzymeWrapper.find(OptionalProducts);
                expect(op.find('.loading').length).toBe(1);
            })

            it('loading component should conditionsbe loaded while is b', () => {
                const { enzymeWrapper } = setup({optionalProducts: {
                    isFetching: false,
                    products: [],
                    fetchOptionalProducts: () =>{
                        return true;
                    }
                }});
                expect(enzymeWrapper.find(OptionalProducts).length).toBe(1);
            })

            it('loading component should be loaded while is ab', () => {
                const { enzymeWrapper } = setup({optionalProducts : {
                    isFetching: false,
                    products: [{
                        "image": "image",
                        "text": "text",
                        "title": "title",
                        "alt": "alt",
                        "link": "http://www.aerolineas.com.ar"
                    }],
                }});
                expect(enzymeWrapper.find(OptionalProducts).length).toBe(1);
            })
        })