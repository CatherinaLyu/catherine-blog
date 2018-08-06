const main = require('../src/static/js/main');

const expect = require('chai').expect;

describe('主页面渲染测试', () => {
  it('主页面返回数据', () => {
    expect(main).to.be.an('object');
  })
})