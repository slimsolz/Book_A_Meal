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

  //POST sign up - should return 400 if no email
  it('should return 400 if no email', (done) =>{
  	chai.request(app)
  		.post('/api/v1/caterer/signup')
  		.send({
  			id: 1,
  			email: '',
  			username: 'solz',
  			password: 'slim'
  		})
  		.end((err, res) =>{
  			expect(res).to.have.status(400);
  			expect(res.body).to.be.a('object');
  			done();
  		});
  });

  //POST sign up - should return 400 if no username
  it('should return 400 if no username', (done) =>{
  	chai.request(app)
  		.post('/api/v1/caterer/signup')
  		.send({
  			id: 1,
  			email: 'test@gmail.com',
  			username: '',
  			password: 'slim'
  		})
  		.end((err, res) =>{
  			expect(res).to.have.status(400);
  			expect(res.body).to.be.a('object');
  			done();
  		});
  });

  //POST sign up - should return 400 if no password
  it('should return 400 if no password', (done) =>{
  	chai.request(app)
  		.post('/api/v1/caterer/signup')
  		.send({
  			id: 1,
  			email: 'test@gmail.com',
  			username: 'solz',
  			password: ''
  		})
  		.end((err, res) =>{
  			expect(res).to.have.status(400);
  			expect(res.body).to.be.a('object');
  			done();
  		});
  });
});
