import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ReactFileReader from 'react-file-reader';
import parse from 'csv-parse';
import CsvParse from '@vtex/react-csv-parse';
import settings from '../../../../settings.json';
import MonthEndPayments from '../../../api/once_off/month_end_payments/collection';

export default class BlockchainAPIPaymentsComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackMessage: '',
      filenameSelected: 'NOTHING SELECTED',
      fileContent: '',
      accounts: '',
      balance: 0,
      arrayClients: [],
    };
    this.handleFiles = this.handleFiles.bind(this);
    this.checkBalance = this.checkBalance.bind(this);
    this.checkAccounts = this.checkAccounts.bind(this);
    // this.payManyAPI = this.payManyAPI.bind(this);
    this.payManyOneByOne = this.payManyOneByOne.bind(this);
    this.payOne = this.payOne.bind(this);
  }

  payOne(clientDetails) {
    console.log("clientDetails:", clientDetails);
    clientDetails['BTC Amount'] = ''+0.00005;
    clientDetails['SATOSHI Amount'] = 5000;

    axios.get(`http://localhost:3000/merchant/${settings.blockchain.guid}/payment`, {
      params: {
        to: clientDetails['BTC Wallet Address'],
        from: 0,
        amount: clientDetails['SATOSHI Amount'],
        password: settings.blockchain.password,
        fee_per_byte: '20',
      },
    })
      .then((response) => {
        console.log('PAY ONE:', response);
        clientDetails['TXSuccessfull'] = true;
        clientDetails['TXDATA'] = response.data;
        clientDetails['TXCompleted'] = new Date();
        this.setState({
          payOneInfo: response.data,
          feedbackMessage: '',
          arrayClients: [...this.state.arrayClients, clientDetails],
        });
        const methodName = 'month_end_payment.create';
        Meteor.call(methodName, clientDetails, (err, res) => {
          if (err) {
            console.log('err:',err);
          } else {
            console.log('res9:',res);
          }
        });
      })
      .catch((error) => {
        console.log('PAY ONE ERR:', error);
        clientDetails['TXSuccessfull'] = false;
        clientDetails['TXDATA'] = error;
        clientDetails['TXCompleted'] = new Date();
        this.setState({
          feedbackMessage: error.error,
          arrayClients: [...this.state.arrayClients, clientDetails],
        });
        const methodName = 'month_end_payment.create';
        Meteor.call(methodName, clientDetails, (err, res) => {
          if (err) {
            console.log('err:',err);
          } else {
            console.log('res10:',res);
          }
        });
      });
  }

  payManyOneByOne(data) {
    const that = this;
    const delay = (amount) => {
      return new Promise((resolve) => {
        setTimeout(resolve, amount);
      });
    };
    console.log('data:', data);
    let clientsObj = {};
    async function loop() {
      for (let i = 0; i < data.length; i++) {
        const client = data[i];
        console.log(client["BTC Wallet Address"]);
        console.log(client["Cell number"]);
        console.log(client["Email Address"]);
        console.log(client["First Name"]);
        console.log(client["Last Name"]);
        console.log('Next Payment call in 5 seconds..');
        await delay(1000);
        console.log('4.')
        await delay(1000);
        console.log('3.')
        await delay(1000);
        console.log('2.')
        await delay(1000);
        console.log('1.')
        await delay(1000);
        console.log('Firing call now!')
        await delay(1000);
        that.payOne(client);
      }
    }
    loop();
  }

  // payManyAPI(clientsObj) {
  //   const myJSONString = JSON.stringify(clientsObj);
  //   console.log('myJSONString:', myJSONString);
  //   const myURIEncodedJSONString = encodeURIComponent(myJSONString);
  //   console.log('myURIEncodedJSONString:', myURIEncodedJSONString);
  //   axios.get(`http://localhost:3000/merchant/${settings.blockchain.guid}/sendmany`, {
  //     params: {
  //       recipients: clientsObj,
  //       from: settings.blockchain.wallet_address,
  //       password: settings.blockchain.password,
  //       fee_per_byte: '50',
  //     },
  //   })
  //     .then((response) => {
  //       console.log('PAYMENTS:', response);
  //       // this.setState({
  //       //   paymentInfo: response.data,
  //       //   feedbackMessage: '',
  //       // });
  //     })
  //     .catch((error) => {
  //       console.log('PAYMENTS ERR:', error);
  //       // this.setState({
  //       //   feedbackMessage: error,
  //       // });
  //     });
  // }

  checkAccounts() {
    const guid = '33b87510-fcb8-415b-b92c-d668e92ea390';
    axios.get(`http://localhost:3000/merchant/${guid}/accounts`, {
      params: {
        password: 'P7e7e7r7f7e7',
      },
    })
      .then((response) => {
        console.log('ACCOUNTS3:', response);
        this.setState({
          accounts: response.data[0].label,
          feedbackMessage: '',
        });
      })
      .catch((error) => {
        console.log('ACCOUNTS ERR:', error);
        this.setState({
          feedbackMessage: error,
        });
      });
  }

  checkBalance() {
    const guid = '33b87510-fcb8-415b-b92c-d668e92ea390';
    axios.get(`http://localhost:3000/merchant/${guid}/balance`, {
      params: {
        password: 'P7e7e7r7f7e7',
      },
    })
      .then((response) => {
        console.log('BALANCE:', response);
        this.setState({
          balance: response.data.balance,
          feedbackMessage: '',
        });
      })
      .catch((error) => {
        console.log('BALANCE ERR:', error);
        this.setState({
          feedbackMessage: error,
        });
      });
  }

  handleFiles(file) {
    console.log('handleFiles:', file)
    this.setState({
      filenameSelected: file.fileList[0].name,
      base64Content: file.base64,
    });
    Meteor.call('importExistingClients', file.base64, (err, result) => {
      if (err) {
        this.setState({
          feedbackMessage: `ERROR: ${err.reason}`,
        });
      } else {
        this.setState({
          feedbackMessage: `SUCCESS: ${result}`,
        });
      }
    });
  }

  render() {
    const keys = [
      "BTC Wallet Address",
      "Cell number",
      "Email Address",
      "First Name",
      "Last Name",
      "Less Admin",
      "Original Amount",
      "To Pay",
      "none",
    ];
    return (
      <div className="schools-edit-content">
        {this.state.feedbackMessage ?
          <div>
            <h1>FEEDBACK:</h1>
            <div>{this.state.feedbackMessage}</div>
          </div>
        : ''}
        <h1 className="text-center">Payments</h1>
        <CsvParse
          keys={keys}
          separators={[',']}
          onDataUploaded={this.payManyOneByOne}
          render={onChange => <input type="file" onChange={onChange} />}
        />
        <h1 className="text-center">Account</h1>
        <Button bsStyle="danger" onClick={this.checkAccounts}>
              Accounts
        </Button>
        <div>INFO: {this.state.accounts}</div>
        <h1 className="text-center">Check Balance</h1>
        <Button bsStyle="danger" onClick={this.checkBalance}>
              Balance
        </Button>
        <div>BALANCE: {this.state.balance} Satoshis</div>
        <h1 className="text-center">Import existing clients</h1>
        <ReactFileReader fileTypes={['.csv']} base64={true} multipleFiles={false} handleFiles={this.handleFiles}>
          <Button bsStyle="primary">Upload File</Button>
        </ReactFileReader>
        <h4>{this.state.filenameSelected}</h4>
        {this.state.fileContent ?
          <div>
            <h1>FILE CONTENT:</h1>
            <div>{this.state.base64Content}</div>
            <div>{this.state.csvFile}</div>
          </div>
        : ''}
      </div>
    );
  }
}
