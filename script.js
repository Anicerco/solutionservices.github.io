const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
      'process.env.SECRET_KEY': JSON.stringify(process.env.SECRET_KEY),
    }),
  ],
};

function initSDK() {
  var apiKey = process.env.API_KEY;
  var secretKey = process.env.SECRET_KEY;
  var productId = "com.solutionservices";

  var config = new SingularConfig(apiKey, secretKey, productId);
  singularSdk.init(config);
}

document.getElementById('cta-button').addEventListener('click', function() {
    alert('Button clicked!');
    // Add tracking code here
});
