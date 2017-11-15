import {getUsers, postUser} from './requestsJquery';
import sinon from 'sinon';
import chai from 'chai'; 
const { expect } = chai;

describe('getUsers', () => {
  let stubGet;
  const callStubGet = (data, isError) => {
    if (isError) {
      return stubGet.returns(Promise.reject(data));
    }

    return stubGet.returns(Promise.resolve(data));
  };

  beforeEach(() => {
    stubGet = sinon.stub(window.$, 'get');
  });

  afterEach(() => {
    window.$.get.restore();
  });

  it('should call $.get()', () => {
    callStubGet();
    getUsers();
    expect(stubGet.called).to.be.true;
  });

  it('should call console.log() on success', (done) => {
    const consoleStub = sinon.stub(console, 'log');
    callStubGet();

    getUsers().then(() => {
      expect(consoleStub.called).to.be.true;
      done();
      consoleStub.restore();
    });
  });

  it('should call console.log() with args on success', (done) => {
    const consoleStub = sinon.stub(console, 'log');
    const testString = 'test';

    callStubGet(testString);

    getUsers().then(() => {
      expect(consoleStub.getCall(0).args[0]).to.be.equal(testString)
      done();
      consoleStub.restore();
    });
  });

  it('should call console.error() on reject', (done) => {
    const consoleStub = sinon.stub(console, 'error');
    callStubGet(null, true);

    getUsers().then(() => {
      expect(consoleStub.called).to.be.true;
      done();
      consoleStub.restore();
    });
  });

  it('should call console.error() with args on reject', (done) => {
    const consoleStub = sinon.stub(console, 'error');
    const testString = 'test';

    callStubGet(testString, true);

    getUsers().then(() => {
      expect(consoleStub.getCall(0).args[0]).to.be.equal(testString)
      done();
      consoleStub.restore();
    });
  });
});

describe('postUser', () => {
  let stubPost;
  const callStubPost = (data, isError) => {
    if (isError) {
      return stubPost.returns(Promise.reject(data));
    }

    return stubPost.returns(Promise.resolve(data));
  };

  beforeEach(() => {
    stubPost = sinon.stub(window.$, 'post');
  });

  afterEach(() => {
    window.$.post.restore();
  });

  it('should call $.post()', () => {
    callStubPost();
    postUser();
    expect(stubPost.called).to.be.true;
  });

  it('should call console.log() on success', (done) => {
    const consoleStub = sinon.stub(console, 'log');
    callStubPost();

    postUser().then(() => {
      expect(consoleStub.called).to.be.true;
      done();
      consoleStub.restore();
    });
  });

  it('should call console.log() with args on success', (done) => {
    const consoleStub = sinon.stub(console, 'log');
    const testObj = { name: "Ilia", id: 11 };

    callStubPost(testObj);

    postUser().then(() => {
      expect(consoleStub.getCall(0).args[0].id).to.be.equal(testObj.id);
      expect(consoleStub.getCall(0).args[0].name).to.be.equal(testObj.name);
      done();
      consoleStub.restore();
    });
  });

  it('should call console.error() on reject', (done) => {
    const consoleStub = sinon.stub(console, 'error');
    callStubPost(null, true);

    postUser().then(() => {
      expect(consoleStub.called).to.be.true;
      done();
      consoleStub.restore();
    });
  });

  it('should call console.error() with args on reject', (done) => {
    const consoleStub = sinon.stub(console, 'error');
    const testObj = { name: "Ilia", id: 11 };

    callStubPost(testObj, true);

    postUser().then(() => {
      expect(consoleStub.getCall(0).args[0].name).to.be.equal(testObj.name);
      expect(consoleStub.getCall(0).args[0].id).to.be.equal(testObj.id);
      done();
      consoleStub.restore();
    });
  });
});
