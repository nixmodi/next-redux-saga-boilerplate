import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Button } from 'src/components/shared/index.js';

export default function CreatePost(props) {
  const [loading, setLoading] = useState(false);

  const status = [
    {
      label: 'enabled',
      value: 'Enabled'
    },
    {
      label: 'disabled',
      value: 'Disabled'
    }
  ];

  return (
    <Form
      initialValues={{
        title: '',
        body: ''
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().required('Post title is required!'),
        body: Yup.string().required('Post body is required!')
      })}
      onSubmit={async (values, form) => {
        form.prevent;
        setLoading(true);
        await props.cretePost(values);
        setLoading(false);
      }}
    >
      {props => {
        return (
          <form
            onSubmit={e => {
              e.preventDefault();
              props.submitForm();
              return false;
            }}
            noValidate
          >
            <Form.Field.Input name="title" label="Post Title" />
            <Form.Field.Textarea name="body" label="Post Body" />
            <Form.Field.Select name="status" options={status} label="Status" />
            <Form.Field.DatePicker name="publish_date" label="Publish Date" />
            <Button
              variant="primary"
              size="lg"
              type="submit"
              isWorking={loading}
              block
            >
              Submit
            </Button>
          </form>
        );
      }}
    </Form>
  );
}
