
import React from 'react';
import { shallow } from 'enzyme';
import ComponentUnderTest from '../PageNotFound'

describe('components/PageNotFound', () => {
  let wrapper;

  describe('in general', () => {
    beforeEach(() => {
      wrapper = shallow(<ComponentUnderTest />).shallow();
    });

    it('should render the PageNotFound component', () => {
      expect(wrapper.find('.notFound').length).toBeTruthy();
    });
  });
});
