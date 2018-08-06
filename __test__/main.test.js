const main = require('../src/static/js/main');

const expect = require('chai').expect;

describe('主页面渲染测试', () => {
  it('主页面返回数据', () => {
    expect(main).to.be.an('object');
  })
})


import Enzyme,{ mount } from 'enzyme';
import Main from '../src/static/js/main';

describe('应该正确显示基本结构', function() {

	it('should ...', function() {
		wrapper = mount(
			<Main isDisabled={true} />
		);
		expect( wrapper.find('input').exists() ).toBeTruthy();
	});
});