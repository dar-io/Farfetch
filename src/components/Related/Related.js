import React from 'react'
import './Related.scss'
import Layout from '../Layout/Layout';

export default class Related extends React.Component{
  render() {
    return (
      <Layout className="related">
        <div className="related--container">
          <h2>Related</h2>
        </div>
      </Layout>
    );
  }
}