import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAllFeeds } from '../actions/feed';

const home = (props) => {
    if (!props.isAuthenticated) {
        return <Redirect to="/login" />
    }

    getAllFeeds()

    console.log(props)
    return (
        <div className='container'>
            <div class='row text-center'>
                <div class='col'>
                    <h1>Welcome to Talk2me </h1>
                </div>
            </div>

            <div class='row mb-3'>
                <div class='col-md-4 mx-auto col-10'>
                    <form class='form' id='feed-create-form' method='POST' action='/create-feed'>
                        {/* {% csrf_token %} */}
                        <div class='d-none alert alert-danger' id='feed-create-form-error'></div>
                        <input type='hidden' value='/' name='next' />
                        <textarea required='required' class='form-control' name='content' placeholder='how are you feeling...'></textarea>
                        <button type='submit' class='btn btn-primary'>Feed</button>
                    </form>
                </div>
            </div>

            <div class='row' id='feeds'>
                Loading...
            </div>

        </div>



    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    feedData: state.feed.feedData
});

export default connect(mapStateToProps, { getAllFeeds })(home);

