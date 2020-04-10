const Index = () => {
  return <div />;
};

Index.getInitialProps = async function(context) {
  const { res } = context;
  res.writeHead(301, {
    Location: 'https://www.notion.so/anoffvu/Stupid-Thoughts-ac78f545fd63475e81becbbada28b654'
  })
  res.end()
  return {}
}

export default Index;