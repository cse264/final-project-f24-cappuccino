
return (
    <div className="idea-list">
      <h2>{title}</h2>
      <button onClick={handleSubmit}>Add an idea</button>
      {ideas?.map(renderIdea)}
    </div>
);