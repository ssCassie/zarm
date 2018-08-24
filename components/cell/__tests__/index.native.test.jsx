import { TouchableHighlight, View, Image } from 'react-native';
import React from 'react';
import { render, mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Cell from '../index.native';

describe('Cell', () => {
  it('renders correctly', () => {
    const wrapper = render(<Cell title="标题文字" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('description', () => {
    const wrapper = render(<Cell title="标题文字" description="描述文字" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('icon', () => {
    const wrapper = render(<Cell title="标题文字" description="描述文字" icon={<img alt="" src="https://zhongantecheng.github.io/zarm/images/state.18e78939.png" />} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('children', () => {
    const wrapper = render(<Cell title="标题文字">我是Cell</Cell>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('help', () => {
    const wrapper = render(<Cell title="标题文字" description="描述文字" help="我是help" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('onClick', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Cell hasArrow onClick={onClick}>我是Cell</Cell>);
    wrapper.find(TouchableHighlight).props().onPress();
    expect(onClick).toBeCalled();
  });

  it('pressIn', () => {
    const wrapper = shallow(<Cell hasArrow>我是Cell</Cell>);
    wrapper.find(TouchableHighlight).props().onPressIn();
    expect(wrapper.state('isActive')).toBe(true);
  });

  it('pressOut', () => {
    const wrapper = shallow(<Cell hasArrow>我是Cell</Cell>);
    wrapper.find(TouchableHighlight).props().onPressOut();
    expect(wrapper.state('isActive')).toBe(false);
  });
});
