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


  const state = {
    token: false
  }

  //const s = 'https://dev-cryptoart.herokuapp.com/'
  //heroku dep
  const s = 'http://localhost:5000/'

  const api = {
    server:s,
    endpoints:[
      {first: {url:'test', type:'post'}},

    ]
  }
console.log(api.endpoints[0].first.url)


const callApi = (endpoint, data) => {

  return new Promise((resolve, reject) => {
    fetch(endpoint, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': state.token
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
  callApi(s+'test',{fff:'kkk'})
  .then(res => {
    console.log(res,'after click')
    document.querySelector('#answer').innerHTML = JSON.stringify(res)
  })
}, false)


document.querySelector('#login').addEventListener('click',() => {
  const login = document.querySelector('#email').value
  const pass = document.querySelector('#pass').value
  
  callApi(s+'login',{login, pass})
  .then(res => {
    console.log(res,'LOGIN')
    state.all = res
    state.token = res.token
    console.log(state,'STATE')
  })
})


document.querySelector('#register').addEventListener('click',() => {
  const login = document.querySelector('#email').value
  const pass = document.querySelector('#pass').value
  
  callApi(s+'signup',{login, pass})
  .then(res => {
    console.log(res,'SIGNUP')
  })
})


document.querySelector('#protected').addEventListener('click', ()=>{
  console.log(state.all.token)
  callApi(s+'protected',state)
  .then(res=>{
    console.log(res,'protected')
  })
}, false)


/* callApi(api.server, {fff:"kkk"})
.then((res)=>{
  console.log('api caller')
}) */
















const m = moment()

console.log(m)

console.log('some script.xxx')

///////////////////
let dep = 1.5
let days = 1
let bnb = 0
let rate = 408

const slider = document.getElementById("myRange");
slider.oninput = () => {
  bnb = parseFloat(slider.value)
  moves()
}

const sliderDays = document.getElementById("myRange2");
sliderDays.oninput = () => {
  days = parseInt(sliderDays.value)
  moves()
}

[...document.querySelectorAll('.dep')].map(d=>{
  d.addEventListener('click',() => {
    [...document.querySelectorAll('.dep')].map(x=>{x.classList.remove('sel')})
    dep = parseFloat(d.getAttribute('data-v'))
    d.classList.add('sel')
    moves()
  })
})

const moves = () => {
  const percents = bnb*dep/100
  let x = bnb
  
  for(let i = 1; i<=days; i++){
   x = x+(x*dep/100)
  }

 const total = x
 const totalWithoutDep = x - bnb

 const str = `DEPO:${dep}% | BNB:${bnb} | DAYS:${days} | RateUSD:${rate} |<br> | TOTAL: ${total.toFixed(2)} | TOTAL-BODY: ${totalWithoutDep.toFixed(2)} | TOTAL*RATE: ${(total*rate).toFixed(2)}$`
  console.log(str)
  document.querySelector('#outVal').innerHTML = str
}



