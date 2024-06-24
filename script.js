// favourite control
let fav = 'hidden'
function toggleFavourite(){
  const x = document.getElementById('favWindow')
  if(fav === 'hidden'){
    x.style.display='block'
    fav='block'
  }else{
    x.style.display='none'
    fav='hidden'
  }
}

// favourite toggle
function changeTheMood(){
  document.getElementById('body').classList.toggle('darkColors')
}
//generate Stars used in both files
function generateStars(parent,rating,starsClass){
  for(let i=0;i<5;i++){
    const ratingStar = document.createElement('img')
    ratingStar.classList.add(starsClass)
    if(i<Math.round(rating)){
        ratingStar.src='./assets/icons/stars-filled.svg'
    }
    else{
      ratingStar.src='./assets/icons/stars.svg'
    }
    parent.appendChild(ratingStar)
  }
}

// extract all the data from the data.js and add them to the main page
function extractData(topics){
        const cardWraper = document.getElementById("cardWraper")
        topics.forEach(element => {
          const card = document.createElement('div')
          card.classList.add('card')
          card.addEventListener('click',()=>goToTopicPage(element.id))
          const cardImage = document.createElement('img')
          cardImage.classList.add('cardImage')
          cardImage.src = `./assets/cards/${element.image}`
          card.appendChild(cardImage)
          const cardInfo = document.createElement('div')
          cardInfo.classList.add('cardInfo')
          const cardDiscription = document.createElement('p')
          cardDiscription.classList.add('cardDiscription')
          cardDiscription.appendChild(document.createTextNode(element.category))
          cardInfo.appendChild(cardDiscription)
          const cardTitle = document.createElement('h3')
          cardTitle.classList.add('cardTitle')
          cardTitle.appendChild(document.createTextNode(element.topic))
          cardInfo.appendChild(cardTitle)
          const allStars = document.createElement('div')
          allStars.classList.add('allStars')
          generateStars(allStars,element.rating,'ratingStars')
          cardInfo.appendChild(allStars)
          const cardAuther = document.createElement('p')
          cardAuther.classList.add('cardAuther')
          cardAuther.appendChild(document.createTextNode(element.name))
          cardInfo.appendChild(cardAuther)
          card.appendChild(cardInfo)
          cardWraper.appendChild(card)
    })

}
extractData(data)




function getElementById(items,id){
  return items.find(x=>x.id===id)
}
// card generator
function generateMiniCard(imgLink,titleName,rating){
  
  const miniCard = document.createElement('div')
  miniCard.classList.add('favCard')
  const image = document.createElement('img')
  image.src = `./assets/cards/${imgLink}`
  image.classList.add('favImg')

  const title = document.createElement('p')
  const titleText = document.createTextNode(titleName)
  title.classList.add('favTitle')
  title.appendChild(titleText)

  const ratingStars = document.createElement('div')
  ratingStars.classList.add('favStars')

  for(let i=0;i<5;i++){
      const ratingStar = document.createElement('img')
      ratingStar.classList.add('favStar')
      if(i<Math.round(rating)){
          ratingStar.src='./assets/icons/stars-filled.svg'
      }
      else{
        ratingStar.src='./assets/icons/stars.svg'
      }
      
      ratingStars.appendChild(ratingStar)
  }

  miniCard.appendChild(image)
  miniCard.appendChild(title)
  miniCard.appendChild(ratingStars)
  return miniCard

}
function addToFavourit(ids){
  const x = document.getElementById('favCards')
  ids.forEach(id => {
    
    const ele = (getElementById(data,id))
    const miniCard = generateMiniCard(ele.image,ele.topic,ele.rating)
    x.appendChild(miniCard)
  });
}
addToFavourit([1,4,7,8,5,2,6])
function goToTopicPage(id){
  window.location.href=`topic.html?topic=${id}`
}