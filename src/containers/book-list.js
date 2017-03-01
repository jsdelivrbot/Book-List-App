/**
 * Created by Hazard on 01.03.2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} onClick={() => this.props.selectBook(book)} className="list-group-item">{book.title}</li>
            );
            });
    }

    render () {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // This return will show up as props inside of BookList
    return {
        books : state.books
    };
}

//This function return will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // If selectBook is called, result should be passed ALL of the reducers the app has
    return bindActionCreators({selectBook : selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);