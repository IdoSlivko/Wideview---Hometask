import { createServer, Response, Model } from 'miragejs';

createServer({

    models: {
        user: Model,
    },

    routes() {
     this.urlPrefix = 'http://localhost:4200';

    this.post('/', (schema, request) => {
        
        let data = JSON.parse(request.requestBody);
        let { email, password } = data;
        
        if (!(schema.users.findBy({ email: email, password: password }))) {
            return new Response(401, {}, { error: ['401 User not found. Please try again.'], status: 401 });
        }
        else {
            return;
        }
    })
  },

  seeds(server) {
    server.create("user", { email: "example@example.com", password: "1234" })
  },

})
