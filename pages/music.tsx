import React from 'react'

export default class extends React.Component {
  static async getInitialProps({ res }) {
    res.writeHead(301, {
      Location: 'https://open.spotify.com/playlist/4el8BoHmTjCPunAUGCmKpL?si=AaATjwOOQ4u3Ga7OMbKIAA'
    })
    res.end()
    return {}
  }
}