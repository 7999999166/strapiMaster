
   module.exports = ({ env }) => ({
   // ...
   upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
   },
   // ...
   // ...
  "users-permissions": {
    config: {
      register: {
        allowedFields: [ "phoneno" , "deliveryaddress" ],
      },
    },
  },
  // ...
    // ...
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        service: 'gmail' ,
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        
      },
      settings: {
        defaultFrom: 'assipl023@gmail.com',
        defaultReplyTo: 'acrotechllp@gmail.com',
      },
    },
  },
  // ...
   //...
  meilisearch: {
    config: {
      // Your meili host
      host: env('MEILI_HOST') ,
      // Your master key or private key
      apiKey:env('MEILI_KEY') ,
    }
  }
  });