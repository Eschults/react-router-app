import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField'

import { createPost } from '../actions';

class PostForm extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  onSubmit = (values) => {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
          <Field
            className="form-control"
            label="Content"
            name="content"
            component="textarea"
          />
          <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>
            Create Post
          </button>
        </form>
        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}

export default reduxForm({
  form: 'newPostForm' // a unique identifier
})(
  connect(null, { createPost })(PostForm)
);
