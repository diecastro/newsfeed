import React from 'react';
import ComponentUnderTest from '../SelectExperienceContainer';

describe('containers/SelectExperience', () => {

  let wrapper;
  let commonProperties = {};

  describe('in general', () => {

    beforeEach(() => {
      commonProperties.location = {query: {}};
      wrapper = shallow(<ComponentUnderTest {...commonProperties} />);
    });

    it('should render the SelectExperience container', () => {
      expect(wrapper.find('.selectExperience').length).toBeTruthy();
    });

  });

  describe('with agentID Query string', () => {

    beforeEach(() => {
      commonProperties.location = {query: {agentId: '12345'}, search: '?agentId=12345'};
      wrapper = shallow(<ComponentUnderTest {...commonProperties} />);
    });

    it('should render the SelectExperience container', () => {
      expect(wrapper.find('.selectExperience').length).toBeTruthy();
    });

    it('should set the plans href to include agentId in query string', () => {
      expect(wrapper.find('.selectExperience').getElement().props.children['1'].props.children['1'].props.href).toBe('/plans?agentId=' + commonProperties.location.query.agentId);
    });

    it('should set the products href to include agentId in query string', () => {
      expect(wrapper.find('.selectExperience').getElement().props.children['1'].props.children['2'].props.href).toBe('/products?agentId=' + commonProperties.location.query.agentId)
    });

  });

});
