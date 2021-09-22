import moment from 'moment';
import detectEthereumProvider from '@metamask/detect-provider';


if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  }

/* async function test () {
    const provider = await detectEthereumProvider();
    console.log(provider)
    return provider
}

test() */


  detectEthereumProvider()
  .then(res => {
    console.log(res, 'PROVIDER')
  })

  const api = {
    server:'http://localhost:3001/',
    endpoints:[
      {first: {url:'test', type:'post'}},

    ]
  }
console.log(api.endpoints[0].first.url)


const callApi = (server, data) => {
  return new Promise((resolve, reject) => {
    fetch(server + 'test', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          //'Authorization': 'Token ' + state.tokenCalc
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      resolve(data)
    });
  })
}


document.querySelector('#api').addEventListener('click',()=>{
  callApi(api.server,{fff:'kkk'})
  .then(res => {
    console.log(res,'after click')
  })
}, false)


/* callApi(api.server, {fff:"kkk"})
.then((res)=>{
  console.log('api caller')
}) */
















const m = moment()

console.log(m)

console.log('some script')



