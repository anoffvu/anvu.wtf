import React from 'react'

export default class extends React.Component {
  static async getInitialProps({ res }) {
    res.writeHead(301, {
      Location: 'https://www.notion.so/anoffvu/Stupid-Thoughts-ac78f545fd63475e81becbbada28b654'
    })
    res.end()
    return {}
  }
}