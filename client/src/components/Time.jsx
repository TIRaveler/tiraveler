import React from 'react';

const timeBuckets = [
  {
    season: 'Winter',
    startTime: '12/1',
    endTime: '2/28',
    image: 'https://blog.beltone.com/wp-content/uploads/2017/11/pexels-photo-235621.jpg',
  },
  {
    season: 'Spring',
    startTime: '3/1',
    endTime: '5/30',
    image: 'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAzMy8zMDIvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzcxMzI2NjgxLmpwZw==',
  },
  {
    season: 'Summer',
    startTime: '6/1',
    endTime: '8/30',
    image: 'https://s-media-cache-ak0.pinimg.com/originals/e1/ce/28/e1ce28e32be5d3bf3fe017d1e6ded5d6.jpg',
  },
  {
    season: 'Fall',
    startTime: '9/1',
    endTime: '11/30',
    image: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    season: 'Any',
    startTime: '1/1',
    endTime: '12/31',
    image: 'https://s.hswstatic.com/gif/airplanes-work-1.jpg',
  },
];

const sendBucket = (start, end) => {
  console.log('start', start, 'end', end);
};

const Time = () => (
  <div className="ui equal width center aligned padded grid">
    <div className="row">
      <h1>
        When would you like to travel?
      </h1>
    </div>
    <div className="stretched row">

      {timeBuckets.map(bucket => (
        <div className="column">
          <div className="ui segment">
            <div className="ui fade reveal image">
              <img className="visible content" src={bucket.image} alt="" />
              <button className="hidden content" textalign="center" type="submit" onClick={() => sendBucket(bucket.startTime, bucket.endTime)}>
                {bucket.season}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Time;
