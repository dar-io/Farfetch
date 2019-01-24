import React from 'react'
import './Footer.scss'
import Layout from '../Layout/Layout';

export default class Footer extends React.Component{
  render() {
    return (
      <Layout className="footer">
        <div className="footer--container">
          <h2>Footer</h2>
        </div>
      </Layout>
    );
  }
}