import { Component } from 'react'

export default class extends Component {
  static async getInitialProps({ res }) {
    res.writeHead(301, {
      Location: 'https://www.notion.so/anoffvu/Reading-List-3b67216063554f42bfb85fe9b20b287d'
    })
    res.end()
    return {}
  }
}
