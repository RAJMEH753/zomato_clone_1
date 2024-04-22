const paypal = require('paypal-rest-sdk');
const app = require("express").Router();

// Configure PayPal SDK
paypal.configure({
    mode: 'sandbox', //sandbox or live
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET
});

// Route to initiate payment
app.post('/pay', (req, res) => {
    console.log(req.body.amount)
    const create_payment_json = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal'
      },
      redirect_urls: {
        return_url: `${process.env.REACT_URL}/success`,
        cancel_url: `${process.env.REACT_URL}/cancel`
      },
      transactions: [{
        item_list: {
          items: [{
            name: 'Item Name',
            sku: '001',
            price: req.body.amount,
            currency: 'USD',
            quantity: 1
          }]
        },
        amount: {
          currency: 'USD',
          total: req.body.amount
        },
        description: 'Description of the item'
      }]
    };
  
    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
        throw error;
      } else {
        for (let i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel === 'approval_url') {
            res.send(payment.links[i].href);
          }
        }
      }
    });
});
  
// Route to execute payment
app.get('/api/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
  
    const execute_payment_json = {
      payer_id: payerId
    };
  
    paypal.payment.execute(paymentId, execute_payment_json, async function (error, payment) {
      if (error) {
        console.log(error.response);
        throw error;
      } else {
        console.log(JSON.stringify(payment));
        res.send('Payment Successful');
      }
    });
});

// Function to fetch transaction details
function fetchTransactionDetails(transactionId) {
  return new Promise((resolve, reject) => {
    paypal.sale.get(transactionId, (error, transaction) => {
      if (error) {
        reject(error);
      } else {
        resolve(transaction);
      }
    });
  });
}
  
  app.get('/api/cancel', (req, res) => res.send('Payment Cancelled'));

  module.exports = app;
