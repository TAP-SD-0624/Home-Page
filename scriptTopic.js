
//retrieve id from url
const topicId = location.search.split('topic=')[1]
const topic = getElementById(data,parseInt(topicId))
//generate TopicSubs
function generateTopicSubs(mainTopic,subtopicsList){
  document.getElementById('topicSubsHeader').innerText=(`${mainTopic} Sub Topics`)
  const topicSubs = document.getElementById("topicSubs")
  subtopicsList.forEach(ele => {
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



}
function generateTopicPage(element){
    document.getElementById('topicTitle').innerText=element.category
    document.getElementById('topicAbbrev').innerText=element.topic
    const topicRatingStars = document.getElementById('topicRatingStars')
    generateStars(topicRatingStars,element.rating,'favStar')
    generateTopicSubs(element.topic,element.subtopics)
    document.getElementById('topicDescription').innerText=element.description
    document.getElementById('topicCardImage').src = `./assets/cards/${element.image}`
    document.getElementById('topicCardAttTitle').innerText = element.topic
    document.getElementById('topicCardAttLink').innerText = element.name
}
generateTopicPage(topic)