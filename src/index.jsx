import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Select from './Select/Select';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Select
        size="l"
        name="select_input"
        label="Select one item"
        startValue="point3"
        options={[
          {
            text: 'Point 1',
            value: 'point1',
          },
          {
            type: 'heading1',
            text: 'Heading 1',
          },
          {
            type: 'heading2',
            text: 'Heading 2',
          },
          {
            text: 'Point 3',
            value: 'point3',
          },
          {
            text: 'Point 4',
            value: 'point4',
          },
          [
            {
              type: 'heading2',
              text: 'Heading 5',
            },
            {
              text: 'Point 5.1',
              value: 'point5.1',
            },
            {
              text: 'Point 5.2',
              value: 'point5.2',
            },
          ],
          {
            type: 'heading1',
            text: 'Heading 1',
          },
          {
            text: 'Point 3',
            value: 'point3',
          },
          {
            text: 'Point 5',
            value: 'point5',
          },
        ]}
      />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
