import React, { useState, useRef, useEffect } from 'react';
import _ from 'lodash';
import './Select.scss';

const Select = ({
  size, options, name, startValue = options[0].value, label = 'Select an option', disabled,
}) => {
  const inputRef = useRef(null);
  const [optionsWithIds, setOptionsWithIds] = useState([]);
  const [isOpened, setOpened] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const deepFindInArray = (key) => _.find(_.flatten(optionsWithIds), key);

  useEffect(() => {
    const setIds = (arr) => arr.map((item) => {
      if (Array.isArray(item)) {
        return setIds(item);
      }
      return { ...item, id: _.uniqueId() };
    });
    setOptionsWithIds(setIds(options));
    setCurrentId(deepFindInArray({ value: startValue })?.id);
  }, [options]);

  useEffect(() => {
    setCurrentId(deepFindInArray({ value: startValue })?.id);
  }, [optionsWithIds]);

  const openHandler = () => {
    setOpened(!isOpened);
    inputRef.current.focus();
  };
  const selectHandler = (id) => () => {
    setCurrentId(id);
    inputRef.current.focus();
  };

  const renderOptions = (list) => list.map((item) => {
    const { text, type = 'point', id } = item;
    return (
      Array.isArray(item) ? <div className="select__nested">{renderOptions(item)}</div>
        : (
          <div
            onClick={type === 'point' ? selectHandler(id) : undefined}
            key={id}
            role="button"
            tabIndex={id}
            onKeyDown={() => {}}
            className={`select__option select__option_${type} ${id === currentId && 'selected'}`}
          >
            {text}
          </div>
        )
    );
  });

  return (
    <div className="select" onClick={!disabled ? openHandler : undefined} role="button" tabIndex="-1" onKeyDown={!disabled ? openHandler : undefined} data-size={size}>
      <input
        className="select__input"
        type="text"
        name={name}
        ref={inputRef}
        value={currentId ? deepFindInArray({ id: currentId })?.text : ''}
        disabled={disabled}
        autoComplete="off"
        readOnly
      />
      { size === 'l' && !disabled && <div className="select__label">{label}</div>}
      {isOpened && (
      <div className="select__dropdown">
        {optionsWithIds && renderOptions(optionsWithIds)}
      </div>
      )}

    </div>
  );
};

export default Select;
