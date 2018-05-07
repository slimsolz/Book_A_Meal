import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const { expect } = chai;
chai.use(chaiHttp);


const Customer = {
	id: 4,
	email: 'user4@gmail.com',
	username: 'user4',
	password: 'pass4'
};

/*CUSTOMER*/

// POST signup
describe('POST customer/signup', () => {
  it('should create new customer', (done) => {
    chai.request(app)
      .post('/api/v1/customer/signup')
      .send(Customer)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should return 400 if caterer email already exists', (done) => {
    chai.request(app)
      .post('/api/v1/customer/signup')
      .send({
        id: 1,
        email: 'user4@gmail.com',
        username: 'solz',
        password: 'slim'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.email).to.not.be.equal('user4@gmail.com');
        done();
      });
  });

  // POST sign up - should return 400 if no email
  it('should return 400 if no email', (done) => {
  	chai.request(app)
  		.post('/api/v1/customer/signup')
  		.send({
  			id: 1,
  			email: '',
  			username: 'solz',
  			password: 'slim'
  		})
  		.end((err, res) => {
  			expect(res).to.have.status(400);
  			expect(res.body).to.be.a('object');
  			done();
  		});
  });

  // POST sign up - should return 400 if no username
  it('should return 400 if no username', (done) => {
  	chai.request(app)
  		.post('/api/v1/customer/signup')
  		.send({
  			id: 1,
  			email: 'test@gmail.com',
  			username: '',
  			password: 'slim'
  		})
  		.end((err, res) => {
  			expect(res).to.have.status(400);
  			expect(res.body).to.be.a('object');
  			done();
  		});
  });

  // POST sign up - should return 400 if no password
  it('should return 400 if no password', (done) => {
  	chai.request(app)
  		.post('/api/v1/customer/signup')
  		.send({
  			id: 1,
  			email: 'test@gmail.com',
  			username: 'solz',
  			password: ''
  		})
  		.end((err, res) => {
  			expect(res).to.have.status(400);
  			expect(res.body).to.be.a('object');
  			done();
  		});
  });
});

describe("'Bad Request' POST customer/signin", () => {
  // POST sign in - should return 400 if no username
  it('should return 400 if no username', (done) => {
  	chai.request(app)
  		.post('/api/v1/customer/signin')
  		.send({
  			username: '',
  			password: 'slim'
  		})
  		.end((err, res) => {
  			expect(res).to.have.status(400);
  			expect(res.body).to.be.a('object');
  			done();
  		});
  });

  // POST sign in - should return 400 if no password
  it('should return 400 if no password', (done) => {
  	chai.request(app)
  		.post('/api/v1/customer/signin')
  		.send({
  			username: 'solz',
  			password: ''
  		})
  		.end((err, res) => {
  			expect(res).to.have.status(400);
  			expect(res.body).to.be.a('object');
  			done();
  		});
  });

  // POST sign in - should return 400 if undefined
  it('should return 400 if no undefined', (done) => {
  	chai.request(app)
  		.post('/api/v1/customer/signin')
  		.send({
  			username: undefined,
  			password: undefined
  		})
  		.end((err, res) => {
  			expect(res).to.have.status(400);
  			expect(res.body).to.be.a('object');
  			done();
  		});
  });

  // POST sign in - should return 400 if username and password is wrong
  it('should return 400 if username and password is wrong', (done) => {
  	chai.request(app)
  		.post('/api/v1/customer/signin')
  		.send({
  			username: 'jey@gmail',
  			password: 'bingo'
  		})
  		.end((err, res) => {
  			expect(res).to.have.status(400);
  			expect(res.body).to.be.a('object');
  			done();
  		});
  });
});

describe('POST customer/signin', () => {
  // POST sign in - should return 200 for successful login
  it('should return 200 for successful login', (done) => {
  	chai.request(app)
  		.post('/api/v1/customer/signin')
  		.send({
  			username: Customer.username,
  			password: Customer.password
  		})
  		.end((err, res) => {
  			expect(res).to.have.status(200);
  			expect(res.body).to.be.a('object');
  			expect(res.body).to.have.property('message');
  			expect(res.body.message).to.be.equal('Login successful');
  			done();
  		});
  });
});
