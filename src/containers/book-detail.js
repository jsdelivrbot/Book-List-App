/**
 * Created by Hazard on 01.03.2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

    render(){
        if(!this.props.book) {
            return <div>Select a book to get started.</div>;
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // This return will show up as props inside of BookList
    return {
        books : state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);