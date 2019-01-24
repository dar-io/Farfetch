import React from 'react'
import './Breadcrumbs.scss'
import Layout from '../Layout/Layout';

export default class Breadcrumbs extends React.Component{
  render() {
    return (
      <Layout className="breadcrumbs">
        <div className="breadcrumbs--container">
          <h2>Breadcrumbs</h2>
        </div>
      </Layout>
    );
  }
}