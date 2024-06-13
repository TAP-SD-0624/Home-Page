
const urlParams = new URLSearchParams(window.location.search);
const topicId = urlParams.get('topic')

const topic = getElementById(data,parseInt(topicId))

function generateTopicPage(element){
    const topicInfo = document.getElementById('topicInfo')

    const topicTitle = document.createElement('p')
    topicTitle.classList.add('topicTitle')
    topicTitle.append(document.createTextNode(element.category))
    topicInfo.append(topicTitle)

    const topicAbbrev = document.createElement('h2')
    topicAbbrev.classList.add('topicAbbrev')
    topicAbbrev.append(document.createTextNode(element.topic))
    topicInfo.append(topicAbbrev)

    const topicRatingStars = document.createElement('div')
    for(let i=0;i<5;i++){
      const ratingStar = document.createElement('img')
      ratingStar.classList.add('favStar')
      if(i<Math.round(element.rating)){
          ratingStar.src='./assets/icons/stars-filled.svg'
      }
      else{
        ratingStar.src='./assets/icons/stars.svg'
      }
      
      topicRatingStars.appendChild(ratingStar)
    }
    topicInfo.append(topicRatingStars)

    const topicDescription = document.createElement('p')
    topicDescription.classList.add('topicDescription')
    topicDescription.append(document.createTextNode(element.description))
    topicInfo.append(topicDescription)

    document.getElementById('topicSubsHeader').appendChild(document.createTextNode(`${element.topic} Sub Topics`))
    const topicSubs = document.getElementById("topicSubs")
    element.subtopics.forEach(ele => {
      const topicSubsUnit = document.createElement('div')
      topicSubsUnit.classList.add('topicSubsUnit')

      const topicSubsUnitText = document.createElement('p')
      topicSubsUnitText.classList.add('topicSubsUnitText')
      topicSubsUnitText.append(document.createTextNode(ele))
      const svgCode =  '<svg xmlns="http://www.w3.org/2000/svg" class="checkMark" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 176L217.6 336 160 272"/></svg>'
      topicSubsUnit.innerHTML = svgCode
      topicSubsUnit.append(topicSubsUnitText)
      topicSubs.append(topicSubsUnit)
    });


    document.getElementById('topicCardImage').src = `./assets/cards/${element.image}`
    document.getElementById('topicCardAttTitle').innerText = element.topic
    document.getElementById('topicCardAttLink').innerText = element.name
  }
  generateTopicPage(topic)