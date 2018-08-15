import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import './Dashboard.css';

import { getUsers } from '../../ducks/reducer';

class Dashboard extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    // this.props.getUsers();
    this.getPosts();
  }

  getPosts = () => {
    axios.get('/api/posts')
    .then(res=> {
      console.log(res.data);
      this.setState({posts: res.data})
    })


  }
  
  render() {
    console.log(this.state);

    const map = this.state.posts.map(e=> {
      return <div className='posts_map' key={e.id}>
        <h2>{e.title}</h2>
        <p>{e.content}</p>
      </div>
    })

    console.log(map)
    return (
      <div className="dashboard">
        <div className="dash_top">
          <div className="dash_search">
            <input type="text" placeholder="Search by Title..." />
            <div className="icon_container">
              <img
                className="search_icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAeJJREFUSA2tlM0rBGEcx3dWEREp4oBVrvsXLJEoTsR/QDk6ydt1E2ccuIniKGeEi4MLbY6SAzaRUt5C1uer9pkZM7PM2m99muf5vT0zz/yeJxLxUSaTKYch2IJzeIF7SMECdPikeUzWTwuJI9iSUA0HcAhpKIVm6IEWkG/UsqwUz9yiaAmswScsQ31QBr4uOIEnGAyKM3aCVFjB/caYY0CcXmYVPqA7MBTnCOiN/1Q4W4h4C/Rf9D9qs3bzxKifdwNLxhhiQF4V3MGiJw2juuIN6jzOPxrInYRnKHOlYNBnbbuMISfkx0Dqc6ZGmcRB7Za3aMcLkq9BtYxUXC2nPv6vVMPVvir+Ajog/5VqvDqLqPgVxJzGsGP2uoicBlAtIxXfh15jyW+QIK0CdCXYYtV2kDpta7gRuRtwBpYnE+MeHEOxx/mLgZxW0Oke9g3FEYdHWAHv6r5ZkQixTZCGXdAW+wvnALzDJlT6R9lWYhKgwtKM7QkYEaSrVJfQLYxDozOUeRTaYB20FTuQBGnKGes7JqgG5kHXr3QJR3AKDyDp5+lO+t4KnhMguRYI3F8CdSh0T+tI6+TpgKiP1W7HHPkMTyPiJ5jMwTS+WeMo1EALgOT6gkLVVwdlF9CXFF4sMAapL60vtT4ftHlFAAAAAElFTkSuQmCC"
                alt="Magnifying glass"
              />
              <h3>Reset</h3>
            </div>
          </div>
          <div className="dash_top2">
            <h2>My Posts</h2>
            <input type="checkbox" />
          </div>
        </div>
        <div className='dash_bottom'>
          {map}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUsers }
)(Dashboard);
