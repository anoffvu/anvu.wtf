import React from 'react'

export default class extends React.Component {
  static async getInitialProps({ res }) {
    res.writeHead(301, {
      Location: 'https://drive.google.com/file/d/12ldcakwAMGRA3nOOGSrdhfPrQSvS-YvS/view?usp=sharing'
    })
    res.end()
    return {}
  }
}