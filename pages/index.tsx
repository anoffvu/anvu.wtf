const Index = () => {
  return <div />
}

Index.getInitialProps = async function (context) {
  const { res } = context
  res.writeHead(301, {
    Location: 'an-vu.com'
  })
  res.end()
  return {}
}

export default Index
