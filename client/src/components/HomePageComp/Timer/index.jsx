import React, { Component } from 'react';
import './index.scss';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: props.initialTime,
    };

    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(this.updateTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateTimer = () => {
    this.setState((prevState) => ({
      timeRemaining: prevState.timeRemaining - 1,
    }));

    if (this.state.timeRemaining === 0) {
      clearInterval(this.intervalId);
    }
  };

  render() {
    const { timeRemaining } = this.state;
    const days = Math.floor(timeRemaining / (24 * 60 * 60)); // günleri hesapla
    const hours = Math.floor((timeRemaining % (24 * 60 * 60)) / (60 * 60)); // saatleri hesapla
    const minutes = Math.floor((timeRemaining % (60 * 60)) / 60); // dakikaları hesapla
    const seconds = timeRemaining % 60;

    return (
      <div className='timer'>
        <ul>
        <div className='labelexpired'>

<li><span>{`${days}`}</span>Days</li>
<li><span>{`${hours}`}</span>Hours</li>
<li><span>{`${minutes}`}</span>Min</li>
<li><span>{`${seconds}`}</span>Sec</li>
           
        </div>
        </ul>
      </div>
    );
  }
}

// Örnek kullanım
function Timer() {
  // 3 gün süresince geçen saniye sayısı hesaplaması
  const threeDaysInSeconds = 5 * 24 * 60 * 60;
  return <CountdownTimer initialTime={threeDaysInSeconds} />;
}

export default Timer;