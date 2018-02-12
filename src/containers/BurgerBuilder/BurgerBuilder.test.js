import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BurgerBuilder from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { createStore, combineReducers } from 'redux';
import burgerBuilderReducer from '../../store/reducers/burgerBuilder';
import orderReducer from '../../store/reducers/order';
import authReducer from '../../store/reducers/auth';

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer
});

const store = createStore(rootReducer);

configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder store={store}/>);
  });

  it('should render <BuildControls /> when receiving ingredients', () => {
    wrapper.setProps({ingredients: {salad: 0}});
    expect(wrapper.find(BuildControls)).toHaveLength(0);
  });
});
