let customName = document.getElementById('customname');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');

function randomFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyy = 'It was 22 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Blank saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Fiona Wu', 'Helen Hu', 'Zoe Lu'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a snail and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyy;

  newStory = newStory.replaceAll(':insertx:',randomValueFromArray(insertX));
  newStory = newStory.replaceAll(':inserty:',randomValueFromArray(insertY));
  newStory = newStory.replaceAll(':insertz:',randomValueFromArray(insertZ));

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Blank', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}