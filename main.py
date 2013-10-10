import webapp2
import json
from jinja_handlers import MainHandler

class frontPage(MainHandler):
  def get(self):
    self.render('front.html')

class api(MainHandler):
  def get(self, model_name = None, instantce_id = None):
    logging.info("api get request detected")
    phones = [
      {'name': 'Nexus S',
       'snippet': 'Fast just got faster with Nexus S.'},
      {'name': 'Motorola XOOM with Wi-Fi',
       'snippet': 'The Next, Next Generation tablet.'},
      {'name': 'MOTOROLA XOOM',
       'snippet': 'The Next, Next Generation tablet.'}
    ];
    self.write(json.loads(phones))


  def post(self, model_name = None, instantce_id = None):
    name = self.request.get('name')
    email = self.reqeust.get('email')
    logging.info(name)
    logging.info(model_name)
    logging.info(instantce_id)
    new_user = {"name" : name, "email": email, "id" : 1}
    self.write(json.loads(new_user))

        
app = webapp2.WSGIApplication([
    ('/api', api),
    ('/api/(\w+)', api),
    ('/api/(\w+)/(\w+)', api),
    ('.*', frontPage),
    ],debug=False)

