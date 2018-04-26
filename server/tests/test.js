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

//homepage
describe('GET /', () =>{
  it('should return the homepage', (done) =>{
    chai.request(app)
    .get('/api/v1/')
    .end((err, res) =>{
      expect(res).to.have.status(200);
      expect(res.body.status).to.be.equal('success');
      done();
    })
  });
});


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

  // POST sign up - should return 400 if no email
  it('should return 400 if no email', (done) => {
  	chai.request(app)
  		.post('/api/v1/caterer/signup')
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
  		.post('/api/v1/caterer/signup')
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
  		.post('/api/v1/caterer/signup')
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

describe("'Bad Request' POST caterer/signin", () => {
  // POST sign in - should return 400 if no username
  it('should return 400 if no username', (done) => {
  	chai.request(app)
  		.post('/api/v1/caterer/signin')
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
  		.post('/api/v1/caterer/signin')
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
  		.post('/api/v1/caterer/signin')
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
/*  it('should return 400 if username and password is wrong', (done) => {
  	chai.request(app)
  		.post('/api/v1/caterer/signin')
  		.send({
  			username: 'jey@gmail',
  			password: 'bingo'
  		})
  		.end((err, res) => {
  			expect(res).to.have.status(400);
  			expect(res.body).to.be.a('object');
  			done();
  		});
  });*/
});

describe('POSt caterer/signin', () => {
  // POST sign in - should return 200 for successful login
  it('should return 200 for successful login', (done) => {
  	chai.request(app)
  		.post('/api/v1/caterer/signin')
  		.send({
  			username: 'admin',
  			password: 'passworD'
  		})
  		.end((err, res) => {
  			expect(res).to.have.status(200);
  			expect(res.body).to.be.a('object');
  			done();
  		});
  });
});

//  Get 404
describe('GET page not found', () => {
  it('should return 404', (done) => {
    chai.request(app)
      .get('/api/v1/kjdfkjwkbw')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.message).to.equal('Not found');
        done();
      });
  });
});
