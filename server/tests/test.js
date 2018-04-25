import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const { expect } = chai;
chai.use(chaiHttp);

const Caterer = {
	id: 3,
  email: 'user-test@gmail.com',
  username: 'admin',
  password: 'passworD'
};

// POST signup
describe('POST caterer/signup', () => {
  it('should create new caterer', (done) => {
    chai.request(app)
      .post('/api/v1/caterer/signup')
      .send(Caterer)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.a('object');
        done();
      });
  });
});
