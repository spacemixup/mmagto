import React from 'react';

function Events({events = {}}) {

  console.log(events, "EVENTS")
  
  function pushbutton(e) {
    alert('it work')
    e.preventDefault()
  }

  function fightFight(events) {
    return events.fights.map((events,key) => {
      return <div className="events" key={key} onClick={pushbutton}> {
        events[0]['banner'].map((event, key) => {
          return (
            <div key={key}>
              {event.$.vtm}
              {event.$.htm}
            </div>
          )
        })
      }
      </div>
    }) 
  }

  if (events.fights[0]) { 
    return (
    <div>
      <div className="fightFight"> 
        {fightFight(events)} 
      </div>
    </div>
    )
  } else {
    return <div><h1>..loading</h1></div>
  }  
}

export default Events;