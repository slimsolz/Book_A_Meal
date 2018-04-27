import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const { expect } = chai;
chai.use(chaiHttp);

describe('GET /dashboard', () =>{
  it('should return the dashboard ', (done) =>{
    chai.request(app)
    .get('/api/v1/dashboard/1')
    .end((err, res) =>{
      expect(res).to.have.status(200);
      expect(res.body.status).to.be.equal('success');
      done();
    });
  });
});