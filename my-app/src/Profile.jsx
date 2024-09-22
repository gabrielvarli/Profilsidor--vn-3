import { useState } from 'react';

export default function Profile({ person }) {
  //  showMore för att toggla visning av detaljer
  const [showMore, setShowMore] = useState(false);

  const { firstName, lastName, age, hobby } = person;

  return (
    <div>
      <h3>{firstName} {lastName}
        {/* Knapp som togglar visning av detaljer */}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show less" : "Show more"}
        </button>
      </h3>
      {/* Visa detaljer om showMore är true */}
      {showMore && (
        <div>
          <p>Age: {age}</p>
          <p>Hobby: {hobby}</p>
        </div>
      )}
    </div>
  );
}
