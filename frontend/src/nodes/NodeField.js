export const NodeField = ({ field, value, onChange }) => {
  const fieldValue = value ?? '';

  if (field.type === 'select') {
    return (
      <label className="node-field">
        <span className="node-field__label">{field.label}</span>
        <select
          className="node-field__control"
          value={fieldValue}
          onChange={(event) => onChange(field.name, event.target.value)}
        >
          {field.options.map((option) => {
            const optionValue = typeof option === 'string' ? option : option.value;
            const optionLabel = typeof option === 'string' ? option : option.label;

            return (
              <option key={optionValue} value={optionValue}>
                {optionLabel}
              </option>
            );
          })}
        </select>
      </label>
    );
  }

  if (field.type === 'textarea') {
    return (
      <label className="node-field">
        <span className="node-field__label">{field.label}</span>
        <textarea
          className="node-field__control node-field__control--textarea"
          value={fieldValue}
          onChange={(event) => onChange(field.name, event.target.value)}
        />
      </label>
    );
  }

  return (
    <label className="node-field">
      <span className="node-field__label">{field.label}</span>
      <input
        className="node-field__control"
        type={field.type || 'text'}
        value={fieldValue}
        onChange={(event) => onChange(field.name, event.target.value)}
      />
    </label>
  );
};
