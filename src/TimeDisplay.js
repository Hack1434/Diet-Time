import React from 'react'

const TimeDisplay = () => {
  const currentTime = new Date().getHours();

  let message;
  let textColor;
  let bgColor;

  if(currentTime < 12) {
    message='Breakfast Time';
    textColor= 'black';
    bgColor = 'yellow';
  } else if(currentTime >=12 && currentTime < 18){
    message= 'Lunch Time';
    textColor = 'blue';
    bgColor = 'pink';
  } else {
    message = 'Dinner Time';
    textColor = 'red';
    bgColor = 'black';
  }

  const style = {
    color: textColor,
    backgroundColor: bgColor,
    padding: '20px',
    textAllign: 'center',
    fontSize: '2em',

  };

  return (
    <div style={style} >

    {message}

    </div>
  )



}

export default TimeDisplay;