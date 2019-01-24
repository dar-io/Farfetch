import React from 'react'
import './Advert.scss'
import Layout from '../Layout/Layout';

export default class Advert extends React.Component{
  render() {
    return (
      <Layout className="advert">
        <div className="advert--container">
          <h2>Advert</h2>
        </div>
      </Layout>
    );
  }
}